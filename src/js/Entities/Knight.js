class Knight extends Platformer {
  constructor(x,y) {
    super(x,y,20,80,"brown");
    // color = "#0af";
    this.speed = 1;
    this.mx = -1;
    this.jumpStrength = 5;
    this.wallJumps = false;
    this.wallSlide = false;
    this.attackTimer = 40;
    this.attackSpeed = 80;
    this.hitSound = SOUNDS.enemyHit2;
    this.prepped = false;
  }
  setScene(scene) {
    this.scene=scene;
    scene.specialActors.knight = this;
  }
  getInputs() {
    if(this.grounded&&!this.scene.collides(this.x+this.dx*10,this.y+this.h/2+10)) {
      this.mx = -this.mx;
    }
    if(this.grounded&&this.wallColliding) {
      this.mx = -this.mx;
    }
    // if(this.wallColliding) {
    //   this.jump();
    // }
    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;

    var ds = Math.abs(dx)+Math.abs(dy)*.8;
    var range = 45;
    var ddx = dx>0?1:-1;
    if(this.model.attacking) {
      range = 100;
    }
    if(this.mx) {
      this.tdx = this.mx>0?1:-1;
    }
    if(ds<300||this.prepped) {
      this.attackTimer--
      this.tdx = dx>0?1:-1;  
      if(this.attackTimer <=0) {
        this.attack();
        this.vx = ddx * 10;
        this.vy = -5;
        this.attackTimer = this.attackSpeed;
        this.prepped = false;
      } else if(this.attackTimer<this.attackSpeed/4) {
        this.model.prepAttack();
        this.prepped = true;
        // this.mx = 0;

      } else {
        this.mx = dx<0?-1:1;
      }
    }
    if(ds<range&&this.invul<=0) {
      if(this.model.attacking) {
        player.getHit(this);
        player.vx += this.mx * 10;
      } else {
        player.collide(this);
      }
    }
  }
  // getHit(other) {
  //   super.getHit(other);
  //   this.attackTimer = this.attackSpeed;
  // }
  initModel(w,h,color) {
    this.model = new StickModel(w,h,color, this);
  }
}