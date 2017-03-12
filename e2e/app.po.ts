import { browser, element, by } from 'protractor';

export class LibyanRecipePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lr-root h1')).getText();
  }
}
