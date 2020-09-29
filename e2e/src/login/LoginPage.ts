import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('http://localhost:4200/login') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('welcome')).getText() as Promise<string>;
  }

  enterUserInfo() {
    element(by.css('username')).sendKeys('admin');
    element(by.css('password')).sendKeys('123456');
  }

}
