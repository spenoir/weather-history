import { WeatherHistoryPage } from './app.po';

describe('weather-history App', function() {
  let page: WeatherHistoryPage;

  beforeEach(() => {
    page = new WeatherHistoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
