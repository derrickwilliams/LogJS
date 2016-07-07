export function create({ appenderName = 'ANONYMOUS_APPENDER', logFn: log = function() {}, config = {} }) {
  const appender = Object.create({});

  Object.defineProperties(appender, {
    name: {
      configurable: false,
      writable: false,
      value: appenderName
    },
    log: {
      configurable: false,
      writable: false,
      value: logFn
    },
    config: {
      configurable: false,
      writable: false,
      value: config
    }
  })

  return appender;
}