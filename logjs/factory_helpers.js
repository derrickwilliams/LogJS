'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLogHandler = addLogHandler;
exports.getEntryFromError = getEntryFromError;
exports.getLogFromError = getLogFromError;
exports.buildEntry = buildEntry;

var _utils = require('./utils');

function addLogHandler(loggerInstance, owner, name) {
  var handlers = [logHandler, isFunc(owner[name]) ? owner[name] : undefined];
  owner[name] = invokeHandlers;

  function logHandler(error, url, line) {
    loggerInstance.exception({ message: error, url: url, line: line });
  }

  function invokeHandlers(error, url, line) {
    (0, _utils.invokeAll)(handlers, [error, url, line]);
  }
}

function getEntryFromError(err) {
  var stack = err.stack;
  var sourceURL = err.sourceURL;
  var message = err.message;

  var actualMsg = void 0,
      url = void 0,
      line = void 0;

  if (stack) {
    actualMsg = getLogFromError(err);
  } else if (sourceURL) {
    actualMsg = message;
    url = sourceURL;
    line = line; // not sure what happened with line???
  }

  return { message: actualMsg, url: url, line: line };
}

function getLogFromError(_ref) {
  var message = _ref.message;
  var stack = _ref.stack;

  return strContains(message, stack) ? message + '\n' + stack : stack;
}

