const { expect } = require('chai');
const { BeforeAll, setDefaultTimeout } = require('cucumber');
const { remote } = require('webdriverio');

// var browser = require('webdriverio');
const options = {
    host: '10.162.1.96',
    port: 4444,
    path: '/wd/hub',
    desiredCapabilities: {
        browserName: 'chrome',
    },
    sync: true,
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'verbose',
    baseUrl: 'http://10.162.1.64:8080',
};
//

global.expect = expect;

setDefaultTimeout(20000);

BeforeAll(() => {
    global.browser = remote(options).init();
    return global.browser;
});
