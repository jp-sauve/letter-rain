window.onload = function () {
  let canvas = document.getElementById( 'canvas' ),
  context = canvas.getContext('2d');
    mouse = utils.captureMouse( canvas ),
    touch = utils.captureTouch( canvas ),
    arrow1 = new Arrow();
    arrow1.x = canvas.width/2;
    arrow1.y = canvas.height/2;

  function onKeyboardEvent( evt ) {
    switch ( evt.keyCode ) {
      case keycode.LEFT:
        console.log( 'LEFT' );
        break;
      case keycode.UP:
        console.log( 'UP' );
        break;
      case keycode.RIGHT:
        console.log( 'RIGHT' );
        break;
      case keycode.DOWN:
        console.log( 'DOWN' );
        break;
      default:
        console.log( evt.keyCode );

    }
  }

  function onTouchEvent( event ) {
    console.log( event.type );
  }
  window.addEventListener( 'keydown', onKeyboardEvent, false );
  canvas.addEventListener( 'touchstart', onTouchEvent, false );
  canvas.addEventListener( 'touchend', onTouchEvent, false );
  canvas.addEventListener( 'touchmove', onTouchEvent, false );
  canvas.addEventListener( 'mousedown', function () {
    console.log( 'x/y: ' + mouse.x + ', ' + mouse.y );
  }, false );
  (function drawFrame () {
    window.requestAnimationFrame(drawFrame,canvas);
    context.clearRect(0,0,canvas.width,canvas.height);
    var dx = mouse.x - arrow1.x,
    dy = mouse.y - arrow1.y;
    arrow1.rotation = Math.atan2(dy,dx);
    arrow1.draw(context);
  }());
};
