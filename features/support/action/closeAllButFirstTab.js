/**
 * Close all but the first tab
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */
module.exports = async (obsolete) => {
/* eslint-enable no-unused-vars */
    /**
     * Get all the window handles
     * @type {Object}
     */
    const windowHandles = await browser.windowHandles().value;

    // Close all tabs but the first one
    windowHandles.forEach(async (handle, index) => {
        if (index > 0) {
            await browser.switchTab(handle).close();
        }
    });
};
