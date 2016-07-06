import { LEVELS } from '../levels';
import { create as createAppender } from './appender_factory';

export function ConsoleAppender({ global }) {
  return createAppender({ name: 'ConsoleAppender', log: logFn.bind(null, global) });
};

function logFn(global = {}, type, timestamp, message, url, lineNumber) {
  let { console } = global;
  let fallback = (console && console.log) || function() {};
  let method = getMethod(type, console) || fallback

  var args = [];
  args.push(new Date(timestamp));
  if (message !== undefined) {
      args.push(message);
  }
  if (url !== undefined) {
      args.push(url);
  }
  if (lineNumber !== undefined) {
      args.push(lineNumber);
  }

  if (method !== undefined) {
      method.apply(console, args);
  }
};

// BELONGS SOMEWHERE ELSE
// if (global.console !== undefined) {
//     LogJS.addAppender(ConsoleAppender);
// }

function getMethod(type, console) {
  const methodMap = {
    [LEVELS.ERROR]: console.error || fallback
    [LEVELS.WARN]: console.warn || fallback
  };

  return  methodMap(type);
};