function buildEntry(_ref2) {
  var type = _ref2.type;
  var message = _ref2.message;
  var url = _ref2.url;
  var line = _ref2.line;
  var fields = _ref2.fields;

  var now = new Date().getTime();
  var entryOverride = isErr(message) ? getEntryFromError(message) : {};
  return override({ message: message, url: url, line: line }, entryOverride, fields, { type: type, now: now });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mYWN0b3J5X2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0IsYSxHQUFBLGE7UUFhQSxpQixHQUFBLGlCO1FBZ0JBLGUsR0FBQSxlO1FBTUEsVSxHQUFBLFU7O0FBckNoQjs7QUFFTyxTQUFTLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUMsS0FBdkMsRUFBOEMsSUFBOUMsRUFBb0Q7QUFDekQsTUFBTSxXQUFXLENBQUMsVUFBRCxFQUFhLE9BQU8sTUFBTSxJQUFOLENBQVAsSUFBc0IsTUFBTSxJQUFOLENBQXRCLEdBQW9DLFNBQWpELENBQWpCO0FBQ0EsUUFBTSxJQUFOLElBQWMsY0FBZDs7QUFFQSxXQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkIsR0FBM0IsRUFBZ0MsSUFBaEMsRUFBc0M7QUFDcEMsbUJBQWUsU0FBZixDQUF5QixFQUFFLFNBQVMsS0FBWCxFQUFrQixRQUFsQixFQUF1QixVQUF2QixFQUF6QjtBQUNEOztBQUVELFdBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQixHQUEvQixFQUFvQyxJQUFwQyxFQUEwQztBQUN4QywwQkFBVSxRQUFWLEVBQW9CLENBQUMsS0FBRCxFQUFRLEdBQVIsRUFBYSxJQUFiLENBQXBCO0FBQ0Q7QUFDRjs7QUFFTSxTQUFTLGlCQUFULENBQTJCLEdBQTNCLEVBQWdDO0FBQUEsTUFDN0IsS0FENkIsR0FDQyxHQURELENBQzdCLEtBRDZCO0FBQUEsTUFDdEIsU0FEc0IsR0FDQyxHQURELENBQ3RCLFNBRHNCO0FBQUEsTUFDWCxPQURXLEdBQ0MsR0FERCxDQUNYLE9BRFc7O0FBRXJDLE1BQUksa0JBQUo7QUFBQSxNQUFlLFlBQWY7QUFBQSxNQUFvQixhQUFwQjs7QUFFQSxNQUFJLEtBQUosRUFBVztBQUNULGdCQUFZLGdCQUFnQixHQUFoQixDQUFaO0FBQ0QsR0FGRCxNQUdLLElBQUksU0FBSixFQUFlO0FBQ2xCLGdCQUFZLE9BQVo7QUFDQSxVQUFNLFNBQU47QUFDQSxXQUFPLElBQVAsQ0FIa0IsQ0FHTDtBQUNkOztBQUVELFNBQU8sRUFBRSxTQUFTLFNBQVgsRUFBc0IsUUFBdEIsRUFBMkIsVUFBM0IsRUFBUDtBQUNEOztBQUVNLFNBQVMsZUFBVCxPQUE2QztBQUFBLE1BQWxCLE9BQWtCLFFBQWxCLE9BQWtCO0FBQUEsTUFBVCxLQUFTLFFBQVQsS0FBUzs7QUFDbEQsU0FBTyxZQUFZLE9BQVosRUFBcUIsS0FBckIsSUFDRixPQURFLFVBQ1UsS0FEVixHQUVMLEtBRkY7QUFHRDs7QUFFTSxTQUFTLFVBQVQsUUFBeUQ7QUFBQSxNQUFuQyxJQUFtQyxTQUFuQyxJQUFtQztBQUFBLE1BQTdCLE9BQTZCLFNBQTdCLE9BQTZCO0FBQUEsTUFBcEIsR0FBb0IsU0FBcEIsR0FBb0I7QUFBQSxNQUFmLElBQWUsU0FBZixJQUFlO0FBQUEsTUFBVCxNQUFTLFNBQVQsTUFBUzs7QUFDOUQsTUFBTSxNQUFNLElBQUksSUFBSixHQUFXLE9BQVgsRUFBWjtBQUNBLE1BQU0sZ0JBQWdCLE1BQU0sT0FBTixJQUFpQixrQkFBa0IsT0FBbEIsQ0FBakIsR0FBOEMsRUFBcEU7QUFDQSxTQUFPLFNBQVMsRUFBRSxnQkFBRixFQUFXLFFBQVgsRUFBZ0IsVUFBaEIsRUFBVCxFQUFpQyxhQUFqQyxFQUFnRCxNQUFoRCxFQUF3RCxFQUFFLFVBQUYsRUFBUSxRQUFSLEVBQXhELENBQVA7QUFDRCIsImZpbGUiOiJmYWN0b3J5X2hlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbnZva2VBbGwgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvZ0hhbmRsZXIobG9nZ2VySW5zdGFuY2UsIG93bmVyLCBuYW1lKSB7XG4gIGNvbnN0IGhhbmRsZXJzID0gW2xvZ0hhbmRsZXIsIGlzRnVuYyhvd25lcltuYW1lXSkgPyBvd25lcltuYW1lXSA6IHVuZGVmaW5lZF1cbiAgb3duZXJbbmFtZV0gPSBpbnZva2VIYW5kbGVycztcblxuICBmdW5jdGlvbiBsb2dIYW5kbGVyKGVycm9yLCB1cmwsIGxpbmUpIHtcbiAgICBsb2dnZXJJbnN0YW5jZS5leGNlcHRpb24oeyBtZXNzYWdlOiBlcnJvciwgdXJsLCBsaW5lIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlSGFuZGxlcnMoZXJyb3IsIHVybCwgbGluZSkge1xuICAgIGludm9rZUFsbChoYW5kbGVycywgW2Vycm9yLCB1cmwsIGxpbmVdKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnRyeUZyb21FcnJvcihlcnIpIHtcbiAgY29uc3QgeyBzdGFjaywgc291cmNlVVJMLCBtZXNzYWdlIH0gPSBlcnI7XG4gIGxldCBhY3R1YWxNc2csIHVybCwgbGluZTtcblxuICBpZiAoc3RhY2spIHtcbiAgICBhY3R1YWxNc2cgPSBnZXRMb2dGcm9tRXJyb3IoZXJyKTtcbiAgfVxuICBlbHNlIGlmIChzb3VyY2VVUkwpIHtcbiAgICBhY3R1YWxNc2cgPSBtZXNzYWdlO1xuICAgIHVybCA9IHNvdXJjZVVSTDtcbiAgICBsaW5lID0gbGluZTsgLy8gbm90IHN1cmUgd2hhdCBoYXBwZW5lZCB3aXRoIGxpbmU/Pz9cbiAgfVxuXG4gIHJldHVybiB7IG1lc3NhZ2U6IGFjdHVhbE1zZywgdXJsLCBsaW5lIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2dGcm9tRXJyb3IoeyBtZXNzYWdlLCBzdGFjayB9KSB7XG4gIHJldHVybiBzdHJDb250YWlucyhtZXNzYWdlLCBzdGFjaykgP1xuICAgIGAke21lc3NhZ2V9XFxuJHtzdGFja31gIDpcbiAgICBzdGFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRW50cnkoeyB0eXBlLCBtZXNzYWdlLCB1cmwsIGxpbmUsIGZpZWxkc30pIHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIGNvbnN0IGVudHJ5T3ZlcnJpZGUgPSBpc0VycihtZXNzYWdlKSA/IGdldEVudHJ5RnJvbUVycm9yKG1lc3NhZ2UpIDoge307XG4gIHJldHVybiBvdmVycmlkZSh7IG1lc3NhZ2UsIHVybCwgbGluZSB9LCBlbnRyeU92ZXJyaWRlLCBmaWVsZHMsIHsgdHlwZSwgbm93IH0pO1xufSJdfQ==