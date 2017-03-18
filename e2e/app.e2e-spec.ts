import { Ag2CollectionAppPage } from './app.po';

describe('ag2-collection-app App', function() {
  let page: Ag2CollectionAppPage;

  beforeEach(() => {
    page = new Ag2CollectionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
