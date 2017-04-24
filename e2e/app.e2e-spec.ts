import { OctoAngularPage } from './app.po';

describe('octo-angular App', () => {
  let page: OctoAngularPage;

  beforeEach(() => {
    page = new OctoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('octo works!');
  });
});
