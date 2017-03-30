import { AnglarCliDemoPage } from './app.po';

describe('anglar-cli-demo App', () => {
  let page: AnglarCliDemoPage;

  beforeEach(() => {
    page = new AnglarCliDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
