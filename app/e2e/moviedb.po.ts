import { by, element } from 'protractor';

export class MovieDBPage {
  clickAllowButton() {
    return element(by.css('#allow_authentication')).click();
  }
  clickLoginButton() {
    return element(by.css('button[class="new login"]')).click();
  }
  enterCredentials() {
    element(by.css('#username')).sendKeys('darkysharky');
    element(by.css('#password')).sendKeys('123456');
    element(by.css('form[name="account_login"]')).submit();
  }
}
