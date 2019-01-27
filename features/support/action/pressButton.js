/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
module.exports = async (key) => {
    await browser.keys(key);
};
