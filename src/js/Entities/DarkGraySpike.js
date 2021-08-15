class GraySpike extends Platformer {
  constructor(x,y) {
    super(x,y,40,80,"#444");
    this.speed = 3;
    this.mx = 1;
    this.maxHealth =
    this.health = 120;
    this.knockBack = 0.1;
    this.getknockBack = 0.1;
    this.isBossin = false;
    this.lightDraw = null;
    this.wallJumps = false;
    this.grav = 0.75;
    this.heal = 0;
    this.pushFlip = 0;
  }
  getHit(other) {
    var dx = other.x-this.x;
    super.getHit(other);
    dx = dx>0?1:-1;
    if(this.pushFlip%2==1) {
      other.vx += 10*dx;
    }
    this.pushFlip ++;
  }
  setScene(scene) {
    this.scene= scene;
    this.scene.specialActors.darkGraySpike = this;
    this.scene.enemyCount++;
  }
  die() {
    if(!this.dead) {
      SOUNDS.enemyHit2.play();
      this.dead= true;
      this.happy = false;
      this.model.update();
      this.speed = 0;
      this.passedOut = true;

      // super.die();
      this.scene.enemyCount--;
    }
  }
  initModel() {
    this.model = new DarkGraySpikeModel(this);
  }
  update() {
    super.update();
    if(this.isBossin) {
      // this.getInputs = this.getInputs1;
      // this.isBossin = false;
      this.getInputs1();
      this.scene.ambient = 'rgba(255,255,255,0.5)';

    }
  }
  getInputs1() {
    if(this.dead)return;
    // if(this.grounded&&!this.scene.collides(this.x+this.dx*10,this.y+this.h/2+10)) {
    //   this.mx = -this.mx;
    // }
    if(this.grounded&&this.wallColliding) {
      this.mx = -this.mx;
      this.jump();
    }

    if(frameCount%40==0) {
      this.scene.addEntity(new Sunflower(this.x,this.y, true));
      SOUNDS.pop.play();
    }

    var player = this.scene.player;
    if(!player)return;
    var dx = Math.abs(player.x-this.x);
    var dy = Math.abs(player.y-this.y);
    var ds = dx+dy;
    if(this.vy>0) {
      this.jump();
    }

    if(ds<100&&this.invul<=0) {
      player.collide(this);
    }
  }
}