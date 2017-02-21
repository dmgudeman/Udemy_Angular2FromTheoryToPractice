import { HttpExamplesPage } from './app.po';

describe('http-examples App', () => {
  let page: HttpExamplesPage;

  beforeEach(() => {
    page = new HttpExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
