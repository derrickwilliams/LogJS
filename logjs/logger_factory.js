'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factory = undefined;
exports.create = create;

var _utils = require('./utils');

var _levels = require('./levels');

var _factory_helpers = require('./factory_helpers');

var helpers = _interopRequireWildcard(_factory_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var factory = exports.factory = { create: create };

function create(_ref) {
  var _ref$appenders = _ref.appenders;
  var appenders = _ref$appenders === undefined ? {} : _ref$appenders;
  var _ref$fields = _ref.fields;
  var fields = _ref$fields === undefined ? {} : _ref$fields;

  var loggerInstance = Object.create({});

  var loggerInterface = {
    addHandler: helpers.addLogHandler.bind(null, loggerInstance),
    log: sendTypedLog(_levels.LEVELS.INFO),
    error: sendTypedLog(_levels.LEVELS.ERROR),
    warn: sendTypedLog(_levels.LEVELS.WARN),
    exception: sendTypedLog(_levels.LEVELS.EXCEPTION)
  };

  return loggerInterface;

  function sendTypedLog(type) {
    return function sendLog(entry) {
      var typedEntry = (0, _utils.override)(entry, { type: type });
      logFn({ appenders: appenders, fields: fields }, typedEntry);
    };
  }
}

function logFn(_ref2, _ref3) {
  var _ref2$appenders = _ref2.appenders;
  var appenders = _ref2$appenders === undefined ? {} : _ref2$appenders;
  var _ref2$fields = _ref2.fields;
  var fields = _ref2$fields === undefined ? {} : _ref2$fields;
  var _ref3$type = _ref3.type;
  var type = _ref3$type === undefined ? _levels.LEVELS.UNTYPED : _ref3$type;
  var message = _ref3.message;
  var _ref3$url = _ref3.url;
  var url = _ref3$url === undefined ? 'UNKNOWN' : _ref3$url;
  var _ref3$line = _ref3.line;
  var line = _ref3$line === undefined ? -1 : _ref3$line;

  var entry = helper.buildEntry({ type: type, message: message, url: url, line: line, fields: fields });

  Object.keys(appenders).forEach(function (name) {
    if (!hasProperty(appenders, name)) return;
    var appender = appenders[name];
    return callAppender(appender, entry);
  });
}

function callAppender(appender, _ref4) {
  var type = _ref4.type;
  var now = _ref4.now;
  var message = _ref4.message;
  var url = _ref4.url;
  var line = _ref4.line;

  return appender.log(type, now, message, url, line);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXJfZmFjdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7UUFNZ0IsTSxHQUFBLE07O0FBTmhCOztBQUNBOztBQUNBOztJQUFZLE87Ozs7QUFFTCxJQUFNLDRCQUFXLEVBQUUsY0FBRixFQUFqQjs7QUFFQSxTQUFTLE1BQVQsT0FBaUQ7QUFBQSw0QkFBL0IsU0FBK0I7QUFBQSxNQUEvQixTQUErQixrQ0FBbkIsRUFBbUI7QUFBQSx5QkFBZixNQUFlO0FBQUEsTUFBZixNQUFlLCtCQUFOLEVBQU07O0FBQ3RELE1BQU0saUJBQWlCLE9BQU8sTUFBUCxDQUFjLEVBQWQsQ0FBdkI7O0FBRUEsTUFBTSxrQkFBa0I7QUFDdEIsZ0JBQVksUUFBUSxhQUFSLENBQXNCLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLGNBQWpDLENBRFU7QUFFdEIsU0FBSyxhQUFhLGVBQU8sSUFBcEIsQ0FGaUI7QUFHdEIsV0FBTyxhQUFhLGVBQU8sS0FBcEIsQ0FIZTtBQUl0QixVQUFNLGFBQWEsZUFBTyxJQUFwQixDQUpnQjtBQUt0QixlQUFXLGFBQWEsZUFBTyxTQUFwQjtBQUxXLEdBQXhCOztBQVFBLFNBQU8sZUFBUDs7QUFFQSxXQUFTLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEI7QUFDMUIsV0FBTyxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDN0IsVUFBTSxhQUFhLHFCQUFTLEtBQVQsRUFBZ0IsRUFBRSxVQUFGLEVBQWhCLENBQW5CO0FBQ0EsWUFBTSxFQUFFLG9CQUFGLEVBQWEsY0FBYixFQUFOLEVBQTZCLFVBQTdCO0FBQ0QsS0FIRDtBQUlEO0FBQ0Y7O0FBRUQsU0FBUyxLQUFULGVBQStHO0FBQUEsOEJBQTlGLFNBQThGO0FBQUEsTUFBOUYsU0FBOEYsbUNBQWxGLEVBQWtGO0FBQUEsMkJBQTlFLE1BQThFO0FBQUEsTUFBOUUsTUFBOEUsZ0NBQXJFLEVBQXFFO0FBQUEseUJBQTlELElBQThEO0FBQUEsTUFBOUQsSUFBOEQsOEJBQXZELGVBQU8sT0FBZ0Q7QUFBQSxNQUF2QyxPQUF1QyxTQUF2QyxPQUF1QztBQUFBLHdCQUE5QixHQUE4QjtBQUFBLE1BQTlCLEdBQThCLDZCQUF4QixTQUF3QjtBQUFBLHlCQUFiLElBQWE7QUFBQSxNQUFiLElBQWEsOEJBQU4sQ0FBQyxDQUFLOztBQUM3RyxNQUFNLFFBQVEsT0FBTyxVQUFQLENBQWtCLEVBQUUsVUFBRixFQUFRLGdCQUFSLEVBQWlCLFFBQWpCLEVBQXNCLFVBQXRCLEVBQTRCLGNBQTVCLEVBQWxCLENBQWQ7O0FBRUEsU0FBTyxJQUFQLENBQVksU0FBWixFQUF1QixPQUF2QixDQUErQixVQUFTLElBQVQsRUFBZTtBQUM1QyxRQUFJLENBQUMsWUFBWSxTQUFaLEVBQXVCLElBQXZCLENBQUwsRUFBbUM7QUFDbkMsUUFBTSxXQUFXLFVBQVUsSUFBVixDQUFqQjtBQUNBLFdBQU8sYUFBYSxRQUFiLEVBQXVCLEtBQXZCLENBQVA7QUFDRCxHQUpEO0FBS0Q7O0FBRUQsU0FBUyxZQUFULENBQXNCLFFBQXRCLFNBQW1FO0FBQUEsTUFBakMsSUFBaUMsU0FBakMsSUFBaUM7QUFBQSxNQUEzQixHQUEyQixTQUEzQixHQUEyQjtBQUFBLE1BQXRCLE9BQXNCLFNBQXRCLE9BQXNCO0FBQUEsTUFBYixHQUFhLFNBQWIsR0FBYTtBQUFBLE1BQVIsSUFBUSxTQUFSLElBQVE7O0FBQ2pFLFNBQU8sU0FBUyxHQUFULENBQWEsSUFBYixFQUFtQixHQUFuQixFQUF3QixPQUF4QixFQUFpQyxHQUFqQyxFQUFzQyxJQUF0QyxDQUFQO0FBQ0QiLCJmaWxlIjoibG9nZ2VyX2ZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvdmVycmlkZSwgaXNFcnJvciwgaXNGdW5jdGlvbiwgaW52b2tlQWxsLCBzdHJDb250YWlucyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgTEVWRUxTIH0gZnJvbSAnLi9sZXZlbHMnO1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuL2ZhY3RvcnlfaGVscGVycyc7XG5cbmV4cG9ydCBjb25zdCBmYWN0b3J5ICA9IHsgY3JlYXRlIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoeyBhcHBlbmRlcnMgPSB7fSwgZmllbGRzID0ge30gfSkge1xuICBjb25zdCBsb2dnZXJJbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUoe30pO1xuXG4gIGNvbnN0IGxvZ2dlckludGVyZmFjZSA9IHtcbiAgICBhZGRIYW5kbGVyOiBoZWxwZXJzLmFkZExvZ0hhbmRsZXIuYmluZChudWxsLCBsb2dnZXJJbnN0YW5jZSksXG4gICAgbG9nOiBzZW5kVHlwZWRMb2coTEVWRUxTLklORk8pLFxuICAgIGVycm9yOiBzZW5kVHlwZWRMb2coTEVWRUxTLkVSUk9SKSxcbiAgICB3YXJuOiBzZW5kVHlwZWRMb2coTEVWRUxTLldBUk4pLFxuICAgIGV4Y2VwdGlvbjogc2VuZFR5cGVkTG9nKExFVkVMUy5FWENFUFRJT04pXG4gIH1cblxuICByZXR1cm4gbG9nZ2VySW50ZXJmYWNlO1xuXG4gIGZ1bmN0aW9uIHNlbmRUeXBlZExvZyh0eXBlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHNlbmRMb2coZW50cnkpIHtcbiAgICAgIGNvbnN0IHR5cGVkRW50cnkgPSBvdmVycmlkZShlbnRyeSwgeyB0eXBlIH0pO1xuICAgICAgbG9nRm4oeyBhcHBlbmRlcnMsIGZpZWxkcyB9LCB0eXBlZEVudHJ5KTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ0ZuKHsgYXBwZW5kZXJzID0ge30sIGZpZWxkcyA9IHt9fSwgeyB0eXBlID0gTEVWRUxTLlVOVFlQRUQsIG1lc3NhZ2UsIHVybCA9ICdVTktOT1dOJywgbGluZSA9IC0xIH0pIHtcbiAgY29uc3QgZW50cnkgPSBoZWxwZXIuYnVpbGRFbnRyeSh7IHR5cGUsIG1lc3NhZ2UsIHVybCwgbGluZSwgZmllbGRzIH0pO1xuXG4gIE9iamVjdC5rZXlzKGFwcGVuZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKCFoYXNQcm9wZXJ0eShhcHBlbmRlcnMsIG5hbWUpKSByZXR1cm47XG4gICAgY29uc3QgYXBwZW5kZXIgPSBhcHBlbmRlcnNbbmFtZV07XG4gICAgcmV0dXJuIGNhbGxBcHBlbmRlcihhcHBlbmRlciwgZW50cnkpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxsQXBwZW5kZXIoYXBwZW5kZXIsIHsgdHlwZSwgbm93LCBtZXNzYWdlLCB1cmwsIGxpbmUgfSkge1xuICByZXR1cm4gYXBwZW5kZXIubG9nKHR5cGUsIG5vdywgbWVzc2FnZSwgdXJsLCBsaW5lKTtcbn0iXX0=