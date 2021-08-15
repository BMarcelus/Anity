class Sunflower extends Platformer {
  constructor(x,y,dies) {
    super(x,y,40,40,'red');
    this.evil = Math.random()>.7;
    this.life = 500;
    this.maxHealth = 
    this.health = 15;
    this.dies = dies;
    this.getknockBack = 0;
  }
  initModel() {
    this.model = new SunFlowerModel(this);
  }
  getInputs() {
    if(this.dies)
      if(this.life--<=0)this.die();
    if(!this.evil)return;
    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;
    var ds = Math.abs(dx)+Math.abs(dy);
    if(ds<100) {
      this.model.becomeEvil();
    }
    if(ds<50&&this.invul<=0) {
      player.collide(this);
    }
  }
}