describe('cbax_log', () => {
  'use strict';

  function loadCbaxLogModule() {
    return require('../../lib/build/cbax_log.js');
  }

  describe('main interface', () => {
    it('exists', () => {
      let cbaxLog = loadCbaxLogModule();
      expect(typeof cbaxLog).toBe('object');
      expect(typeof cbaxLog.createBuilder).toBe('function');
    });
  });

  describe('builder', () => {
    let builder;
    beforeEach(() => {
      let cbaxLog = loadCbaxLogModule();
      builder = cbaxLog.createBuilder();
    });
    it('exists', () => {
      expect(typeof builder).toBe('object');
      expect(typeof builder.addAppender).toBe('function');
      expect(typeof builder.build).toBe('function');
    });
    it('correctly binds appenders')
    it('correctly binds fields')
    it('correctly binds types')
  });

  describe('logger instances', () => {
    let logger;
    beforeEach(() => {
      let cbaxLog = loadCbaxLogModule();
      let builder = cbaxLog.createBuilder();
      logger = builder.build();
    });
    it('exists', () => {
      expect(typeof logger).toBe('object');
      expect(typeof logger.addHandler).toBe('function');
      expect(typeof logger.error).toBe('function');
      expect(typeof logger.warn).toBe('function');
      expect(typeof logger.log).toBe('function');
      expect(typeof logger.exception).toBe('function');
    });
    it('correctly binds handler to target object with existing handler');
    it('correctly binds handler to target object without existing handler')
  })
});