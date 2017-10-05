console.log('First post!');
let canvas = document.getElementById('canvas');
canvas.addEventListener('mousedown', onMouseEvent, false);
canvas.addEventListener('mouseup', onMouseEvent, false);
canvas.addEventListener('click', onMouseEvent, false);
canvas.addEventListener('dblclick', onMouseEvent, false);
canvas.addEventListener('mousewheel', onMouseEvent, false);
canvas.addEventListener('mousemove', onMouseEvent, false);
canvas.addEventListener('mouseover', onMouseEvent, false);
canvas.addEventListener('mouseout', onMouseEvent, false);

function onMouseEvent(event) {
  console.log('\n' + 'Event: ' + event.type);
  console.log('\n' + 'Modifiers: Shift=' + event.shiftKey + ' Ctrl=' + event.ctrlKey);
  console.log('\n' + 'Event: ' + event.type);
}
