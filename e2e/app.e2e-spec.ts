import { MobilePwaPage } from './app.po';

describe('mobile-pwa App', () => {
  let page: MobilePwaPage;

  beforeEach(() => {
    page = new MobilePwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
