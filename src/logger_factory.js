import { override, isError, isFunction, invokeAll, strContains } from './utils';
import { LEVELS } from './levels';
import * as helpers from './factory_helpers';

export const factory  = { create };

export function create({ appenders = {}, fields = {} }) {
  const loggerInstance = Object.create({});

  const loggerInterface = {
    addHandler: helpers.addLogHandler.bind(null, loggerInstance),
    log: sendTypedLog(LEVELS.INFO),
    error: sendTypedLog(LEVELS.ERROR),
    warn: sendTypedLog(LEVELS.WARN),
    exception: sendTypedLog(LEVELS.EXCEPTION)
  }

  return loggerInterface;

  function sendTypedLog(type) {
    return function sendLog(entry) {
      const typedEntry = override(entry, { type });
      logFn({ appenders, fields }, typedEntry);
    };
  }
}

function logFn({ appenders = {}, fields = {}}, { type = LEVELS.UNTYPED, message, url = 'UNKNOWN', line = -1 }) {
  const entry = helper.buildEntry({ type, message, url, line, fields });

  Object.keys(appenders).forEach(function(name) {
    if (!hasProperty(appenders, name)) return;
    const appender = appenders[name];
    return callAppender(appender, entry)
  });
}

function callAppender(appender, { type, now, message, url, line }) {
  return appender.log(type, now, message, url, line);
}