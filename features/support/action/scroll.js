/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
module.exports = async (selector) => {
    await browser.scroll(selector);
};
