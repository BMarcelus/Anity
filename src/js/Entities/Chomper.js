class Chomper extends Platformer {
  constructor(x,y) {
    super(x,y,50,50,"#3de");
    // this.speed = 1;
    // this.mx = -1;
    this.jumpStrength = 6;
    // this.wallJumps = false;
    // this.wallSlide = false;
    this.speed = 1;
    this.mx = -1;
    this.heal = 0.01;
    this.hitSound = SOUNDS.enemyHit;
  }
  die() {
    super.die();
    this.scene.enemyCount--;
  }
  // getHit(other) {
  //   super.getHit(other);
  //   SOUNDS.enemyHit.play();
  // }
  getInputs() {
    if(this.grounded&&!this.scene.collides(this.x+this.dx*10,this.y+this.h/2+10)) {
      this.mx = -this.mx;
    }
    if(this.grounded&&this.wallColliding) {
      this.mx = -this.mx;
    }
    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;
    var ds = Math.abs(dx)+Math.abs(dy);
    if(ds<50&&this.invul<=0) {
      player.collide(this);
    }
  }
  initModel(w,h,color) {
    this.model = new ChomperModel(w,h,color,this);
  }
  setScene(scene) {
    this.scene=scene;
    scene.enemyCount ++;
  }
}