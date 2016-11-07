'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleAppender = ConsoleAppender;

var _levels = require('../levels');

var _appender_factory = require('./appender_factory');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ConsoleAppender(_ref) {
  var global = _ref.global;

  return (0, _appender_factory.create)({
    name: 'ConsoleAppender',
    log: function log() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return logFn.apply(undefined, [global].concat(args));
    }
  });
}

function logFn() {
  var glbl = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var type = arguments[1];
  var timestamp = arguments[2];
  var message = arguments[3];
  var url = arguments[4];
  var lineNumber = arguments[5];
  var console = glbl.console;

  var fallback = console && console.log || function () {};
  var method = getMethod(type, console) || fallback;

  var args = [];
  args.push(new Date(timestamp));

  if (message !== undefined) args.push(message);
  if (url !== undefined) args.push(url);
  if (lineNumber !== undefined) args.push(lineNumber);
  if (method !== undefined) method.apply(console, args);
}

function getMethod(type, console) {
  var _methodMap;

  var methodMap = (_methodMap = {}, _defineProperty(_methodMap, _levels.LEVELS.ERROR, console.error || fallback), _defineProperty(_methodMap, _levels.LEVELS.WARN, console.warn || fallback), _methodMap);

  return methodMap(type);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHBlbmRlcnMvY29uc29sZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUdnQixlLEdBQUEsZTs7QUFIaEI7O0FBQ0E7Ozs7QUFFTyxTQUFTLGVBQVQsT0FBc0M7QUFBQSxNQUFWLE1BQVUsUUFBVixNQUFVOztBQUMzQyxTQUFPLDhCQUFlO0FBQ3BCLFVBQU0saUJBRGM7QUFFcEIsT0FGb0IsaUJBRVA7QUFBQSx3Q0FBTixJQUFNO0FBQU4sWUFBTTtBQUFBOztBQUNYLGFBQU8sd0JBQU0sTUFBTixTQUFpQixJQUFqQixFQUFQO0FBQ0Q7QUFKbUIsR0FBZixDQUFQO0FBTUQ7O0FBRUQsU0FBUyxLQUFULEdBQXVFO0FBQUEsTUFBdkQsSUFBdUQseURBQWhELEVBQWdEO0FBQUEsTUFBM0MsSUFBMkM7QUFBQSxNQUFyQyxTQUFxQztBQUFBLE1BQTFCLE9BQTBCO0FBQUEsTUFBakIsR0FBaUI7QUFBQSxNQUFaLFVBQVk7QUFBQSxNQUM3RCxPQUQ2RCxHQUNqRCxJQURpRCxDQUM3RCxPQUQ2RDs7QUFFckUsTUFBTSxXQUFZLFdBQVcsUUFBUSxHQUFwQixJQUE0QixZQUFZLENBQUUsQ0FBM0Q7QUFDQSxNQUFNLFNBQVMsVUFBVSxJQUFWLEVBQWdCLE9BQWhCLEtBQTRCLFFBQTNDOztBQUVBLE1BQU0sT0FBTyxFQUFiO0FBQ0EsT0FBSyxJQUFMLENBQVUsSUFBSSxJQUFKLENBQVMsU0FBVCxDQUFWOztBQUVBLE1BQUksWUFBWSxTQUFoQixFQUEyQixLQUFLLElBQUwsQ0FBVSxPQUFWO0FBQzNCLE1BQUksUUFBUSxTQUFaLEVBQXVCLEtBQUssSUFBTCxDQUFVLEdBQVY7QUFDdkIsTUFBSSxlQUFlLFNBQW5CLEVBQThCLEtBQUssSUFBTCxDQUFVLFVBQVY7QUFDOUIsTUFBSSxXQUFXLFNBQWYsRUFBMEIsT0FBTyxLQUFQLENBQWEsT0FBYixFQUFzQixJQUF0QjtBQUMzQjs7QUFFRCxTQUFTLFNBQVQsQ0FBb0IsSUFBcEIsRUFBMEIsT0FBMUIsRUFBbUM7QUFBQTs7QUFDakMsTUFBTSwwREFDSCxlQUFPLEtBREosRUFDWSxRQUFRLEtBQVIsSUFBaUIsUUFEN0IsK0JBRUgsZUFBTyxJQUZKLEVBRVcsUUFBUSxJQUFSLElBQWdCLFFBRjNCLGNBQU47O0FBS0EsU0FBTyxVQUFVLElBQVYsQ0FBUDtBQUNEIiwiZmlsZSI6ImNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMRVZFTFMgfSBmcm9tICcuLi9sZXZlbHMnXG5pbXBvcnQgeyBjcmVhdGUgYXMgY3JlYXRlQXBwZW5kZXIgfSBmcm9tICcuL2FwcGVuZGVyX2ZhY3RvcnknXG5cbmV4cG9ydCBmdW5jdGlvbiBDb25zb2xlQXBwZW5kZXIgKHsgZ2xvYmFsIH0pIHtcbiAgcmV0dXJuIGNyZWF0ZUFwcGVuZGVyKHtcbiAgICBuYW1lOiAnQ29uc29sZUFwcGVuZGVyJyxcbiAgICBsb2coLi4uYXJncykge1xuICAgICAgcmV0dXJuIGxvZ0ZuKGdsb2JhbCwgLi4uYXJncylcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGxvZ0ZuIChnbGJsID0ge30gLCB0eXBlLCB0aW1lc3RhbXAsIG1lc3NhZ2UsIHVybCwgbGluZU51bWJlcikge1xuICBjb25zdCB7IGNvbnNvbGUgfSA9IGdsYmxcbiAgY29uc3QgZmFsbGJhY2sgPSAoY29uc29sZSAmJiBjb25zb2xlLmxvZykgfHwgZnVuY3Rpb24gKCkge31cbiAgY29uc3QgbWV0aG9kID0gZ2V0TWV0aG9kKHR5cGUsIGNvbnNvbGUpIHx8IGZhbGxiYWNrXG5cbiAgY29uc3QgYXJncyA9IFtdXG4gIGFyZ3MucHVzaChuZXcgRGF0ZSh0aW1lc3RhbXApKVxuXG4gIGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQpIGFyZ3MucHVzaChtZXNzYWdlKVxuICBpZiAodXJsICE9PSB1bmRlZmluZWQpIGFyZ3MucHVzaCh1cmwpXG4gIGlmIChsaW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIGFyZ3MucHVzaChsaW5lTnVtYmVyKVxuICBpZiAobWV0aG9kICE9PSB1bmRlZmluZWQpIG1ldGhvZC5hcHBseShjb25zb2xlLCBhcmdzKVxufVxuXG5mdW5jdGlvbiBnZXRNZXRob2QgKHR5cGUsIGNvbnNvbGUpIHtcbiAgY29uc3QgbWV0aG9kTWFwID0ge1xuICAgIFtMRVZFTFMuRVJST1JdOiBjb25zb2xlLmVycm9yIHx8IGZhbGxiYWNrLFxuICAgIFtMRVZFTFMuV0FSTl06IGNvbnNvbGUud2FybiB8fCBmYWxsYmFja1xuICB9XG5cbiAgcmV0dXJuIG1ldGhvZE1hcCh0eXBlKVxufVxuIl19