import (generate } from multiple-cucumber-html-reporter';
import { browser } from '@wdio/globals';
export const config = (
automationProtocol: 'webdriver',
hostname: "//selenium-hub",
protocol: "https",
path: "/selenium",
excludeDriverLogs: [''],
tsConfigPath: './tsconfig.json',
specs:
`${process.cwd())/test/features/.feature",
1
exclude: [],
maxInstances: 10,
capabilities: [{
browserName: 'chrome',
acceptInsecureCerts: true,
"goog:chromeOptions": {
args: ['disable-gpu'],
'wdio: enforceWebDriverClassic': true
},
}],
logLevel: 'debug',
bail: 0,
waitforTimeout: 10080,
connectionRetryTimeout: 450000,
connectionRetryCount: 3,
services: [],
framework: 'cucumber',
reporters: ['spec',
['cucumberjs-json', {
jsonFolder: 'results/json/',
language: 'en',
},
],
]
cucumberOpts: (
require: ("./test/step-definitions/*.ts"],
requireModule: ['ts-node/asm'],
backtrace: false,
dryRun: false,
failfast: false,
snippets: true,
source: true,
},
strict: false,
tags: @test',
timeout: 380000,
ignoreUndefined Definitions: false
},
beforeFeature: asyne function (uri, feature) (
try {
await browser.setWindowSize(1980, 1080); await browser.url("www.google.com");
catch (strErrMsg) (
throw Error('Before feature method not completed $(strErrMsg)");
anComplete: function (exitCode) (
generate((
jsonDir: 'results/json/", reportPath: 'results/html/‘
});
console.log(exitCode);
process.exit(0);
}
}
