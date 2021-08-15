class Curley extends Platformer {
  constructor(x,y) {
    super(x,y,40,40,'black');
    this.grav = 0;
    this.speed = 0;
  }
  update() {
    var target = this.scene.player;
    if(target) {
      var targetX = target.x+200;
      var targetY = target.y-200;
      // this.mx=targetX>this.x?1:-1;
      this.mx=-1;
      var targetVx = (targetX-this.x)/10;
      var targetVy = (targetY-this.y)/10;
      this.vx += (targetVx - this.vx)/10;
      this.vy += (targetVy - this.vy)/50 + Math.cos(frameCount*Math.PI/40)/20;
    }
    super.update();
  }
  initModel(w,h,color) {
    this.model = new CurleyModel(this);
  }
  setScene(scene) {
    this.scene = scene;
    scene.specialActors.curley = this;
  }
}