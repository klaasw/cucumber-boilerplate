/**
 * Focus the last opened window
 * @param  {String}   obsolete Type of object to focus to (window or tab)
 */
/* eslint-disable no-unused-vars */
module.exports = async (obsolete) => {
/* eslint-enable no-unused-vars */
    /**
     * The last opened window
     * @type {Object}
     */
    const lastWindowHandle = await browser.windowHandles().value.slice(-1)[0];

    await browser.window(lastWindowHandle);
};
