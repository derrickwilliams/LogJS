fdescribe('appenders.appender_factory', () => {
  'use strict';
  let factory;

  beforeEach(() => {
    factory = require('../../../lib/build/appenders/appender_factory');
  });
  it('works', () => {
    expect(typeof factory).toBe('object');
    expect(typeof factory.create).toBe('function');
  });

  it('returns appender implementation', () => {
    let appenderName = 'TEST_APPENDER';
    let logFn = jasmine.createSpy('logFn');
    let config = { fake: 'config', 'object0': false };
    let appender = factory.create({ appenderName, logFn, config });

    expect(appender.name).toEqual(appenderName);
    expect(appender.log).toEqual(logFn);
    expect(appender.config).toEqual(config);
  });
});