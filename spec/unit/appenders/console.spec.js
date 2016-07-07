fdescribe('appenders.console', () => {
  beforeEach(() => {
    appender = require('../../../lib/build/appenders/console');
    console.log('CONSOLE APPENDER', appender);
    debugger;
  });
  it('works', () => {
    expect(typeof appender).toBe('object');
  });
});