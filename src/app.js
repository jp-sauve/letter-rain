window.onload = function () {
  let canvas = document.getElementById( 'canvas' ),
    mouse = utils.captureMouse( canvas );

  function onTouchEvent(event) {
    console.log(event.type);
  }
  canvas.addEventListener('touchstart', onTouchEvent, false);
  canvas.addEventListener('touchend', onTouchEvent, false);
  canvas.addEventListener('touchmove', onTouchEvent, false);
  canvas.addEventListener( 'mousedown', function () {
    console.log( 'x/y: ' + mouse.x + ', ' + mouse.y );
  }, false );
};
