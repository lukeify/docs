const fs = require('fs');

module.exports = {
    /**
     * Returns all the documentation files worth caring about.
     *
     * @returns {Promise<string[]>} A promise resolving to an array of strings representing the paths to the docs files.
     */
    generateFilesList: async function() {
        return new Promise((resolve, reject) => {
            fs.readdir('pages', (err, files) => {
                if (err) return reject(err);
                return resolve(files);
            });
        });
    },

    /**
     * Return theming data from the repositories' themes.json file.
     *
     * @returns {Promise<string>} The contents of the themes.json file.
     */
    generateThemingData: function() {
        return new Promise((resolve, reject) => {
            fs.readFile('themes.json', 'utf8', (err, data) => {
                if (err) return reject(err);
                return resolve(JSON.parse(data));
            });
        });
    }
};