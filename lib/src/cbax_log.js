import { create as createLogger } from './logger_factory';

export function createBuilder() {
  const appenders = {
    testAppender: (...args) => console.log('TEST APPENDER', ...args)
  };

  const baseFields = {
    testField1: 'this is a test field'
  };

  return {
    addAppender(appender) {

    },

    build(fields) {
      return createLogger({ appenders, fields: baseFields })
    }
  }
}