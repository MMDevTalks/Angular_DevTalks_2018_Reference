import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }
  getParagraphText() {
    return element(by.css('mm-button')).getText();
  }
  getLoadingSpinner() {
    return element(by.css('mm-spinner'));
  }
  clickLoginButton() {
    return element(by.css('mm-button')).click();
  }
}
