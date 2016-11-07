'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CorsAppender = CorsAppender;

var _levels = require('../levels');

var _appender_factory = require('./appender_factory');

function setFlushInterval() {
  return global.setTimeout;
}

function requiredParam(msg) {
  throw new Error(msg);
}

function currentLocation() {
  return global.location;
}

function xhrTransmitter() {
  return function (entries, cb) {
    cb(null, entries);
  };
}

function flushBuffer(bfr, transmit, done) {
  var entries = copyBuffer(bfr);
  resetBuffer(bfr);
  transmit(entries, done);
}

function copyBuffer(buffer) {
  return buffer.slice(0);
}

function resetBuffer(bfr) {
  bfr.length = 0;
  return bfr;
}

function flushDone(err, entries) {
  console.log('TRANSMITTED', entries.length);
}

function CorsAppender() {
  var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var _params$remoteUrl = params.remoteUrl;
  var remoteUrl = _params$remoteUrl === undefined ? requiredParam('remoteUrl is required') : _params$remoteUrl;
  var _params$setInterval = params.setInterval;
  var flushInterval = _params$setInterval === undefined ? setFlushInterval() : _params$setInterval;
  var _params$flushTimeout = params.flushTimeout;
  var flushTimeout = _params$flushTimeout === undefined ? 1500 : _params$flushTimeout;
  var _params$transmitLogs = params.transmitLogs;
  var transmitLogs = _params$transmitLogs === undefined ? xhrTransmitter() : _params$transmitLogs;


  var buffer = [];
  var resetBuffer = function resetBuffer(buffer) {
    return buffer.length = 0;
  };

  var cancelFlush = setInterval(flushBuffer, flushTimeout, buffer, transmitLogs, flushDone);

  var appender = (0, _appender_factory.create)({
    name: 'CorsAppender',
    log: function log() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return bufferEntry.apply(undefined, [buffer].concat(args));
    }
  });

  return appender;
}

