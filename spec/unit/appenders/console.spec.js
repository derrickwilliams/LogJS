describe('appenders.console', () => {
  beforeEach(() => {
    appender = require('../../../lib/build/appenders/console');
  });
  it('works', () => {
    expect(typeof appender).toBe('object');
  });
});