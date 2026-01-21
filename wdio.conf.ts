import { generate } from 'multiple-cucumber-html-reporter';
import { browser } from '@wdio/globals';
import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  automationProtocol: 'webdriver',

  // Host configuration
  hostname: 'selenium-hub',
  port: 4444,
  protocol: 'https',
  path: '/selenium',

  excludeDriverLogs: ['*'],

  tsConfigPath: './tsconfig.json',

  // Specs
  specs: [
    `${process.cwd()}/test/feature/*.feature`
  ],

  maxInstances: 10,

  capabilities: [{
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: ['--disable-gpu']
    },
    'wdio:enforceWebDriverClassic': true
  }],

  logLevel: 'debug',

  bail: 0,

  waitforTimeout: 10080,

  connectionRetryTimeout: 450000,

  connectionRetryCount: 3,

  services: [],

  framework: 'cucumber',

  reporters: [
    'spec',
    ['cucumberjs-json', {
      jsonFolder: 'results/json/',
      language: 'en'
    }]
  ],

  cucumberOpts: {
    require: ['./test/step-definitions/*.ts'],
    requireModule: ['ts-node/register'],
    backtrace: false,
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tags: '@test',
    timeout: 380000,
    ignoreUndefinedDefinitions: false
  },

  beforeFeature: async function (uri, feature) {
    try {
      await browser.setWindowSize(1980, 1080);
      await browser.url('https://www.google.com');
    } catch (err) {
      throw new Error(`Before feature method not completed: ${err}`);
    }
  },

  onComplete: function (exitCode) {
    generate({
      jsonDir: 'results/json/',
      reportPath: 'results/html/'
    });
    console.log(exitCode);
    process.exit(0);
  }
};
