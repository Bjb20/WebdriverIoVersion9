import {Given} from "@wdio/cucumber-framework"
import {SimpleTestPage} from "../../test/page-object/test-page-object"

const simpleTest: SimpleTestPage = new SimpleTestPage();

Given(/^I navigate to google home page$/, async () => {
  await simpleTest.navigateToGoogleHome();
});
