import mix from 'mixing';

function strContains(haystack, needle) {
  return needle && haystack.indexOf(needle) > -1;
}

function override(...args) {
  args.push({ overwrite: true })
  return mix(...args);
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
  noop,
  override,
  strContains,
  isError: isErr,
  isFunction: isFunc,
  hasProperty: hasProp,
  invokeAll
};