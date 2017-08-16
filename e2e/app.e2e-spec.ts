import { NgModuleRoutingPage } from './app.po';

describe('ng-module-routing App', () => {
  let page: NgModuleRoutingPage;

  beforeEach(() => {
    page = new NgModuleRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