function bufferEntry(buffer, type, timestamp, message, url, line) {
  buffer.push({ t: type, ts: timestamp, m: message, u: url, l: line });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHBlbmRlcnMvY29ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQXdDZ0IsWSxHQUFBLFk7O0FBeENoQjs7QUFDQTs7QUFFQSxTQUFTLGdCQUFULEdBQTZCO0FBQzNCLFNBQU8sT0FBTyxVQUFkO0FBQ0Q7O0FBRUQsU0FBUyxhQUFULENBQXdCLEdBQXhCLEVBQTZCO0FBQzNCLFFBQU0sSUFBSSxLQUFKLENBQVUsR0FBVixDQUFOO0FBQ0Q7O0FBRUQsU0FBUyxlQUFULEdBQTRCO0FBQzFCLFNBQU8sT0FBTyxRQUFkO0FBQ0Q7O0FBRUQsU0FBUyxjQUFULEdBQTJCO0FBQ3pCLFNBQU8sVUFBQyxPQUFELEVBQVUsRUFBVixFQUFpQjtBQUN0QixPQUFHLElBQUgsRUFBUyxPQUFUO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVMsV0FBVCxDQUFzQixHQUF0QixFQUEyQixRQUEzQixFQUFxQyxJQUFyQyxFQUEyQztBQUN6QyxNQUFNLFVBQVUsV0FBVyxHQUFYLENBQWhCO0FBQ0EsY0FBWSxHQUFaO0FBQ0EsV0FBUyxPQUFULEVBQWtCLElBQWxCO0FBQ0Q7O0FBRUQsU0FBUyxVQUFULENBQXFCLE1BQXJCLEVBQTZCO0FBQzNCLFNBQU8sT0FBTyxLQUFQLENBQWEsQ0FBYixDQUFQO0FBQ0Q7O0FBRUQsU0FBUyxXQUFULENBQXNCLEdBQXRCLEVBQTJCO0FBQ3pCLE1BQUksTUFBSixHQUFhLENBQWI7QUFDQSxTQUFPLEdBQVA7QUFDRDs7QUFFRCxTQUFTLFNBQVQsQ0FBb0IsR0FBcEIsRUFBeUIsT0FBekIsRUFBa0M7QUFDaEMsVUFBUSxHQUFSLENBQVksYUFBWixFQUEyQixRQUFRLE1BQW5DO0FBQ0Q7O0FBRU0sU0FBUyxZQUFULEdBQW9DO0FBQUEsTUFBYixNQUFhLHlEQUFKLEVBQUk7QUFBQSwwQkFNckMsTUFOcUMsQ0FFdkMsU0FGdUM7QUFBQSxNQUV2QyxTQUZ1QyxxQ0FFM0IsY0FBYyx1QkFBZCxDQUYyQjtBQUFBLDRCQU1yQyxNQU5xQyxDQUd2QyxXQUh1QztBQUFBLE1BRzFCLGFBSDBCLHVDQUdWLGtCQUhVO0FBQUEsNkJBTXJDLE1BTnFDLENBSXZDLFlBSnVDO0FBQUEsTUFJdkMsWUFKdUMsd0NBSXhCLElBSndCO0FBQUEsNkJBTXJDLE1BTnFDLENBS3ZDLFlBTHVDO0FBQUEsTUFLdkMsWUFMdUMsd0NBS3hCLGdCQUx3Qjs7O0FBUXpDLE1BQU0sU0FBUyxFQUFmO0FBQ0EsTUFBTSxjQUFjLFNBQWQsV0FBYztBQUFBLFdBQVUsT0FBTyxNQUFQLEdBQWdCLENBQTFCO0FBQUEsR0FBcEI7O0FBRUEsTUFBTSxjQUFjLFlBQVksV0FBWixFQUF5QixZQUF6QixFQUF1QyxNQUF2QyxFQUErQyxZQUEvQyxFQUE2RCxTQUE3RCxDQUFwQjs7QUFFQSxNQUFNLFdBQVcsOEJBQWU7QUFDOUIsVUFBTSxjQUR3QjtBQUU5QixTQUFLO0FBQUEsd0NBQUksSUFBSjtBQUFJLFlBQUo7QUFBQTs7QUFBQSxhQUFhLDhCQUFZLE1BQVosU0FBdUIsSUFBdkIsRUFBYjtBQUFBO0FBRnlCLEdBQWYsQ0FBakI7O0FBS0EsU0FBTyxRQUFQO0FBQ0Q7O0FBRUQsU0FBUyxXQUFULENBQXNCLE1BQXRCLEVBQThCLElBQTlCLEVBQW9DLFNBQXBDLEVBQStDLE9BQS9DLEVBQXdELEdBQXhELEVBQTZELElBQTdELEVBQW1FO0FBQ2pFLFNBQU8sSUFBUCxDQUFZLEVBQUUsR0FBRyxJQUFMLEVBQVcsSUFBSSxTQUFmLEVBQTBCLEdBQUcsT0FBN0IsRUFBc0MsR0FBRyxHQUF6QyxFQUE4QyxHQUFHLElBQWpELEVBQVo7QUFDRCIsImZpbGUiOiJjb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTEVWRUxTIH0gZnJvbSAnLi4vbGV2ZWxzJ1xuaW1wb3J0IHsgY3JlYXRlIGFzIGNyZWF0ZUFwcGVuZGVyIH0gZnJvbSAnLi9hcHBlbmRlcl9mYWN0b3J5J1xuXG5mdW5jdGlvbiBzZXRGbHVzaEludGVydmFsICgpIHtcbiAgcmV0dXJuIGdsb2JhbC5zZXRUaW1lb3V0XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVkUGFyYW0gKG1zZykge1xuICB0aHJvdyBuZXcgRXJyb3IobXNnKVxufVxuXG5mdW5jdGlvbiBjdXJyZW50TG9jYXRpb24gKCkge1xuICByZXR1cm4gZ2xvYmFsLmxvY2F0aW9uXG59XG5cbmZ1bmN0aW9uIHhoclRyYW5zbWl0dGVyICgpIHtcbiAgcmV0dXJuIChlbnRyaWVzLCBjYikgPT4ge1xuICAgIGNiKG51bGwsIGVudHJpZXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gZmx1c2hCdWZmZXIgKGJmciwgdHJhbnNtaXQsIGRvbmUpIHtcbiAgY29uc3QgZW50cmllcyA9IGNvcHlCdWZmZXIoYmZyKVxuICByZXNldEJ1ZmZlcihiZnIpXG4gIHRyYW5zbWl0KGVudHJpZXMsIGRvbmUpXG59XG5cbmZ1bmN0aW9uIGNvcHlCdWZmZXIgKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyLnNsaWNlKDApXG59XG5cbmZ1bmN0aW9uIHJlc2V0QnVmZmVyIChiZnIpIHtcbiAgYmZyLmxlbmd0aCA9IDBcbiAgcmV0dXJuIGJmclxufVxuXG5mdW5jdGlvbiBmbHVzaERvbmUgKGVyciwgZW50cmllcykge1xuICBjb25zb2xlLmxvZygnVFJBTlNNSVRURUQnLCBlbnRyaWVzLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvcnNBcHBlbmRlciAocGFyYW1zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHJlbW90ZVVybCA9IHJlcXVpcmVkUGFyYW0oJ3JlbW90ZVVybCBpcyByZXF1aXJlZCcpLFxuICAgIHNldEludGVydmFsOiBmbHVzaEludGVydmFsID0gc2V0Rmx1c2hJbnRlcnZhbCgpLFxuICAgIGZsdXNoVGltZW91dCA9IDE1MDAsXG4gICAgdHJhbnNtaXRMb2dzID0geGhyVHJhbnNtaXR0ZXIoKVxuICB9ID0gcGFyYW1zXG5cbiAgY29uc3QgYnVmZmVyID0gW11cbiAgY29uc3QgcmVzZXRCdWZmZXIgPSBidWZmZXIgPT4gYnVmZmVyLmxlbmd0aCA9IDBcblxuICBjb25zdCBjYW5jZWxGbHVzaCA9IHNldEludGVydmFsKGZsdXNoQnVmZmVyLCBmbHVzaFRpbWVvdXQsIGJ1ZmZlciwgdHJhbnNtaXRMb2dzLCBmbHVzaERvbmUpXG5cbiAgY29uc3QgYXBwZW5kZXIgPSBjcmVhdGVBcHBlbmRlcih7XG4gICAgbmFtZTogJ0NvcnNBcHBlbmRlcicsXG4gICAgbG9nOiAoLi4uYXJncykgPT4gYnVmZmVyRW50cnkoYnVmZmVyLCAuLi5hcmdzKVxuICB9KVxuXG4gIHJldHVybiBhcHBlbmRlclxufVxuXG5mdW5jdGlvbiBidWZmZXJFbnRyeSAoYnVmZmVyLCB0eXBlLCB0aW1lc3RhbXAsIG1lc3NhZ2UsIHVybCwgbGluZSkge1xuICBidWZmZXIucHVzaCh7IHQ6IHR5cGUsIHRzOiB0aW1lc3RhbXAsIG06IG1lc3NhZ2UsIHU6IHVybCwgbDogbGluZSB9KVxufVxuXG4iXX0=