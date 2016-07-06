import { create as createLogger } from './logger_factory';

export function createBuilder() {
  const appenders = [];
  const baseFields = {};

  return {
    addAppender(appender) {

    },

    build(fields) {
      return createLogger({ appenders, fields: baseFields })
    }
  }
}