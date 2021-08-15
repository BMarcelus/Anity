//  Copyright Brian Dizon 2019

var CE = document.getElementById('gc');
var canvas = CE.getContext('2d');
var canvasPercent = "100%";

var canvasWrapper = document.getElementById('canvas-wrapper');
CE.style.width = "100%";

var SCREEN_CANVASES = [];

function createScreenCanvas() {
  var C = document.createElement('canvas');
  C.width = CE.width;
  C.height = CE.height;
  var ctx = C.getContext('2d');
  SCREEN_CANVASES.push(ctx);
  return {
    CE: C,
    canvas: ctx
  }
}


canvas.fillRectFloor = function(x,y,w,h){
  this.fillRect(Math.floor(x),Math.floor(y),Math.floor(w),Math.floor(h));
}

function onresize(e){
  var W = CE.width;
  var H = CE.height+43;
  var iW = window.innerWidth;
  var iH = window.innerHeight;
  var rw = iW/iH;
  var rc = W/H;
  if(rw >= rc) {
    canvasWrapper.style.height = iH+'px';
    canvasWrapper.style.width = Math.floor(iH * W/H)+'px';
  } else {
    canvasWrapper.style.width = iW + 'px';
    canvasWrapper.style.height = Math.floor(iW * H/W) + 'px';
  }
  
  canvas.imageSmoothingEnabled = false;
  canvas.mozImageSmoothingEnabled=false;
  canvas.msImageSmoothingEnabled = false;
  canvas.oImageSmoothingEnabled=false;
  canvas.webkitImageSmoothingEnabled=false;

  SCREEN_CANVASES.forEach(function(canvas) {
    canvas.imageSmoothingEnabled = false;
    canvas.mozImageSmoothingEnabled=false;
    canvas.msImageSmoothingEnabled = false;
    canvas.oImageSmoothingEnabled=false;
    canvas.webkitImageSmoothingEnabled=false;
  })
}

window.addEventListener('resize', onresize);
window.addEventListener('load', onresize);