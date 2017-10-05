var utils = {};

if ( !window.requestAnimationFrame ) {
  window.requestAnimationFrame = (
    window.requestAnimationFrame ||
    window.requestAnimationFrame ||
    window.requestAnimationFrame ||
    window.requestAnimationFrame ||
    function ( callback ) {
      return window.setTimeout( callback, 1000 / 60 );
    }
  )
};

utils.captureMouse = function ( element ) {
  var mouse = {
    x: 0,
    y: 0
  };
  element.addEventListener( 'mousemove', function ( evt ) {
    var x, y;
    if ( evt.pageX || evt.pageY ) {
      x = evt.pageX;
      y = evt.pageY;
    } else {
      x = evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = evt.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= element.offsetLeft;
    y -= element.offsetTop;

    mouse.x = x;
    mouse.y = y;
  }, false );
  return mouse;
};

utils.captureTouch = function ( element ) {
  var touch = {
    x: null,
    y: null,
    isPressed: false
  };
  element.addEventListener( 'touchstart', function ( evt ) {
    touch.isPressed = true;
  }, false );
  element.addEventListener( 'touchend', function ( evt ) {
    touch.isPressed = false;
    touch.x = null;
    touch.y = null;
  }, false );
  element.addEventListener( 'touchmove', function ( evt ) {
    var x, y,
      touch_event = evt.touches[ 0 ];
    if ( touch_event.pageX || touch_event.pageY ) {
      x = touch_event.pageX;
      y = touch_event.pageY;
    } else {
      x = touch_event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = touch_event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= offsetLeft;
    y -= offsetTop;
    touch.x = x;
    touch.y = y;
  }, false );
  return touch;
}
