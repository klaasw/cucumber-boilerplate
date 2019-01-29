const { AfterAll, After } = require('cucumber');

AfterAll(() => {
    global.browser.close();
});

// Arrow Function is not supported
// https://github.com/cucumber/cucumber-js/blob/dfbfed94e2cee4fd6b1f91299f7b450b271f9145/docs/faq.md
After( function (scenario) {
    const world = this;
    return browser.saveScreenshot()
        .then((screenShot, error) => {
        //    if (!error) {
            world.attach(screenShot, 'image/png');
        //    }
        });
});
