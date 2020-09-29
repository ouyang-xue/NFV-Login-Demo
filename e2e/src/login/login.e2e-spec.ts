import {browser, by, element, logging} from "protractor";
import {LoginPage} from "./LoginPage";
import {error} from "util";

describe('Login', () => {
  let page: LoginPage;

  beforeEach(() => {
    browser.sleep(1000);
    page = new LoginPage();
  });

  it('Should display login window', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to users management');
  });

  it('Enter username and password', () => {
    page.enterUserInfo();
    // element(by.css('username')).sendKeys('admin');
    // element(by.css('password')).sendKeys('123456');
    element(by.css('loginBtn')).click().then( (loginInfo: any) => {
      expect(loginInfo.token).toBeNull(false);

     }, (errorData: any) => {
        console.log(errorData);
    });

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
