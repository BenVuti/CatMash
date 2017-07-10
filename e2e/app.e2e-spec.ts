import { CatMashPage } from './app.po';

describe('cat-mash App', () => {
  let page: CatMashPage;

  beforeEach(() => {
    page = new CatMashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
