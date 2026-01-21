import {Given} from "@wdio/cucumber-framework"
import {simpleTestPage} from "../../test/page-object/test-page-object"

Given(/^I navigate to google home page$/, async () => {
  await simpleTestPage.navigateToGoogleHome();
});
