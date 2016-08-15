'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.umdDefine = umdDefine;
function umdDefine(name, moduleDefinition, _ref) {
  var define = _ref.define;
  var module = _ref.module;
  var _ref$global = _ref.global;
  var global = _ref$global === undefined ? {} : _ref$global;

  // UMD export
  if (typeof define !== 'undefined' && define.amd) {
    define([], function () {
      return moduleDefinition;
    });
  }
  // CommonJS
  else if (typeof module !== 'undefined' && module.exports) {
      module.exports = moduleDefinition;
    }
    // Script tag
    else {
        global[name] = moduleDefinition;
      }
}

umdDefine('umdDefine', umdDefine, { define: define, module: module, global: global });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBZ0IsUyxHQUFBLFM7QUFBVCxTQUFTLFNBQVQsQ0FBbUIsSUFBbkIsRUFBeUIsZ0JBQXpCLFFBQTRFO0FBQUEsTUFBL0IsTUFBK0IsUUFBL0IsTUFBK0I7QUFBQSxNQUF2QixNQUF1QixRQUF2QixNQUF1QjtBQUFBLHlCQUFmLE1BQWU7QUFBQSxNQUFmLE1BQWUsK0JBQU4sRUFBTTs7QUFDL0U7QUFDRixNQUFJLE9BQU8sTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPLEdBQTVDLEVBQWlEO0FBQy9DLFdBQU8sRUFBUCxFQUFXO0FBQUEsYUFBTSxnQkFBTjtBQUFBLEtBQVg7QUFDRDtBQUNEO0FBSEEsT0FJSyxJQUFJLE9BQU8sTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPLE9BQTVDLEVBQXFEO0FBQ3hELGFBQU8sT0FBUCxHQUFpQixnQkFBakI7QUFDRDtBQUNEO0FBSEssU0FJQTtBQUNILGVBQU8sSUFBUCxJQUFlLGdCQUFmO0FBQ0Q7QUFFRjs7QUFFRCxVQUFVLFdBQVYsRUFBdUIsU0FBdkIsRUFBa0MsRUFBRSxjQUFGLEVBQVUsY0FBVixFQUFrQixjQUFsQixFQUFsQyIsImZpbGUiOiJ1bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdW1kRGVmaW5lKG5hbWUsIG1vZHVsZURlZmluaXRpb24sIHsgZGVmaW5lLCBtb2R1bGUsIGdsb2JhbCA9IHt9IH0pIHtcbiAgICAvLyBVTUQgZXhwb3J0XG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCAoKSA9PiBtb2R1bGVEZWZpbml0aW9uKTtcbiAgfVxuICAvLyBDb21tb25KU1xuICBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlRGVmaW5pdGlvbjtcbiAgfVxuICAvLyBTY3JpcHQgdGFnXG4gIGVsc2Uge1xuICAgIGdsb2JhbFtuYW1lXSA9IG1vZHVsZURlZmluaXRpb247XG4gIH1cblxufVxuXG51bWREZWZpbmUoJ3VtZERlZmluZScsIHVtZERlZmluZSwgeyBkZWZpbmUsIG1vZHVsZSwgZ2xvYmFsIH0pOyJdfQ==