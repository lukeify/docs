const marked    = require('marked');
const ejs       = require('ejs');
const fs        = require('fs');
const path      = require('path');
const fsFns     = require('./fsFns');
const colorFns  = require('./colorFns');

module.exports = class Page {

    /**
     * Constructor for the page class.
     *
     * @param fileName {string} -
     * @param themingInfo
     * @param markdownContents {string} -
     */
    constructor(fileName, themingInfo, markdownContents) {
        this.fileName           = fileName;
        this.themingInfo        = themingInfo[this.fileName];
        this.markdownContents   = markdownContents;
        this.renderedContents   = marked(this.markdownContents);
        this.renderedPage       = null;
    }

    /**
     * Returns the name of the page that should be saved, minus the file extension.
     *
     * @returns {string} - The name of the page.
     */
    get pageName() {
        return this.fileName.substring(0, this.fileName.indexOf('.'));
    }

    /**
     * Returns the label that the page should display.
     *
     * @returns {string} - The label of the page.
     */
    get pageLabel() {
        return this.themingInfo.label;
    }

    /**
     * Returns an array of hex codes as strings.
     *
     * @returns {string[]} - The colors that should be used on the page.
     */
    get colors() {
        return this.themingInfo.colors;
    }

    /**
     * Gets the contents of the SVG logo file and returns it as a string. This can then be outputted inside of an
     * svg element. If no file appears to exist, return an empty string instead.
     *
     * @returns {string} - A string containing the svg source for the logo.
     */
    get logoAsSvg() {
        try {
            return fs.readFileSync(path.join('./', 'images', this.pageName + '-icon.svg'), 'utf8');
        } catch (e) {
            return "";
        }
    }

    /**
     * Renders the current page as an HTML string, and saves it to the renderedPage property.
     *
     * @param otherPageNames {string[]} -
     */
    render(otherPageNames) {
        ejs.renderFile(path.join('templates', 'file.ejs'), {
            'otherPageNames': otherPageNames,
            'name': this.pageName,
            'label': this.pageLabel,
            'colors': this.colors,
            'logoAsSvg': this.logoAsSvg,
            'renderedContents' : this.renderedContents,
            'colorFns': colorFns
        }, null, (err, str) => {
            this.renderedPage = str;
        });
    }

    /**
     *
     */
    save() {
        fsFns.stringToFile(this.renderedPage, this.pageName + '.html');
    }
};