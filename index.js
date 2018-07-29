const docsFns    = require('./src/docsFns');
const fsFns      = require('./src/fsFns');
const Page       = require('./src/Page');

// This script manages the build pipeline for my documentation repository, and is responsible for taking the handwritten markdown
// files, images, assets, and other content; rendering it through a series of templates, before saving the result to an output
// directory for docs.lukeify.com.

(async () => {
    try {
        // Grab global data
        const fileNames = await docsFns.generateFilesList();
        const themingData = await docsFns.generateThemingData();
        let pages = [];

        // Foreach filename, build a page object out if it.
        for (i = 0; i < fileNames.length; i++) {
            const contents = await fsFns.readFile("pages/" + fileNames[i]);
            pages.push(new Page(fileNames[i], themingData, contents));
        }

        // Foreach page, render and save it.
        pages.forEach(page => {
            page.render(pages);
            page.save();
        });

        // Build the index file.
        await fsFns.ejsToFile('templates/index.ejs', { pages: pages }, 'index.html');

        // Copy across other assets
        await fsFns.fileToFile('templates/styles.css', 'styles.css');
        await fsFns.filesToFiles('assets', 'assets');
        await fsFns.filesToFiles('assets/typefaces', 'assets/typefaces');

    } catch (e) {
        console.log('Page generation failed:', e);
    }
})();