//  Copyright Brian Dizon 2019

var touchOn = false;
touchStarts = [];
var touchJoySticks = [
  {
    x: .15, y:.75, r: .2,
    area: {
      x: 0, y: 0, w: 0.5, h: 1
    },
    output: {x: 0, y: 0, angle: 0,r:0},
    held: false,
  },
  {
    x: -.85, y:.75, r: .2,
    area: {
      x: 0, y: 0, w: 0, h: 1
    },
    output: {x: 0, y: 0, angle: 0,r:0},
    held: false,
  }
];

var touchButtons = [
  {
    name: 'A',
    x: .65, y:.75, r:.1,
    area: {
      x: 0.5, y: 0, w: 0.25, h:1
    },
    held: false,
  },{
    name: 'B',
    x: .85, y:.75, r:.1,
    area: {
      x: 0.75, y: 0, w: 0.25, h:1
    },
    held: false,
  },
]


function getTouchPosition(touch, e) {
  var boundingClientRect = CE.getBoundingClientRect();    
  var x = touch.pageX-boundingClientRect.left;
  var y = touch.pageY-boundingClientRect.top - document.body.scrollTop;
  var W = this.canvas.canvas.offsetWidth;
  var H = this.canvas.canvas.offsetHeight;
  x = x/W;
  y = y/H;
  return{x,y};
}

function pointInRect(x,y,rect) {
  return x >= rect.x && x<=rect.x+rect.w &&
    y >= rect.y && y <= rect.y+rect.h;
}

function touchDraw() {
  for(var i=0;i<touchJoySticks.length;++i) {
    var joyStick = touchJoySticks[i];
    var angle = joyStick.output.angle;
    var w = joyStick.r*CE.height;
    var h = w*60/50;
    canvas.save();
    canvas.translate(joyStick.x*CE.width, joyStick.y*CE.height);
    canvas.rotate(angle+Math.PI/2);
    var color = 'rgba(255,255,255,0.5)';
    if(joyStick.held)color = 'rgba(255,0,0,0.5)';
    canvas.fillStyle = color;
    canvas.fillRect(-w/2,-h/2,w,h);
    canvas.restore();
  }
  for(var i=0;i<touchButtons.length;i++) {
    var button = touchButtons[i];
    var x = button.x * CE.width;
    var y = button.y * CE.height;
    var w = button.r * CE.width;
    var h = button.r * CE.height;
    var color = 'rgba(255,255,255,0.5)';
    if(button.held)color = 'rgba(255,0,0,0.5)';
    canvas.fillStyle = color
    canvas.fillRect(x-w/2,y-h/2,w,h);
  }
}

function touchstart(e) {
  initializeSound();
  touchOn = true;
  // if(this.scene.startGame)this.scene.startGame();
  // if(this.scene.time)this.scene.time=0;
  var touches = e.changedTouches;
  e.preventDefault();
  e.stopImmediatePropagation();
  for(var i=0;i<touches.length;i++) {
    var touch = e.changedTouches[i];
    var {x, y} = this.getTouchPosition(touch, e);
    touchStarts.push({x,y});
    for(var j=0;j<touchJoySticks.length;j++) {
      var joyStick = touchJoySticks[j];
      if(pointInRect(x,y,joyStick.area)) {
        var dx = x - joyStick.x;
        var dy = y - joyStick.y;
        var r = Math.sqrt(dx*dx+dy*dy);
        // var magnitude = r/joyStick.r;
        // if(magnitude>1)magnitude=1;
        var magnitude=1;
        joyStick.output = {
          x: dx/r*magnitude,
          y: dy/r*magnitude,
          angle: Math.atan2(dy,dx),
          r: r,
        };
        joyStick.held = true;
      }
    }
    for(var j=0;j<touchButtons.length;j++) {
      var button = touchButtons[j];
      if(pointInRect(x,y,button.area)) {
        button.held = true;
      }
    }
  }
}
function touchend(e) {
  // if(this.scene.startGame)this.scene.startGame();
  // if(this.scene.time)this.scene.time=0;
  var touches = e.changedTouches;
  e.preventDefault();
  e.stopImmediatePropagation();
  for(var i=0;i<touches.length;i++) {
    var touch = e.changedTouches[i];
    var {x, y} = this.getTouchPosition(touch, e);
    for(var j=0;j<touchJoySticks.length;j++) {
      var joyStick = touchJoySticks[j];
      if(pointInRect(x,y,joyStick.area)) {
        joyStick.held = false;  
      }
    }
    for(var j=0;j<touchButtons.length;j++) {
      var button = touchButtons[j];
      if(pointInRect(x,y,button.area)) {
        button.held = false;
      }
    }
  }
}


  window.addEventListener('touchstart', touchstart,{ passive: false });
  window.addEventListener('touchmove', touchstart,{ passive: false });
  window.addEventListener('touchend', touchend);
  window.addEventListener('touchcancel', touchend);