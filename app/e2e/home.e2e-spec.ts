import { browser, by, element } from 'protractor';
import { HomePage } from './home.po';

describe('movie-mate Login', () => {
  let page: HomePage;
  beforeEach(() => {
    page = new HomePage();
  });

  it('should display the login page with 20 movie posters', () => {
    page.navigateTo();
    expect(page.getMoviePostersCount()).toEqual(20);
    expect(page.isFlipped()).toBeFalsy();
    page.clickOnMoviePosterByIndex(5);
    expect(page.isFlipped()).toBeTruthy();
  });

});
