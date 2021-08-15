
class Drone extends Platformer{
  constructor(x,y) {
    super(x,y,50,50,"brown");
    this.speed = 1;
    this.grav = 0.25;
    this.shootTime = 60*2;
    this.shootTimer = 0;
    this.heal = 0.01;
    // this.offset = Math.random()*this.shootTime
  }
  getHit(other) {
    super.getHit(other) 
    this.shootTimer =0;
  }
  setScene(scene) {
    this.scene=scene;
    scene.enemyCount ++;
  }
  die() {
    super.die();
    this.scene.enemyCount--;
  }
  getInputs() {
    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;
    var ds = Math.abs(dx)+Math.abs(dy);
    if(ds<50&&this.invul<=0) {
      player.collide(this);
    }
    this.dx = dx>0?1:-1;
    // this.vy += Math.cos(frameCount*Math.PI/10)*.1;
    this.vy += ((player.y - 50 - this.y)/50-this.vy)/10

    if(Math.abs(dx) < 500) {
      this.shootTimer++;
      if(this.shootTimer >= this.shootTime) {
        this.shootTimer = 0;
        this.scene.addEntity(new LaserBeam(this.x,this.y,this.dx*5, 100));
        SOUNDS.laser.play();
      }
    }
  }
  initModel() {
    this.model = new DroneModel(this);
  }
}