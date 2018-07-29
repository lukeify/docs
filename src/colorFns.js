module.exports = {
    /**
     * For a given hex color string, turn it into an array of three numbers, representing R, G, & B color components
     * respectively.
     *
     * @param hex {string} - A hex code representing a color.
     *
     * @returns {number[]} An array of three numbers between 0 and 255.
     */
    hexToRgbComponents: function(hex) {
        let rgbaComponents = [];
        for (let i = 1; i < 7; i = i+2) {
            rgbaComponents.push(parseInt(hex.substr(i, 2), 16));
        }
        return rgbaComponents;
    },

    /**
     * Takes a hex code string representing a color, and returns a color string in rgba() format with the desired
     * transparency.
     *
     * @param rgbComponents {number[]} - The color to be transparentized, as an array of rgb color components.
     * @param int - The percentage of transparency desired.
     *
     * @returns {string} - The input color, transparentized to the desired level, and output as an rgba() string.
     */
    transparentize: function(rgbComponents, int) {
        return rgbComponents.reduce((a, c, i) => {
            let val = a + c + ", ";
            if (i === 2) {
                val += int + ")";
            }
            return val;
        }, 'rgba(');
    },

    /**
     * Determines the luminescence of a color based off some math.
     *
     * @param rgbComponents {number[]} - The color to determine the luma for, as an array of rgb color components.
     *
     * @returns {number} - A number between 0 & 255 representing the brightness of the color passed to the function.
     */
    luma: function(rgbComponents) {
        // http://alienryderflex.com/hsp.html
        return Math.sqrt(0.299 * (rgbComponents[0]**2) +  0.587 * (rgbComponents[1]**2) + 0.114 * (rgbComponents[2]**2));
    }
};