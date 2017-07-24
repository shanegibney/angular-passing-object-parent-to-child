import { AngularPassingObjectParentToChildPage } from './app.po';

describe('angular-passing-object-parent-to-child App', () => {
  let page: AngularPassingObjectParentToChildPage;

  beforeEach(() => {
    page = new AngularPassingObjectParentToChildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
