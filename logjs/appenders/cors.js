'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CorsAppender = CorsAppender;

var _levels = require('../levels');

var _appender_factory = require('./appender_factory');

function setFlushInterval() {
  debugger;
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

function flushDone(err, entries) {
  console.log('TRANSMITTED', entries.length);
}

function resetBuffer(bfr) {
  bfr.length = 0;
  return bfr;
}

function flushBuffer(bfr, done) {}

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

function copyBuffer(buffer) {
  return buffer.slice(0);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHBlbmRlcnMvY29ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQW1DZ0IsWSxHQUFBLFk7O0FBbkNoQjs7QUFDQTs7QUFFQSxTQUFTLGdCQUFULEdBQTZCO0FBQzNCO0FBQ0EsU0FBTyxPQUFPLFVBQWQ7QUFDRDs7QUFFRCxTQUFTLGFBQVQsQ0FBd0IsR0FBeEIsRUFBNkI7QUFDM0IsUUFBTSxJQUFJLEtBQUosQ0FBVSxHQUFWLENBQU47QUFDRDs7QUFFRCxTQUFTLGVBQVQsR0FBNEI7QUFDMUIsU0FBTyxPQUFPLFFBQWQ7QUFDRDs7QUFFRCxTQUFTLGNBQVQsR0FBMkI7QUFDekIsU0FBTyxVQUFDLE9BQUQsRUFBVSxFQUFWLEVBQWlCO0FBQ3RCLE9BQUcsSUFBSCxFQUFTLE9BQVQ7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBUyxTQUFULENBQW9CLEdBQXBCLEVBQXlCLE9BQXpCLEVBQWtDO0FBQ2hDLFVBQVEsR0FBUixDQUFZLGFBQVosRUFBMkIsUUFBUSxNQUFuQztBQUNEOztBQUVELFNBQVMsV0FBVCxDQUFzQixHQUF0QixFQUEyQjtBQUN6QixNQUFJLE1BQUosR0FBYSxDQUFiO0FBQ0EsU0FBTyxHQUFQO0FBQ0Q7O0FBRUQsU0FBUyxXQUFULENBQXFCLEdBQXJCLEVBQTBCLElBQTFCLEVBQWdDLENBRS9COztBQUVNLFNBQVMsWUFBVCxHQUFvQztBQUFBLE1BQWIsTUFBYSx5REFBSixFQUFJO0FBQUEsMEJBTXJDLE1BTnFDLENBRXZDLFNBRnVDO0FBQUEsTUFFdkMsU0FGdUMscUNBRTNCLGNBQWMsdUJBQWQsQ0FGMkI7QUFBQSw0QkFNckMsTUFOcUMsQ0FHdkMsV0FIdUM7QUFBQSxNQUcxQixhQUgwQix1Q0FHVixrQkFIVTtBQUFBLDZCQU1yQyxNQU5xQyxDQUl2QyxZQUp1QztBQUFBLE1BSXZDLFlBSnVDLHdDQUl4QixJQUp3QjtBQUFBLDZCQU1yQyxNQU5xQyxDQUt2QyxZQUx1QztBQUFBLE1BS3ZDLFlBTHVDLHdDQUt4QixnQkFMd0I7OztBQVF6QyxNQUFNLFNBQVMsRUFBZjtBQUNBLE1BQU0sY0FBYyxTQUFkLFdBQWM7QUFBQSxXQUFVLE9BQU8sTUFBUCxHQUFnQixDQUExQjtBQUFBLEdBQXBCOztBQUVBLE1BQU0sY0FBYyxZQUFZLFdBQVosRUFBeUIsWUFBekIsRUFBdUMsTUFBdkMsRUFBK0MsWUFBL0MsRUFBNkQsU0FBN0QsQ0FBcEI7O0FBRUEsTUFBTSxXQUFXLDhCQUFlO0FBQzlCLFVBQU0sY0FEd0I7QUFFOUIsU0FBSztBQUFBLHdDQUFJLElBQUo7QUFBSSxZQUFKO0FBQUE7O0FBQUEsYUFBYSw4QkFBWSxNQUFaLFNBQXVCLElBQXZCLEVBQWI7QUFBQTtBQUZ5QixHQUFmLENBQWpCOztBQUtBLFNBQU8sUUFBUDtBQUNEOztBQUVELFNBQVMsV0FBVCxDQUFzQixNQUF0QixFQUE4QixJQUE5QixFQUFvQyxTQUFwQyxFQUErQyxPQUEvQyxFQUF3RCxHQUF4RCxFQUE2RCxJQUE3RCxFQUFtRTtBQUNqRSxTQUFPLElBQVAsQ0FBWSxFQUFFLEdBQUcsSUFBTCxFQUFXLElBQUksU0FBZixFQUEwQixHQUFHLE9BQTdCLEVBQXNDLEdBQUcsR0FBekMsRUFBOEMsR0FBRyxJQUFqRCxFQUFaO0FBQ0Q7O0FBRUQsU0FBUyxVQUFULENBQXFCLE1BQXJCLEVBQTZCO0FBQzNCLFNBQU8sT0FBTyxLQUFQLENBQWEsQ0FBYixDQUFQO0FBQ0QiLCJmaWxlIjoiY29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExFVkVMUyB9IGZyb20gJy4uL2xldmVscydcbmltcG9ydCB7IGNyZWF0ZSBhcyBjcmVhdGVBcHBlbmRlciB9IGZyb20gJy4vYXBwZW5kZXJfZmFjdG9yeSdcblxuZnVuY3Rpb24gc2V0Rmx1c2hJbnRlcnZhbCAoKSB7XG4gIGRlYnVnZ2VyXG4gIHJldHVybiBnbG9iYWwuc2V0VGltZW91dFxufVxuXG5mdW5jdGlvbiByZXF1aXJlZFBhcmFtIChtc2cpIHtcbiAgdGhyb3cgbmV3IEVycm9yKG1zZylcbn1cblxuZnVuY3Rpb24gY3VycmVudExvY2F0aW9uICgpIHtcbiAgcmV0dXJuIGdsb2JhbC5sb2NhdGlvblxufVxuXG5mdW5jdGlvbiB4aHJUcmFuc21pdHRlciAoKSB7XG4gIHJldHVybiAoZW50cmllcywgY2IpID0+IHtcbiAgICBjYihudWxsLCBlbnRyaWVzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGZsdXNoRG9uZSAoZXJyLCBlbnRyaWVzKSB7XG4gIGNvbnNvbGUubG9nKCdUUkFOU01JVFRFRCcsIGVudHJpZXMubGVuZ3RoKVxufVxuXG5mdW5jdGlvbiByZXNldEJ1ZmZlciAoYmZyKSB7XG4gIGJmci5sZW5ndGggPSAwXG4gIHJldHVybiBiZnJcbn1cblxuZnVuY3Rpb24gZmx1c2hCdWZmZXIoYmZyLCBkb25lKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvcnNBcHBlbmRlciAocGFyYW1zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHJlbW90ZVVybCA9IHJlcXVpcmVkUGFyYW0oJ3JlbW90ZVVybCBpcyByZXF1aXJlZCcpLFxuICAgIHNldEludGVydmFsOiBmbHVzaEludGVydmFsID0gc2V0Rmx1c2hJbnRlcnZhbCgpLFxuICAgIGZsdXNoVGltZW91dCA9IDE1MDAsXG4gICAgdHJhbnNtaXRMb2dzID0geGhyVHJhbnNtaXR0ZXIoKVxuICB9ID0gcGFyYW1zXG5cbiAgY29uc3QgYnVmZmVyID0gW11cbiAgY29uc3QgcmVzZXRCdWZmZXIgPSBidWZmZXIgPT4gYnVmZmVyLmxlbmd0aCA9IDBcblxuICBjb25zdCBjYW5jZWxGbHVzaCA9IHNldEludGVydmFsKGZsdXNoQnVmZmVyLCBmbHVzaFRpbWVvdXQsIGJ1ZmZlciwgdHJhbnNtaXRMb2dzLCBmbHVzaERvbmUpXG5cbiAgY29uc3QgYXBwZW5kZXIgPSBjcmVhdGVBcHBlbmRlcih7XG4gICAgbmFtZTogJ0NvcnNBcHBlbmRlcicsXG4gICAgbG9nOiAoLi4uYXJncykgPT4gYnVmZmVyRW50cnkoYnVmZmVyLCAuLi5hcmdzKVxuICB9KVxuXG4gIHJldHVybiBhcHBlbmRlclxufVxuXG5mdW5jdGlvbiBidWZmZXJFbnRyeSAoYnVmZmVyLCB0eXBlLCB0aW1lc3RhbXAsIG1lc3NhZ2UsIHVybCwgbGluZSkge1xuICBidWZmZXIucHVzaCh7IHQ6IHR5cGUsIHRzOiB0aW1lc3RhbXAsIG06IG1lc3NhZ2UsIHU6IHVybCwgbDogbGluZSB9KVxufVxuXG5mdW5jdGlvbiBjb3B5QnVmZmVyIChidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlci5zbGljZSgwKVxufVxuIl19