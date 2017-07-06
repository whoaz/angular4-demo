import { HelloDemoPage } from './app.po';

describe('hello-demo App', function() {
  let page: HelloDemoPage;

  beforeEach(() => {
    page = new HelloDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
