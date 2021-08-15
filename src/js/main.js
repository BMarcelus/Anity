var frameCount = 0;
var MainDriver = {
  scene: null,
  started: false,
  FPS: 60,
  paused: false,
  pausesOnClickOff: true,
  fadeToBlack(time,callback) {
    this.fadeTime = time;
    this.fadeTimer = time;
    this.fadeDir=1;
    this.fadeCallback = callback;
  },
  fadeIn(time,callback) {
    this.fadeTime = time;
    this.fadeTimer = time;
    this.fadeDir=0;
    this.fadeCallback = callback;
  },
  startWithScene(scene) {
    this.update = this.update.bind(this);
    this.draw = this.draw.bind(this);
    this.setScene(scene);
    this.start();
  },
  setScene(scene) {
    scene.driver = this;
    if(this.scene) {
      this.scene.onLeave();
    }
    this.scene = scene;
    scene.init();
  },
  start() {
    if(this.started) {
      console.log('main driver already started');
      return;
    }
    setInterval(this.update, 1000/this.FPS);
    this.draw();
    this.started = true;
    window.addEventListener('blur', this.pause.bind(this));
    window.addEventListener('focus', this.unPause.bind(this));    
  },
  pause() {
    if(!this.pausesOnClickOff)return;
    this.paused = true;
    canvas.fillStyle = "white";
    canvas.strokeStyle = "black";
    canvas.font = '40px Impact';
    canvas.textAlign = 'center';
    canvas.lineWidth = 5;
    canvas.miterLimit = 2;
    canvas.strokeText("click to resume", CE.width/2,CE.height/2);
    // canvas.fillStyle = "white";
    canvas.fillText("click to resume", CE.width/2,CE.height/2);
    MusicHandler.pause();
  },
  unPause() {
    MusicHandler.resume();
    this.paused = false;
  },
  update() {
    frameCount += 1;
    inputUpdate();
    if(this.paused)return;
    this.scene.update();
    if(this.fadeTimer>0) {
      this.fadeTimer--;
    }
    if(this.fadeTimer<3&&this.fadeCallback){
      this.fadeCallback();
      this.fadeCallback = null;
    }
    if(devtools.opened == true) {
      alert('detected');
    }
  },
  draw() {
    window.requestAnimationFrame(this.draw);
    if(this.paused)return;
    canvas.clearRect(0,0,CE.width,CE.height);
    this.scene.draw();
    if(this.fadeTimer>0) {
      canvas.fillStyle = 'black';
      var t = this.fadeTimer/this.fadeTime;
      if(this.fadeDir) t=1-t;
      canvas.globalAlpha = t;
      canvas.fillRect(0,0,CE.width,CE.height);
      canvas.globalAlpha=1;
    }
  }
}

devtools = /./;
devtools.toString = function() {
  // this.opened = true;
  // alert('hi');
}

window.addEventListener('load', function(e) {
  function start() {
    // window.removeEventListener('mousedown', start);

    // MainDriver.startWithScene(new GameScene());
    // return;

    MainDriver.startWithScene(new LoadingScene());
    ImageLoader.onComplete(function() {
      SOUNDS.onComplete(function() {
        setTimeout(function() {
          MainDriver.setScene(new SplashScreen(OpeningScene));
          console.log('%c', devtools);
        },1000);
      })
    })
  }
  start();
  // window.addEventListener('mousedown', start);
  // setTimeout(function(){MainDriver.startWithScene(new OpeningScene())},0);
    // setTimeout(function(){MainDriver.startWithScene(new GameScene())},0);
  // MainDriver.startWithScene(new LoadingScene());
  // ImageLoader.onComplete(function(){
  //   setTimeout(function() {
  //     MainDriver.setScene(new SplashScreen(OpeningScene));
  //   },1000);
  // })
})