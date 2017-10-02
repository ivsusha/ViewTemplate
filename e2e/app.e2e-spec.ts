import { MyViewPage } from './app.po';

describe('my-view App', () => {
  let page: MyViewPage;

  beforeEach(() => {
    page = new MyViewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
