'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBuilder = createBuilder;

var _logger_factory = require('./logger_factory');

function createBuilder() {
  var appenders = {
    testAppender: function testAppender() {
      var _console;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_console = console).log.apply(_console, ['TEST APPENDER'].concat(args));
    }
  };

  var baseFields = {
    testField1: 'this is a test field'
  };

  return {
    addAppender: function addAppender(appender) {},
    build: function build(fields) {
      return (0, _logger_factory.create)({ appenders: appenders, fields: baseFields });
    }
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYmF4X2xvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUVnQixhLEdBQUEsYTs7QUFGaEI7O0FBRU8sU0FBUyxhQUFULEdBQXlCO0FBQzlCLE1BQU0sWUFBWTtBQUNoQixrQkFBYztBQUFBOztBQUFBLHdDQUFJLElBQUo7QUFBSSxZQUFKO0FBQUE7O0FBQUEsYUFBYSxxQkFBUSxHQUFSLGtCQUFZLGVBQVosU0FBZ0MsSUFBaEMsRUFBYjtBQUFBO0FBREUsR0FBbEI7O0FBSUEsTUFBTSxhQUFhO0FBQ2pCLGdCQUFZO0FBREssR0FBbkI7O0FBSUEsU0FBTztBQUNMLGVBREssdUJBQ08sUUFEUCxFQUNpQixDQUVyQixDQUhJO0FBS0wsU0FMSyxpQkFLQyxNQUxELEVBS1M7QUFDWixhQUFPLDRCQUFhLEVBQUUsb0JBQUYsRUFBYSxRQUFRLFVBQXJCLEVBQWIsQ0FBUDtBQUNEO0FBUEksR0FBUDtBQVNEIiwiZmlsZSI6ImNiYXhfbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIGFzIGNyZWF0ZUxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyX2ZhY3RvcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnVpbGRlcigpIHtcbiAgY29uc3QgYXBwZW5kZXJzID0ge1xuICAgIHRlc3RBcHBlbmRlcjogKC4uLmFyZ3MpID0+IGNvbnNvbGUubG9nKCdURVNUIEFQUEVOREVSJywgLi4uYXJncylcbiAgfTtcblxuICBjb25zdCBiYXNlRmllbGRzID0ge1xuICAgIHRlc3RGaWVsZDE6ICd0aGlzIGlzIGEgdGVzdCBmaWVsZCdcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZEFwcGVuZGVyKGFwcGVuZGVyKSB7XG5cbiAgICB9LFxuXG4gICAgYnVpbGQoZmllbGRzKSB7XG4gICAgICByZXR1cm4gY3JlYXRlTG9nZ2VyKHsgYXBwZW5kZXJzLCBmaWVsZHM6IGJhc2VGaWVsZHMgfSlcbiAgICB9XG4gIH1cbn0iXX0=