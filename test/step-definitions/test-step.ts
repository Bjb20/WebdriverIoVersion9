import { Given } from "@wdio/cucumber-framework";
import { SimpleTestPage } from "../page-object/test-page-object";

const simpleTest = new SimpleTestPage();

Given(/^I navigate to google home page$/, async () => {
  await simpleTest.navigateToGoogleHome();
});
