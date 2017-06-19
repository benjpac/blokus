import { BlokusPage } from './app.po';

describe('blokus App', () => {
  let page: BlokusPage;

  beforeEach(() => {
    page = new BlokusPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
