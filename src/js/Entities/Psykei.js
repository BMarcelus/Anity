class Psykei extends Platformer {
  constructor(x,y) {
    super(x,y,20,80,"#0a0");
  }
  setScene(scene) {
    this.scene=scene;
    scene.specialActors.psykei = this;
  }
  initModel() {
    this.model = new PsykeiModel(this);
  }
}

class Boss extends Psykei {
  constructor(x,y) {
    super(x,y);
    this.health = 100;
    this.grav = 0;
    this.scaleX = 1.5;
    this.scaleY = 1.5;
  }
  getInputs() {
    var targetX = this.scene.level.width/2 + Math.cos(frameCount*Math.PI/80)*100;
    var targetY = this.scene.level.height/2 + Math.sin(frameCount*Math.PI/80)*100;
    var targetVx = (targetX-this.x)/10;
    var targetVy = (targetY-this.y)/10;
    this.vx += (targetVx - this.vx)/5;
    this.vy += (targetVy - this.vy)/10 + Math.cos(frameCount*Math.PI/40)/20;

    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;
    var ds = Math.abs(dx)+Math.abs(dy);
    if(ds<50&&this.invul<=0) {
      player.collide(this);
    }
    // var player = this.scene.player;
    // if(!player)return;
    // var dx = player.x - this.x;

  }
}