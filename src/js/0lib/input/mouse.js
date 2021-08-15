//  Copyright Brian Dizon 2019

var mouse = {
  x: 0, y:0,
}
function onmousemove(e) {
  var boundingClientRect = e.target.getBoundingClientRect();
  x = e.clientX-boundingClientRect.left;
  y = e.clientY-boundingClientRect.top;
  x *= CE.width/e.target.offsetWidth;
  y *= CE.height/e.target.offsetHeight;
  mouse.x = x;
  mouse.y = y;
}

function onmousedown(e) {
  onmousemove(e);
  touchOn = false;
  gamepadOn = false;
  mouse.down = true;
  mouse.held = true;
  initializeSound();
}

function onmouseup(e) {
  mouse.held = false;
}

window.addEventListener('load', function(e) {
  window.addEventListener('mousemove', onmousemove);
  window.addEventListener('mousedown', onmousedown);
  window.addEventListener('mouseup', onmouseup);
})