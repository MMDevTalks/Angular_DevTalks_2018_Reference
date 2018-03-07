import { browser, by, element } from 'protractor';

export class HomePage {
    navigateTo() {
        return browser.get('/home/now-playing');
    }
    getMoviePostersCount() {
        return element.all(by.css('mm-movie-poster')).count();
    }
    clickOnMoviePosterByIndex(index: number) {
        return element.all(by.css(`mm-movie-poster`)).get(index).click();
    }

    isFlipped() {
        return element(by.css('.movie-poster--back')).isPresent();
    }
}
