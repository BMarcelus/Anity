class SunFlowerModel extends Model {
  constructor(parent) {
    super(parent);
    var w = 40;
    var h = 40;
    this.happy = new ImageDrawable(IMAGES.sunflower,0,0,w);
    this.evil = new ImageDrawable(IMAGES.evilSunflower,0,0,w*1.5)
    this.body = this.createLimb(0,0,this.happy);
    this.isEvil = false;
  }
  becomeEvil() {
    if(this.isEvil)return;
    SOUNDS.evilFlower.play();
    this.isEvil = true;
    this.body.drawable = this.evil;
    this.scaleX = 0.5;
    this.scaleY = 0.5;
  }
  update() {
    var d = this.parent.vy/40 || 0;
    d+=Math.cos(frameCount*Math.PI/40)/10;
    this.scaleX += (1-d-this.scaleX)/10;
    this.scaleY += (1+d-this.scaleY)/10;
    if(this.crouching&&this.grounded) this.crouch();
    if(this.grounded) {
      if(this.scaleY<1)
        this.body._y = (1-this.scaleY)*this.h;
      else
        this.body._y = (1-this.scaleY)*this.h/4;
    } else if(this.ceilingCollide) {
      this.body._y = -(1-this.scaleY)*this.h;
    } else {
      this.body._y=0;
    }
    // this.face._x = this.parent.dx*2;
    this.rotation = Math.cos(frameCount*Math.PI/10)*Math.PI/20*this.parent.vx/this.parent.speed;
  }
  crouch() {
    this.scaleY = 0.5;
    this.scaleX = 1.5;
  }
  jump() {
    this.scaleY = 2;
    this.scaleX = .5;
  }
  doubleJump() {
    this.scaleY = 2;
    this.scaleX = .5;
  }
  wallCollide() {
    var d = Math.abs(this.parent.vx)/30;
    this.scaleX = 1-d;
    this.scaleY = 1+d;
  }
  attack() {

  }
  land() {
    this.scaleY = .8;
    this.scaleX = 1.2+Math.abs(this.parent.vy)/20;
  }
}