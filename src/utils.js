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

utils.captureMouse = function (element) {
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
