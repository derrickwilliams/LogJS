describe('logger', () => {
  'use strict';
  let logger;

  beforeEach(() => {
    logger = require('../../lib/build/cbax_log.js')
  });

  it('exists', () => {
    console.log('LOGGER', logger);
    debugger
  });
});