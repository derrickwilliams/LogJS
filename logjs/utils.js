'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UTILS = undefined;

var _mixing = require('mixing');

var _mixing2 = _interopRequireDefault(_mixing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function strContains(haystack, needle) {
  return needle && haystack.indexOf(needle) > -1;
}

function override() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.push({ overwrite: true });
  return _mixing2.default.apply(undefined, args);
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
  return fns.forEach(function (fn) {
    return isFunc(fn) ? fn.apply(null, args) : null;
  });
}

function invokeAfter(before) {
  var after = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];

  return function invokeAfterWraper() {
    before.apply(null, arguments);
    return after.apply(owner, argument);
  };
}

var UTILS = exports.UTILS = {
  noop: noop,
  override: override,
  strContains: strContains,
  isError: isErr,
  isFunction: isFunc,
  hasProperty: hasProp,
  invokeAll: invokeAll
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVBLFNBQVMsV0FBVCxDQUFxQixRQUFyQixFQUErQixNQUEvQixFQUF1QztBQUNyQyxTQUFPLFVBQVUsU0FBUyxPQUFULENBQWlCLE1BQWpCLElBQTJCLENBQUMsQ0FBN0M7QUFDRDs7QUFFRCxTQUFTLFFBQVQsR0FBMkI7QUFBQSxvQ0FBTixJQUFNO0FBQU4sUUFBTTtBQUFBOztBQUN6QixPQUFLLElBQUwsQ0FBVSxFQUFFLFdBQVcsSUFBYixFQUFWO0FBQ0EsU0FBTyxrQ0FBTyxJQUFQLENBQVA7QUFDRDs7QUFFRCxTQUFTLEtBQVQsQ0FBZSxHQUFmLEVBQW9CO0FBQ2xCLFNBQU8sZUFBZSxLQUF0QjtBQUNEOztBQUVELFNBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QjtBQUN0QixTQUFPLE9BQU8sTUFBUCxLQUFrQixVQUF6QjtBQUNEOztBQUVELFNBQVMsT0FBVCxDQUFpQixHQUFqQixFQUFzQixJQUF0QixFQUE0QjtBQUMxQixTQUFPLElBQUksY0FBSixDQUFtQixJQUFuQixDQUFQO0FBQ0Q7O0FBRUQsU0FBUyxJQUFULEdBQWdCO0FBQ2Q7QUFDRDs7QUFFRCxTQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0IsSUFBeEIsRUFBOEI7QUFDNUIsU0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLEVBQUQsRUFBUTtBQUN6QixXQUFPLE9BQU8sRUFBUCxJQUFhLEdBQUcsS0FBSCxDQUFTLElBQVQsRUFBZSxJQUFmLENBQWIsR0FBb0MsSUFBM0M7QUFDRCxHQUZNLENBQVA7QUFHRDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsTUFBckIsRUFBMkM7QUFBQSxNQUFkLEtBQWMseURBQU4sSUFBTTs7QUFDekMsU0FBTyxTQUFTLGlCQUFULEdBQTZCO0FBQ2xDLFdBQU8sS0FBUCxDQUFhLElBQWIsRUFBbUIsU0FBbkI7QUFDQSxXQUFPLE1BQU0sS0FBTixDQUFZLEtBQVosRUFBbUIsUUFBbkIsQ0FBUDtBQUNELEdBSEQ7QUFJRDs7QUFFTSxJQUFNLHdCQUFRO0FBQ25CLFlBRG1CO0FBRW5CLG9CQUZtQjtBQUduQiwwQkFIbUI7QUFJbkIsV0FBUyxLQUpVO0FBS25CLGNBQVksTUFMTztBQU1uQixlQUFhLE9BTk07QUFPbkI7QUFQbUIsQ0FBZCIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaXggZnJvbSAnbWl4aW5nJztcblxuZnVuY3Rpb24gc3RyQ29udGFpbnMoaGF5c3RhY2ssIG5lZWRsZSkge1xuICByZXR1cm4gbmVlZGxlICYmIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBvdmVycmlkZSguLi5hcmdzKSB7XG4gIGFyZ3MucHVzaCh7IG92ZXJ3cml0ZTogdHJ1ZSB9KVxuICByZXR1cm4gbWl4KC4uLmFyZ3MpO1xufVxuXG5mdW5jdGlvbiBpc0VycihvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEVycm9yO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmModGFyZ2V0KSB7XG4gIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBoYXNQcm9wKG9iaiwgcHJvcCkge1xuICByZXR1cm4gb2JqLmhhc093blByb3BlcnR5KHByb3ApO1xufVxuXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBETyBOT1RISU5HO1xufVxuXG5mdW5jdGlvbiBpbnZva2VBbGwoZm5zLCBhcmdzKSB7XG4gIHJldHVybiBmbnMuZm9yRWFjaCgoZm4pID0+IHtcbiAgICByZXR1cm4gaXNGdW5jKGZuKSA/IGZuLmFwcGx5KG51bGwsIGFyZ3MpIDogbnVsbDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGludm9rZUFmdGVyKGJlZm9yZSwgYWZ0ZXIgPSBub29wKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbnZva2VBZnRlcldyYXBlcigpIHtcbiAgICBiZWZvcmUuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIHJldHVybiBhZnRlci5hcHBseShvd25lciwgYXJndW1lbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBVVElMUyA9IHtcbiAgbm9vcCxcbiAgb3ZlcnJpZGUsXG4gIHN0ckNvbnRhaW5zLFxuICBpc0Vycm9yOiBpc0VycixcbiAgaXNGdW5jdGlvbjogaXNGdW5jLFxuICBoYXNQcm9wZXJ0eTogaGFzUHJvcCxcbiAgaW52b2tlQWxsXG59OyJdfQ==