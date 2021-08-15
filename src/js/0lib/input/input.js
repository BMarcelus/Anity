//  Copyright Brian Dizon 2019

var Buttons = {
  toCache: [],
};

var Axes = [
  {down: false, previous: 0},
  {down: false, previous: 0},
]

function inputUpdate() {
  handleGamePad();
  anyKeyDown = false;
  gamepadAnyButtonDown = false;
  mouse.down = false;
  touchStarts = [];
  Buttons.toCache.forEach(function(e) {
    e.cache = e.toCache;
  })
  Buttons.toCache = [];
  Axes.forEach(function(e) {
    e.previous = e.toPrevious;
    e.down = true;
  })
}

function getAnyDown() {
  return anyKeyDown || touchStarts.length>0 || mouse.down || gamepadAnyButtonDown;
}

function getAxes() {
  if(touchOn&&touchJoySticks[0].held) {
    return {
      inputX: touchJoySticks[0].output.x,
      inputY: touchJoySticks[0].output.y,
    }
  }
  if(gamepadOn&&gamepadJoysticks[0].held) {
    return {
      inputX: gamepadJoysticks[0].output.x,
      inputY: gamepadJoysticks[0].output.y,
    }
  }
  var inputX = (keys[68]||keys[39])-(keys[65]||keys[37]);
  var inputY = (keys[83]||keys[40])-(keys[87]||keys[38]);
  return {inputX, inputY};
}

function getAxesNormal() {
  var {inputX, inputY} = getAxes();
  var r = Math.sqrt(inputX*inputX+inputY*inputY);
  if(r>1) {
    inputX = inputX/r;
    inputY = inputY/r;
    r=1;
  }
  return {inputX, inputY, inputR:r};
}

function getAxesDown() {
  var {inputX,inputY} = getAxes();
  var ix = Math.round(inputX);
  var iy = Math.round(inputY);
  if(Axes[0].previous != ix) {
    Axes[0].down = true;
    Axes[0].toPrevious = ix;
  } else {
    ix = 0;
  }
  if(Axes[1].previous != iy) {
    Axes[1].down = true;
    Axes[1].toPrevious = iy;
  } else {
    iy = 0;
  }
  return {
    inputX: ix,
    inputY: iy,
  }
}

function getButton(button) {
  if(button.keys) {
    if(button.allKeys) {
      for(var i=0;i<button.keys.length;i++) {
        if(!keys[button.keys[i]])return false;
      }
      return true;
    }
    for(var i=0;i<button.keys.length;i++) {
      if(keys[button.keys[i]])return true;
    }
  }
  if(gamepadOn&&button.buttons)
  for(var i=0;i<button.buttons.length;i++) {
    if(gamepadButtons[button.buttons[i]])return true;
  }
  if(touchOn&&button.touchButtons)
  for(var i=0;i<button.touchButtons.length;i++) {
    if(touchButtons[button.touchButtons[i]].held)return true;
  }
  return false;
}

function getButtonDown(button) {
  //kind of requires this to be called every frame,
  //also only works once per frame. this is pretty bad.
  var current = getButton(button);
  var last = button.cache;
  button.toCache = current;
  // button.cache = current;
  Buttons.toCache.push(button);
  if(current && !last)return true;
  return false;
}