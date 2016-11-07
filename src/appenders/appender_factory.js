export function create({ name = 'ANONYMOUS_APPENDER', log: logFn = function() {}, config = {} }) {
  const appender = Object.defineProperties({}, {
    name: readOnlyProperty(name),
    log: readOnlyProperty(logFn),
    config: readOnlyProperty(config)
  })

  return appender;
}

function readOnlyProperty(value) {
  return {
    configurable: false,
    writable: false,
    value
  }
}