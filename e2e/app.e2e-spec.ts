import { TestAppPage } from './app.po';

describe('test-app App', () => {
  let page: TestAppPage;

  beforeEach(() => {
    page = new TestAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
