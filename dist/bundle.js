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

eval("console.log('First post!');\nlet canvas = document.getElementById('canvas');\ncanvas.addEventListener('mousedown', onMouseEvent, false);\ncanvas.addEventListener('mouseup', onMouseEvent, false);\ncanvas.addEventListener('click', onMouseEvent, false);\ncanvas.addEventListener('dblclick', onMouseEvent, false);\ncanvas.addEventListener('mousewheel', onMouseEvent, false);\ncanvas.addEventListener('mousemove', onMouseEvent, false);\ncanvas.addEventListener('mouseover', onMouseEvent, false);\ncanvas.addEventListener('mouseout', onMouseEvent, false);\n\nfunction onMouseEvent(event) {\n  console.log('\\n' + 'Event: ' + event.type);\n  console.log('\\n' + 'Modifiers: Shift=' + event.shiftKey + ' Ctrl=' + event.ctrlKey);\n  console.log('\\n' + 'Event: ' + event.type);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLmpzP2JkOWMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ0ZpcnN0IHBvc3QhJyk7XG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VFdmVudCwgZmFsc2UpO1xuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlRXZlbnQsIGZhbHNlKTtcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uTW91c2VFdmVudCwgZmFsc2UpO1xuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25Nb3VzZUV2ZW50LCBmYWxzZSk7XG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIG9uTW91c2VFdmVudCwgZmFsc2UpO1xuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VFdmVudCwgZmFsc2UpO1xuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG9uTW91c2VFdmVudCwgZmFsc2UpO1xuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb25Nb3VzZUV2ZW50LCBmYWxzZSk7XG5cbmZ1bmN0aW9uIG9uTW91c2VFdmVudChldmVudCkge1xuICBjb25zb2xlLmxvZygnXFxuJyArICdFdmVudDogJyArIGV2ZW50LnR5cGUpO1xuICBjb25zb2xlLmxvZygnXFxuJyArICdNb2RpZmllcnM6IFNoaWZ0PScgKyBldmVudC5zaGlmdEtleSArICcgQ3RybD0nICsgZXZlbnQuY3RybEtleSk7XG4gIGNvbnNvbGUubG9nKCdcXG4nICsgJ0V2ZW50OiAnICsgZXZlbnQudHlwZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);