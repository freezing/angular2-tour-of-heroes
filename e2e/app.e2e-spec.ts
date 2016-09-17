import { LgPage } from './app.po';

describe('lg App', function() {
  let page: LgPage;

  beforeEach(() => {
    page = new LgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
