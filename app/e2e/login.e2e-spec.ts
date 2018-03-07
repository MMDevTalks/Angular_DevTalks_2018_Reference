import { browser } from 'protractor';
import { LoginPage } from './login.po';
import { MovieDBPage } from './moviedb.po';

describe('movie-mate Login', () => {
  let page: LoginPage;
  let movieDBPage: MovieDBPage;
  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display the login page with a login button', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Login');
  });

  // it('should click the login button and navigate to moviedb', () => {
  //   page.navigateTo();
  //   expect(page.getLoadingSpinner().isPresent()).toBeFalsy();
  //   page.clickLoginButton();
  //   expect(browser.getCurrentUrl()).toContain('https://www.themoviedb.org/authenticate/');
  // });

  // it('it should login and redirect back to app', () => {
  //   page.navigateTo();
  //   expect(page.getLoadingSpinner().isPresent()).toBeFalsy();
  //   page.clickLoginButton();
  //   expect(browser.getCurrentUrl()).toContain('https://www.themoviedb.org/authenticate/');
  //   browser.ignoreSynchronization = true;
  //   movieDBPage = new MovieDBPage();
  //   movieDBPage.clickLoginButton();
  //   movieDBPage.enterCredentials();
  //   expect(browser.getCurrentUrl()).toContain('https://www.themoviedb.org/authenticate/');
  //   movieDBPage.clickAllowButton();
  //   expect(browser.getCurrentUrl()).toContain('login?request_token');
  //   browser.ignoreSynchronization = false;
  // });
});
