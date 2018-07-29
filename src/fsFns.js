const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

/**
 * Copies across a particular file from the templates directory to the output directory.
 *
 * @internal
 *
 * @param destinationFilePath {string}
 * @param outputFn {Function}
 *
 * @returns {Promise<any>}
 */
const _filePipeline = function(destinationFilePath, outputFn) {
    return new Promise(async (resolve, reject) => {
        // break up output path, and create directories as necessary until the file can be placed.
        const pathObj = path.parse(destinationFilePath);
        const dirs = pathObj.dir.split("/");

        dirs.forEach((dir, i) => {
            const pathToCheck = path.join('output', ...dirs.slice(0, i+1));
            if (!fs.existsSync(pathToCheck)) {
                fs.mkdirSync(pathToCheck);
            }
        });

        return outputFn(resolve, reject);
    });
};

module.exports = {

    /**
     * Reads a file, and returns a string representing its contents.
     *
     * @param filePath {string} - The path to the file that should be read.
     *
     * @returns {Promise<string>} - A promise that resolves to a string if file reading was successful, or returns
     * an error if file reading failed.
     */
    readFile: function(filePath) {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) return reject(err);
                return resolve(data);
            });
        });
    },

    /**
     * Takes a source file path, and copies it to a provided destination file path.
     *
     * @param sourceFilePath {string} - The path to the source file.
     * @param destinationFilePath {string} - The path to the destination file.
     *
     * @returns {Promise<void>} - Resolves successfully when the file is written.
     */
    fileToFile: function(sourceFilePath, destinationFilePath) {
        return _filePipeline(destinationFilePath, (res, rej) => {
            fs.copyFile(path.join(sourceFilePath), path.join('output', destinationFilePath), (err) => {
                if (err) return rej(err);
                return res();
            });
        });
    },

    /**
     * Takes a string, and writes it to a destination file given by the provided destination file path.
     *
     * @param contents {string} - What to save to the destination file.
     * @param destinationFilePath {string} - Where the contents string should be written to.
     *
     * @returns {Promise<void>}
     */
    stringToFile: function(contents, destinationFilePath) {
        return _filePipeline(destinationFilePath, (res, rej) => {
            fs.writeFile(path.join('output', destinationFilePath), contents, 'utf8', (err) => {
                if (err) return rej(err);
                return res();
            });
        });
    },

    /**
     * Copies across a directory of files, non-recursively, from a particular directory to the output directory.
     *
     * @param sourceDirectoryPath {string} - A string representing a path to the source directory.
     * @param destinationDirectoryPath {string} - A string representing a path to the destination directory.
     *
     * @returns {Promise<any[]>}
     */
    filesToFiles: function(sourceDirectoryPath, destinationDirectoryPath) {
        const filePromises = [];

        fs.readdir(path.join(sourceDirectoryPath), 'utf8', (err, files) => {
            files.filter(fileName => {
                return fs.statSync(path.join(sourceDirectoryPath, fileName)).isFile();
            }).forEach(fileName => {
                filePromises.push(
                    this.fileToFile(path.join(sourceDirectoryPath, fileName),
                    path.join(destinationDirectoryPath, fileName)
                ));
            });
        });

        return Promise.all(filePromises);
    },

    /**
     *
     * @param filePath {string} - A string representing a path to the file to render.
     * @param renderArgs {object} - Rendering arguments to be passed into the ejs renderer.
     * @param destinationFilePath {string} - A string representing a path to the destination file location.
     *
     * @returns {Promise<void>} - Resolves once the file has rendered successfully.
     */
    ejsToFile: function(filePath, renderArgs, destinationFilePath) {
        return new Promise((resolve, reject) => {
            ejs.renderFile(filePath, renderArgs, null, async (err, str) => {
                try {
                    await this.stringToFile(str, destinationFilePath);
                    return resolve();
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
};