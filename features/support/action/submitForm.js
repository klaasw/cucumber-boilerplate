/**
 * Submit the given form
 * @param  {String}   form Form element selector
 */
module.exports = async (form) => {
    await browser.submitForm(form);
};
