import { LibyanRecipePage } from './app.po';

describe('libyan-recipe App', function() {
  let page: LibyanRecipePage;

  beforeEach(() => {
    page = new LibyanRecipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('lr works!');
  });
});
