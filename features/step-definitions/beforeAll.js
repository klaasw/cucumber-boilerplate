const { expect } = require('chai');
const { BeforeAll, setDefaultTimeout } = require('cucumber');
const { remote } = require('webdriverio');

// var browser = require('webdriverio');
const options = {
    hostname: '10.162.1.96',
    port: 4444,
    path: '/wd/hub',
    capabilities: {
        browserName: 'chrome'
    },
    sync: true,
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'debug',
    baseUrl: 'http://10.162.1.64:8080'
};
//

global.expect = expect;

setDefaultTimeout(20000);

BeforeAll(async () => {
    global.browser = await remote(options);
    return global.browser;
});
