import { invokeAll } from './utils';

export function addLogHandler(loggerInstance, owner, name) {
  const handlers = [logHandler, isFunc(owner[name]) ? owner[name] : undefined]
  owner[name] = invokeHandlers;

  function logHandler(error, url, line) {
    loggerInstance.exception({ message: error, url, line });
  }

  function invokeHandlers(error, url, line) {
    invokeAll(handlers, [error, url, line])
  }
}

export function getEntryFromError(err) {
  const { stack, sourceURL, message } = err;
  let actualMsg, url, line;

  if (stack) {
    actualMsg = getLogFromError(err);
  }
  else if (sourceURL) {
    actualMsg = message;
    url = sourceURL;
    line = line; // not sure what happened with line???
  }

  return { message: actualMsg, url, line };
}

export function getLogFromError({ message, stack }) {
  return strContains(message, stack) ?
    `${message}\n${stack}` :
    stack;
}

export function buildEntry({ type, message, url, line, fields}) {
  const now = new Date().getTime();
  const entryOverride = isErr(message) ? getEntryFromError(message) : {};
  return override({ message, url, line }, entryOverride, fields, { type, now });
}