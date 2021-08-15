class DroneModel extends Model {
  constructor(parent) {
    super(parent);
    this.body = this.createLimb(0,0,new ImageDrawable(IMAGES.drone, 0,0,50));

    // this.face = this.top.createAfter(w/2,-h/16);
    // this.face.createAfter(-w/8,0,new Circle(0,0,w/20,'white'));
    // this.face.createAfter(w/8,0,new Circle(0,0,w/20,'white'));
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
  draw(...args) {
    // var sx = this.scaleX;
    // if(this.parent.dx<0) {
    //   this.scaleX = -1;
    // }
    // if(this.parent.dx<0)this.scaleX = -1;
    // else this.scaleX = 1;
    if(this.parent.dx>0)
      this.scaleX = -1;
    else
      this.scaleX = 1;
      super.draw(...args);
    // this.scaleX = sx;
  }
}