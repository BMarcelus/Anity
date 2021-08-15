class PlatformerModel extends Model {
  constructor(w,h,color,parent, al) {
    super(parent);
    this.w=w;this.h=h;this.color=color;   
    this.moving = false;
    this.grounded = false;
    this.moveLocked = false;
    // this.body = this.createLimb(0,0,10,h*.8,color);
    // this.head = this.body.createAfter(0,-10,20,20,color);
    // this.foot1 = this.body.createBefore(-5,h/2-4,8,8,color);
    // this.foot2 = this.body.createBefore(5,h/2-4,8,8,color);
    // this.arm1 = this.body.createBefore(-5,4,8,8,color);
    // this.arm2 = this.body.createBefore(5,4,8,8,color);
    // this.eye1 = this.head.createAfter(0,0,4,4,"white");

    var ll = h/2-12;
    this.ll=ll;
    var al = al||7;

    this.body = this.createLimb(0,0,new Line(0,-5,0,10,10,'round',color));
    this.head = this.body.createAfter(0,-5,new Circle(0,-5,10,color));
    // this.body.createAfter(-10,0,new CheeseburgerJohnsonModel(40,40,this));
    this.face = this.head.createAfter(0,-5);
    this.eye1 = this.face.createAfter(-3,0,new Circle(0,0,2,'white'));
    this.eye2 = this.face.createAfter(3,0,new Circle(0,0,2,'white'));
    this.foot1= this.body.createBefore(0,12,new Line(0,0,0,ll,4,'round',color),Math.PI/10);
    this.foot2= this.body.createBefore(0,12,new Line(0,0,0,ll,4,'round',color),-Math.PI/10);
    this.arm1 = this.body.createAfter(-5,1,new Line(0,0,0,al,4,'round',color),Math.PI/4);
    this.arm2 = this.body.createAfter(5,1,new Line(0,0,0,al,4,'round',color),-Math.PI/4);
    this.hand1 = this.arm1.createAfter(0,al+1,new Circle(0,0,3,color));
    this.hand2 = this.arm2.createAfter(0,al+1,new Circle(0,0,3,color));

    // var grd = canvas.createRadialGradient(0,0,0,0,0,50);
    // grd.addColorStop(0,"#00aadd55");
    // grd.addColorStop(1,"#00aadd00");
    // this.shoe1.createAfter(0,5,new Circle(0,0,50,grd),0,1);
    // this.shoe2.createAfter(0,5,new Circle(0,0,50,grd),0,1);
    this.attackSound = SOUNDS.attack;
    this.cooldownTimer = 0;
    this.cooldownTime = 15;
    this.head.scaleX = 1.5;
    this.head.scaleY = 1.5;
  }
  addShoes() {
    if(this.shoe1)return;
    this.shoe1 = this.foot1.createAfter(0,this.ll,new ImageDrawable(IMAGES.Boot,0,0,10));
    this.shoe2 = this.foot2.createAfter(0,this.ll,new ImageDrawable(IMAGES.Boot,0,0,10));
  }
  crouch() {
    var dx = this.parent.dx;
    var d = 2;
    var br = Math.PI*.4;
    this.body._rotation = br*dx;
    this.body._y += (Math.sin(br)*10-this.body._y)/d;
    this.foot1._rotation = (-br-Math.PI/4)*dx;
    this.foot2._rotation = (-br+Math.PI/4)*dx;
    this.arm1._rotation = -br*dx;
    this.arm2._rotation = -br*dx;
    this.head._rotation = -br*dx;
    this._rotation = 0;
    this.head._y += (5-this.head._y)/d;
    // this.head._x += (8*dx-this.head._x)/d;


    this.rotation += (this._rotation-this.rotation)/d;
    this.head.rotation += (this.head._rotation-this.head.rotation)/d;
    this.foot1.rotation += (this.foot1._rotation-this.foot1.rotation)/d;
    this.foot2.rotation += (this.foot2._rotation-this.foot2.rotation)/d;
    this.arm1.rotation += (this.arm1._rotation-this.arm1.rotation)/d;
    this.arm2.rotation += (this.arm2._rotation-this.arm2.rotation)/d;
    this.body.rotation += (this.body._rotation-this.body.rotation)/d;

    // this.idle();
    // this.rotation = 0;
    // this.foot1.rotation = Math.PI/10;
    // this.foot2.rotation=-Math.PI/10;
    // this.arm1.rotation = Math.PI/10;
    // this.arm2.rotation=-Math.PI/10;
    // this.head._y = Math.cos(frameCount*Math.PI/40)*2;
    // this.body.rotation = 0;
    // this.head.rotation = 0;
    
    // // this.body._y += (this.h/2-2-this.body._y)/2;
    this.scaleY += (1-this.scaleY)/2;
    this.scaleX += (1-this.scaleX)/2;
    // this.body._y = (1-this.scaleY)*this.h;
  }
  attack() {
    if(this.attacking)return;
    if(this.cooldownTimer>0)return;
    this.attackSound.play();
    this.doubleJumping=false;
    this.parent.wallColliding = false;
    this.attacking = true;
    var dx = this.parent.dx;
    this.idle();
    this.rotation = 0;
    this.body.rotation = -Math.PI/4*dx;
    this.head.rotation = -this.body.rotation/2;
    this.foot1.rotation = -Math.PI/2*dx-this.body.rotation;
    this.foot2.rotation = -Math.PI/2*dx-this.body.rotation;
    this.foot1.scaleY = 2;
    this.foot2.scaleY = 2;
    if(dx>0) {
      this.foot1._y=5;
    } else {
      this.foot2._y=5;
    }
    this.attackTimer = 15;
  }
  attackEnd() {
    this.attacking =false;
    this.foot1.scaleY = 1;
    this.foot2.scaleY = 1;
    this.foot1._y=0;
    this.foot2._y=0;
  }
  attackUpdate() {
    this.attackTimer --;
    if(this.attackTimer<=0) {
      this.attackEnd();
    }
    this.scaleX=1;
    this.scaleY=1;
    var t = this.attackTimer/15;
    if(this.attackTimer<14&&this.attackTimer>1) {
      this.parent.vx = this.parent.dx*30*t;
      this.parent.vy = 1;
    } else {
      this.parent.vx = 0;
      this.parent.vy = 0;
    }
  }
  idle() {
    this.rotation = 0;
    if(this.wallColliding) {
      this.body._x = (1-this.scaleX)*this.w/2;
    } else {
      this.body._x=0;
    }
    if(this.grounded) {
      this.body._y = (1-this.scaleY)*this.h/2;
    } else {
      this.body._y=0;
    }
    this.scaleY += (1-this.scaleY)/7;
    this.scaleX += (1-this.scaleX)/7;
    this.foot1.rotation = Math.PI/10;
    this.foot2.rotation=-Math.PI/10;
    this.arm1.rotation = Math.PI/10-Math.cos(frameCount*Math.PI/40)*Math.PI/40;
    this.arm2.rotation=-Math.PI/10+Math.cos(frameCount*Math.PI/40)*Math.PI/40;
    this.head._y = Math.cos(frameCount*Math.PI/40)*1;
    this.body.rotation = 0;
    this.head.rotation = 0;
    var bd = Math.cos(frameCount*Math.PI/40+0.1);
    this.body._y += bd;
    this.foot1._y =-bd;
    this.foot2._y =-bd;

    if(this.wallColliding) {
      var dx = this.parent.dx;
      var arm = this.arm1;
      if(dx>0)arm=this.arm2;
      arm.rotation = -dx*Math.PI*.9;
    }
  }
  walk() {
    this.idle();
    // this.scaleX = 1+Math.sin(frameCount*Math.PI/10)*.1;
    // this.scaleY = 1-Math.sin(frameCount*Math.PI/10)*.1;
    this.rotation = Math.cos(frameCount*Math.PI/10)*Math.PI/20;
    var frq = frameCount*Math.PI/10;
    this.foot1.rotation = Math.cos(frq)*Math.PI/4;
    this.foot2.rotation = -Math.cos(frq)*Math.PI/4;
    this.arm1.rotation = -Math.cos(frq)*Math.PI/4;
    this.arm2.rotation = Math.cos(frq)*Math.PI/4;
    this.body.rotation = Math.PI/100*this.parent.vx;
    this.head.rotation = -this.body.rotation;
  }
  airborn() {
    if(this.ceilingCollide){
      this.body._y = -(1-this.scaleY)*this.h/2;
    } else {
      this.body._y=0;
    }
    // this.idle();
    // this.rotation = this.parent.vy/20;
    var ds = Math.abs(this.parent.vy)/40/2;
    this.scaleY += (1+ds-this.scaleY)/10;
    this.scaleX += (1-ds-this.scaleX)/10;
    // var angle = Math.atan2(Math.abs(this.parent.vy),this.parent.vx/2)+Math.PI/2;
    // if(this.parent.vy<10)
      this._rotation = this.parent.vx/20*this.parent.vy/10;
    // else
      // this._rotation = 0;
    this.foot1._rotation = Math.PI/3-this.parent.vy/30;
    this.foot2._rotation = -this.foot1._rotation;
    this.arm1._rotation = Math.min(this.parent.vy/20,Math.PI*.4)+Math.PI/3;
    this.arm2._rotation = -this.arm1._rotation;
    this.head._rotation = 0;
    this.body.rotation = 0;

    if(this.wallColliding) {
      var dx = this.parent.dx;
      var arm = this.arm1;
      if(dx>0)arm=this.arm2;
      arm._rotation = -dx*Math.PI*.9;
      this.head._rotation += -Math.PI/8*dx;
    }

    var d = 2;
    this.rotation += (this._rotation-this.rotation)/d;
    this.head.rotation += (this.head._rotation-this.head.rotation)/d;
    this.foot1.rotation += (this.foot1._rotation-this.foot1.rotation)/d;
    this.foot2.rotation += (this.foot2._rotation-this.foot2.rotation)/d;
    this.arm1.rotation += (this.arm1._rotation-this.arm1.rotation)/d;
    this.arm2.rotation += (this.arm2._rotation-this.arm2.rotation)/d;
  }
  land() {
    if(this.parent.passedOut) {
      SOUNDS.pop.play();
    }
    this.scaleY = .8;
    this.scaleX = 1.2+Math.abs(this.parent.vy)/20;
    this.doubleJumping = false;
  }
  wallCollide() {
    this.doubleJumping = false;
    var d = Math.abs(this.parent.vx)/30;
    if(this.attacking) {
      this.parent.vy = -4;
      this.parent.vx += -this.parent.dx*10;
      this.parent.wallColliding = false;
      if(this.parent.jumpCount==0) {
        this.parent.jumpCount = 1;
      }
      this.cooldownTimer = this.attackTimer+3;
    }
    this.attackEnd();
    this.scaleX = 1-d;
    this.scaleY = 1+d;
  }
  jump() {
    this.scaleY = 2;
    this.scaleX = .5;
  }
  doubleJumpUpdate() {
    this.doubleJumpTimer--;
    if(this.doubleJumpTimer<=0) {
      this.doubleJumping = false;
    }
    var dx = this.parent.dx;
    var t = this.doubleJumpTimer/20;
    this.arm1.rotation = 0;
    this.arm2.rotation = 0;
    this.foot1.rotation = Math.PI/2*dx;
    this.foot2.rotation = Math.PI/2*dx;
    this.head.rotation = Math.PI/2*dx;
    t = t*t;
    this.rotation = -t*Math.PI*2*dx;
  }
  doubleJump() {
    this.doubleJumping = true;
    this.doubleJumpTimer = 20;
    this.scaleX = 1;
    this.scaleY = 1;
  }
  passedOut() {
    this.body.rotation = -Math.PI*.3;
      this.body._y = 20;
      this.head.rotation = -Math.PI/20;
      // this.arm1.rotation = Math.PI;
  }
  update() {
    this.moveLocked = this.attacking;
    if(this.cooldownTimer>0) this.cooldownTimer--;
    if(this.parent.passedOut) {
      this.passedOut();
      return;
    }
    if(this.attacking) {
      this.attackUpdate();
      return;
    }
    if(!this.grounded) {
      if(this.doubleJumping) {
        this.doubleJumpUpdate();
      } else {
        this.airborn();
      }
    }
    else if(this.crouching) {
      this.crouch();
    }
    else if(this.moving&&!this.wallColliding) {
      this.walk();
    } else {
      this.idle();
    }
    this.faceUpdate();
    if(this.shoe1) {
      this.shoe1.rotation = -this.foot1.rotation/2;
      this.shoe2.rotation = -this.foot2.rotation/2;
    }
  }
  faceUpdate() {
    this.face._x += Math.round((this.parent.dx*5-this.face._x)/3);
  }
  draw(x,y) {
    // canvas.strokeRect(x-this.w/2,y-this.h/2,this.w,this.h);
    this.drawOutline(x,y);
    super.draw(x,y);
  }
}