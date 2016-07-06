function override(orig, overs) {
  return mix(orig, overs, { overwrite: true })
}

function isErr(obj) {
  return obj instanceof Error;
}

function isFunc(target) {
  return typeof target === 'function';
}

function hasProp(obj, prop) {
  return obj.hasOwnProperty(prop);
}

function identity(val) {
  return val;
}

function noop() {
  // DO NOTHING;
}

function invokeAll(fns, args) {
  return fns.forEach((fn) => {
    return isFunc(fn) ? fn.apply(null, args) : null;
  });
}

function invokeAfter(before, after = noop) {
  return function invokeAfterWraper() {
    before.apply(null, arguments)
    return after.apply(owner, argument);
  }
}

export const UTILS = {
  identity,
  noop,
  override,
  isError: isErr,
  isFunction: isFunc,
  hasProperty: hasProp,
  invokeAll
};