/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("window.onload = function () {\n  let canvas = document.getElementById('canvas'),\n      context = canvas.getContext('2d');\n  mouse = utils.captureMouse(canvas), touch = utils.captureTouch(canvas), arrow1 = new Arrow();\n  arrow1.x = canvas.width / 2;\n  arrow1.y = canvas.height / 2;\n\n  function onKeyboardEvent(evt) {\n    switch (evt.keyCode) {\n      case keycode.LEFT:\n        console.log('LEFT');\n        break;\n      case keycode.UP:\n        console.log('UP');\n        break;\n      case keycode.RIGHT:\n        console.log('RIGHT');\n        break;\n      case keycode.DOWN:\n        console.log('DOWN');\n        break;\n      default:\n        console.log(evt.keyCode);\n\n    }\n  }\n\n  function onTouchEvent(event) {\n    console.log(event.type);\n  }\n  window.addEventListener('keydown', onKeyboardEvent, false);\n  canvas.addEventListener('touchstart', onTouchEvent, false);\n  canvas.addEventListener('touchend', onTouchEvent, false);\n  canvas.addEventListener('touchmove', onTouchEvent, false);\n  canvas.addEventListener('mousedown', function () {\n    console.log('x/y: ' + mouse.x + ', ' + mouse.y);\n  }, false);\n  (function drawFrame() {\n    window.requestAnimationFrame(drawFrame, canvas);\n    context.clearRect(0, 0, canvas.width, canvas.height);\n    var dx = mouse.x - arrow1.x,\n        dy = mouse.y - arrow1.y;\n    arrow1.rotation = Math.atan2(dy, dx);\n    arrow1.draw(context);\n  })();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLmpzP2JkOWMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnY2FudmFzJyApLFxuICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgbW91c2UgPSB1dGlscy5jYXB0dXJlTW91c2UoIGNhbnZhcyApLFxuICAgIHRvdWNoID0gdXRpbHMuY2FwdHVyZVRvdWNoKCBjYW52YXMgKSxcbiAgICBhcnJvdzEgPSBuZXcgQXJyb3coKTtcbiAgICBhcnJvdzEueCA9IGNhbnZhcy53aWR0aC8yO1xuICAgIGFycm93MS55ID0gY2FudmFzLmhlaWdodC8yO1xuXG4gIGZ1bmN0aW9uIG9uS2V5Ym9hcmRFdmVudCggZXZ0ICkge1xuICAgIHN3aXRjaCAoIGV2dC5rZXlDb2RlICkge1xuICAgICAgY2FzZSBrZXljb2RlLkxFRlQ6XG4gICAgICAgIGNvbnNvbGUubG9nKCAnTEVGVCcgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleWNvZGUuVVA6XG4gICAgICAgIGNvbnNvbGUubG9nKCAnVVAnICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBrZXljb2RlLlJJR0hUOlxuICAgICAgICBjb25zb2xlLmxvZyggJ1JJR0hUJyApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5Y29kZS5ET1dOOlxuICAgICAgICBjb25zb2xlLmxvZyggJ0RPV04nICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coIGV2dC5rZXlDb2RlICk7XG5cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoRXZlbnQoIGV2ZW50ICkge1xuICAgIGNvbnNvbGUubG9nKCBldmVudC50eXBlICk7XG4gIH1cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlib2FyZEV2ZW50LCBmYWxzZSApO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoRXZlbnQsIGZhbHNlICk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRXZlbnQsIGZhbHNlICk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaEV2ZW50LCBmYWxzZSApO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyggJ3gveTogJyArIG1vdXNlLnggKyAnLCAnICsgbW91c2UueSApO1xuICB9LCBmYWxzZSApO1xuICAoZnVuY3Rpb24gZHJhd0ZyYW1lICgpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdGcmFtZSxjYW52YXMpO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodCk7XG4gICAgdmFyIGR4ID0gbW91c2UueCAtIGFycm93MS54LFxuICAgIGR5ID0gbW91c2UueSAtIGFycm93MS55O1xuICAgIGFycm93MS5yb3RhdGlvbiA9IE1hdGguYXRhbjIoZHksZHgpO1xuICAgIGFycm93MS5kcmF3KGNvbnRleHQpO1xuICB9KCkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);