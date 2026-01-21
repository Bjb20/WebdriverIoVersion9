export class SimpleTestPage {
  /**
   * Navigate to Google home page.
   * Adjust the URL if you need a localized domain or different URL.
   */
  public async navigateToGoogleHome(): Promise<void> {
    await browser.url("https://www.google.com");
  }
}

//export default new SimpleTestPage();
