import { ACSWebsitePage } from './app.po';

describe('acs-website App', () => {
  let page: ACSWebsitePage;

  beforeEach(() => {
    page = new ACSWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
