import { override, isError, isFunction, invokeAll } from './utils';
import { LEVELS } from './levels';

export const factory  = { createLogger };

export function createLogger({ appenders = {}, fields = {} }) {
  const loggerParams = params;
  const loggerInstance = Object.create({});

  const boundLogFn = logFn.bind(null, { appenders, fields });

  const loggerInterface = {
    onEvent: addLogHandler,
    log({ type = LEVELS.INFO, message, url, line }) {
      boundLogFn({ type, message, url, line });
    },
    error({ type = LEVELS.ERROR, message, url, line }) {
      boundLogFn({ type, message, url, line });
    },
    warn({ type = LEVELS.WARN, message, url, line }) {
      boundLogFn({ type, message, url, line });
    }
  };

  return loggerInterface;
}

function logFn({ appenders = {}, fields = {}}, { type, message, url = 'UNKNOWN', line = -1 }) {
  const now = new Date().getTime();
  const entryOverride = isErr(message) ? pullFromError(message) : {};
  const entry = override({ message, url, line }, entryOverride, { now, type });

  for (var appender in appenders) {
    if (!hasProperty(appenders, appender)) return;
    return callAppender(appenders, appender, entry)
  }
}

function addLogHandler(owner, name) {
  const handlers = [logHandler, isFunc(owner[name]) ? owner[name] : undefined]
  owner[name] = invokeHandlers;

  function logHandler(error, url, line) {
    loggerInstance.log({ type: LEVELS.EXCEPTION, data: error, url, line});
  }

  function invokeHandlers(error, url, line) {
    invokeAll(handlers, [error, url, line])
  }
}

function callAppender(appender, { type, now, message, url, line }) {
  return appender.log(type, now, message, url, line);
}

function pullFromError(err) {
  const { stack, sourceURL, message } = err;
  let data, url, line;

  if (stack) {
    data = getLogFromError(err);
  }
  else if (sourceURL) {
    data = message;
    url = sourceURL;
    line = line;
  }

  return { data, url, line };
}

function getLogFromError({ message, stack }) {
  return msgNotInStack(message, stack) ?
    `${message}\n${stack}` :
    stack;
}

function msgNotInStack(msg, stack) {
  return msg && stack.indexOf(msg) === -1;
}

// // Redirect the onerror handler for the global object (if it exists)
// var win = LogJS.window_;

// var gErrorHandler;
// if (win.onerror !== undefined) {
//   gErrorHandler = win.onerror;
// }

// win.onerror = function onErrorLogJS(message, url, lineNumber) {
//   log(LogJS.EXCEPTION, message, url, lineNumber);
//   if (gErrorHandler) {
//     gErrorHandler(message, url, lineNumber);
//   }
// };

// // --------------------------------------------------------------------------------------------------

// LogJS.error = function (message, url, lineNumber) {
//   log(LogJS.ERROR, message, url, lineNumber);
// };

// LogJS.warn = function (message, url, lineNumber) {
//   log(LogJS.WARN, message, url, lineNumber);
// };

// LogJS.info = function (message, url, lineNumber) {
//   log(LogJS.INFO, message, url, lineNumber);
// };

// // --------------------------------------------------------------------------------------------------

// LogJS.addAppender = function (appender) {
//   if (appender !== undefined) {
//     appender = new appender(LogJS.config);
//     if (appender.LOGJSAPPENDER) {
//       appenders[appender.name] = appender;
//     }
//   }
// };

// LogJS.getAppender = function (appenderName) {
//   return appenders[appenderName];
// };

// LogJS.getRegisteredAppenders = function () {
//   var registered = [];
//   for (var appender in appenders) {
//     if (appenders.hasOwnProperty(appender)) {
//       registered.push(appender);
//     }
//   }
//   return registered;
// };

// Object.defineProperty(LogJS, 'config', {
//   configurable: false,
//   value: {},
//   writable: true,
//   enumerable: false
// });

// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------

// LogJS.BaseAppender = function () {
// };

// Object.defineProperty(LogJS.BaseAppender.prototype, 'LOGJSAPPENDER', {
//   configurable: false,
//   value: true,
//   writable: false,
//   enumerable: false
// });

// LogJS.BaseAppender.prototype.log = function (type, message, url, lineNumber) {
// };

// LogJS.BaseAppender.prototype.configOpt = function (key, config, optValue) {
//   return (config[this.name] && config[this.name][key]) || optValue;
// };

// Object.defineProperty(LogJS.BaseAppender.prototype, 'name', {
//   configurable: false,
//   value: 'LogJSBaseAppender',
//   writable: true,
//   enumerable: false
// });

// // Angular
// if (typeof angular !== 'undefined') {

//   LogJS.config.global = {
//     debug: true
//   };

//   function LogJSProvider() {
//     this.config = LogJS.config;
//     var self = this;

//     this.debugEnabled = function (flag) {
//       if (typeof flag !== 'undefined') {
//         this.config.global = {
//           debug: flag
//         };
//         return this;
//       } else {
//         return this.config.global.debug;
//       }
//     };

//     this.$get = function () {
//       var angularLogJS = {};
//       ['error', 'info', 'debug', 'log', 'warn'].forEach(function (e) {
//         var method = LogJS.info;
//         if (LogJS[e]) {
//           method = LogJS[e];
//         }
//         angularLogJS[e] = (function (method, e) {
//           return function () {
//             if (e !== 'debug' || self.config.global.debug) {
//               method.apply(LogJS, arguments);
//             }
//           }
//         })(method, e);
//       });
//       return angularLogJS;
//     };
//   }

//   angular.module('ng').provider('$log', LogJSProvider);
// }

// Exports
// -------

// AMD
if (typeof define !== 'undefined' && define.amd) {
  define([], function () {
    return LogJS;
  });
}
// CommonJS
else if (typeof module !== 'undefined' && module.exports) {
  module.exports = LogJS;
}
// Script tag
else {
  global.LogJS = LogJS;
}
