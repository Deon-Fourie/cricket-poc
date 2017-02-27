import { CricketPocPage } from './app.po';

describe('cricket-poc App', () => {
  let page: CricketPocPage;

  beforeEach(() => {
    page = new CricketPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
