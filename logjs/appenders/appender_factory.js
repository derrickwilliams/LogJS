'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
function create(_ref) {
  var _ref$name = _ref.name;
  var name = _ref$name === undefined ? 'ANONYMOUS_APPENDER' : _ref$name;
  var _ref$log = _ref.log;
  var logFn = _ref$log === undefined ? function () {} : _ref$log;
  var _ref$config = _ref.config;
  var config = _ref$config === undefined ? {} : _ref$config;

  var appender = Object.defineProperties({}, {
    name: readOnlyProperty(name),
    log: readOnlyProperty(logFn),
    config: readOnlyProperty(config)
  });

  return appender;
}

function readOnlyProperty(value) {
  return {
    configurable: false,
    writable: false,
    value: value
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHBlbmRlcnMvYXBwZW5kZXJfZmFjdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUFnQixNLEdBQUEsTTtBQUFULFNBQVMsTUFBVCxPQUEwRjtBQUFBLHVCQUF4RSxJQUF3RTtBQUFBLE1BQXhFLElBQXdFLDZCQUFqRSxvQkFBaUU7QUFBQSxzQkFBM0MsR0FBMkM7QUFBQSxNQUF0QyxLQUFzQyw0QkFBOUIsWUFBVyxDQUFFLENBQWlCO0FBQUEseUJBQWYsTUFBZTtBQUFBLE1BQWYsTUFBZSwrQkFBTixFQUFNOztBQUMvRixNQUFNLFdBQVcsT0FBTyxnQkFBUCxDQUF3QixFQUF4QixFQUE0QjtBQUMzQyxVQUFNLGlCQUFpQixJQUFqQixDQURxQztBQUUzQyxTQUFLLGlCQUFpQixLQUFqQixDQUZzQztBQUczQyxZQUFRLGlCQUFpQixNQUFqQjtBQUhtQyxHQUE1QixDQUFqQjs7QUFNQSxTQUFPLFFBQVA7QUFDRDs7QUFFRCxTQUFTLGdCQUFULENBQTBCLEtBQTFCLEVBQWlDO0FBQy9CLFNBQU87QUFDTCxrQkFBYyxLQURUO0FBRUwsY0FBVSxLQUZMO0FBR0w7QUFISyxHQUFQO0FBS0QiLCJmaWxlIjoiYXBwZW5kZXJfZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoeyBuYW1lID0gJ0FOT05ZTU9VU19BUFBFTkRFUicsIGxvZzogbG9nRm4gPSBmdW5jdGlvbigpIHt9LCBjb25maWcgPSB7fSB9KSB7XG4gIGNvbnN0IGFwcGVuZGVyID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoe30sIHtcbiAgICBuYW1lOiByZWFkT25seVByb3BlcnR5KG5hbWUpLFxuICAgIGxvZzogcmVhZE9ubHlQcm9wZXJ0eShsb2dGbiksXG4gICAgY29uZmlnOiByZWFkT25seVByb3BlcnR5KGNvbmZpZylcbiAgfSlcblxuICByZXR1cm4gYXBwZW5kZXI7XG59XG5cbmZ1bmN0aW9uIHJlYWRPbmx5UHJvcGVydHkodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZVxuICB9XG59Il19