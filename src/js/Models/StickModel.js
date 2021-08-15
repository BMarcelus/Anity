class StickModel extends Model {
  constructor(w,h,color,parent) {
    super(parent)
    this.w=w;this.h=h;
    this.color=color;
    
    var lw = h/20;
    var hr = h/8;
    var bl = h*.4;
    var ll = (h-bl-hr*2)/2;
    var al = bl/2;
    var sl = h*6/10;
    this.ll=ll;
    this.bl = bl;
    this.al = al;
    this.sl = sl;
    this.attacking = false;
    this.attackSound = SOUNDS.enemyAttack;
    this.body = this.createLimb(0,h/2-ll*2,new Line(0,0,0,-bl,lw,'round',color));
    this.head = this.body.createAfter(0,-bl,new Circle(0,-hr,hr,color));
    this.face = this.head.createAfter(0,-hr, new ImageDrawable(IMAGES.daniHelm, 0,0,null,hr*3.4));
    // this.trail = this.head.createBefore(0,-hr*2, new CurveTrail(0,0,10,'round', 'red'));
    // this.face = this.head.createAfter(0,-5);
    // this.eye1 = this.face.createAfter(-2,0,new Circle(0,0,2,'white'));
    // this.eye2 = this.face.createAfter(4,0,new Circle(0,0,2,'white'));
    this.thigh1= this.body.createBefore(0,0,new Line(0,0,0,ll,lw,'round',color),Math.PI/8);
    this.calf1 = this.thigh1.createAfter(0,ll,new Line(0,0,0,ll,lw,'round',color),-Math.PI/8);
    this.thigh2= this.body.createBefore(0,0,new Line(0,0,0,ll,lw,'round',color),-Math.PI/8);
    this.calf2 = this.thigh2.createAfter(0,ll,new Line(0,0,0,ll,lw,'round',color),Math.PI/8);
    this.arm1 = this.body.createAfter(0,-bl+lw,new Line(0,0,0,al,lw,'round',color),Math.PI/10);
    this.forearm1 = this.arm1.createAfter(0,al,new Line(0,0,0,al,lw,'round',color),Math.PI/4);
    this.arm2 = this.body.createAfter(0,-bl+lw,new Line(0,0,0,al,lw,'round',color),-Math.PI/10);
    this.forearm2 = this.arm2.createAfter(0,al,new Line(0,0,0,al,lw,'round',color),Math.PI/20);
    this.sword = this.forearm1.createAfter(0,al,new ImageDrawable(IMAGES.daniSword, 0,-sl/2+lw,null,sl),Math.PI);
    this.limbs = [
      this.thigh1,this.thigh2,this.calf1,this.calf2,this.arm1,this.arm2,this.forearm1,this.forearm2,
      this.body,this.head,
      // this.sword,
      // this.trail
    ];

    this.thigh1.lx=0;
    this.thigh2.lx=0;
    this.sword.lx=0;
    this.limbs.forEach(e=>{
      // e.offset=Math.random()*10;
      // e.frq = Math.random();
      e.dr=0;
      // e.rotation += (Math.random()-0.5)*Math.PI
    })
    this.dr=0;
    this.body._vy = 0;
  }
  wallCollide(){}
  land(){}
  jump(){
    // this.arm1.dr += 1;
  }
  doubleJump() {
    this.body.rotation += Math.PI*this.parent.dx;
    // this.body.dr += this.parent.dx*10;
  }
  groundedUpdate() {
    var ll1 =
    Math.cos(this.body.rotation+this.thigh1.rotation)*this.ll+
    Math.cos(this.body.rotation+this.thigh1.rotation+this.calf1.rotation)*this.ll;
  var lx1 = 
    Math.sin(this.body.rotation+this.thigh1.rotation)*this.ll+
    Math.sin(this.body.rotation+this.thigh1.rotation+this.calf1.rotation)*this.ll;

  var ll2 =
    Math.cos(this.body.rotation+this.thigh2.rotation)*this.ll+
    Math.cos(this.body.rotation+this.thigh2.rotation+this.calf2.rotation)*this.ll;
  var lx2 = 
    Math.sin(this.body.rotation+this.thigh2.rotation)*this.ll+
    Math.sin(this.body.rotation+this.thigh2.rotation+this.calf2.rotation)*this.ll;

  var ll3 = 
    Math.cos(this.body.rotation+Math.PI)*this.bl +
    Math.cos(this.body.rotation+this.arm1.rotation)*this.al+
    Math.cos(this.body.rotation+this.arm1.rotation+this.forearm1.rotation)*this.al+
    Math.cos(this.body.rotation+this.arm1.rotation+this.forearm1.rotation+this.sword.rotation+Math.PI)*this.sl;
  var lx3 = 
    Math.sin(this.body.rotation+Math.PI)*this.bl +
    Math.sin(this.body.rotation+this.arm1.rotation)*this.al+
    Math.sin(this.body.rotation+this.arm1.rotation+this.forearm1.rotation)*this.al+
    Math.sin(this.body.rotation+this.arm1.rotation+this.forearm1.rotation+this.sword.rotation+Math.PI)*this.sl;

  var dx1 = this.thigh1.lx - lx1;
  var dx2 = this.thigh2.lx - lx2;
  var dx3 = this.sword.lx - lx3;
  this.thigh1.lx = lx1;
  this.thigh2.lx = lx2;
  this.sword.lx = lx3;

  var tl = ll1;
  var tx = dx1;
  var obj = this.thigh1;
  if(ll2>ll1) {
    tl = ll2;
    tx = dx2;
    obj=this.thigh2;
  }
  if(ll3>tl) {
    // tl=ll3;
    // tx = dx3;
    // obj = this.arm1;
    // this.forearm1.dr=0;
    // this.arm1.dr=0;
    this.forearm1.dr += (0.05-this.forearm1.dr)/3;
    // this.arm1.dr += 0.01;
    // this.arm1.rotation += 0.4;
  } 
  obj.dr *= 0.9;


  var tby = (this.ll*2-tl);
  this.parent.vx += -tx/2;
  if(tby<this.body._y) {
    this.body._y += (tby-this.body._y)/1;
    this.body._vy = 0;
  } else {
    this.body._vy += 0.3;
    this.body._y += this.body._vy;
  }
  // this.body._y += (tby-this.body._y)/10;
  }
  walk() {
     // this.sword.rotation = this.parent.dx*Math.PI/2;
    
     
     // this.thigh1._rotation = Math.cos(frameCount*Math.PI/10)*Math.PI/4;
     // this.thigh2._rotation = -Math.cos(frameCount*Math.PI/10)*Math.PI/4;
     this.thigh1.rotation += Math.cos(frameCount*Math.PI/10)*Math.PI/50;
     this.thigh2.rotation -= Math.cos(frameCount*Math.PI/10)*Math.PI/50;

     this.arm1.dr += Math.cos(frameCount*Math.PI/10)*Math.PI/500;
     this.arm2.dr -= Math.cos(frameCount*Math.PI/10+Math.PI/4)*Math.PI/500;
     this.forearm1.dr += this.arm1.dr/50;
     this.forearm2.dr += this.arm2.dr/50;

     this.calf1._rotation = Math.PI/4*this.parent.dx;
     this.calf2._rotation = Math.PI/4*this.parent.dx;
  }
  swingLimbs() {
    this.limbs.forEach(function(e) {
      if(e._rotation>Math.PI*2) {
        e._rotation -= Math.PI*2
      }
      if(e._rotation<-Math.PI*2) {
        e._rotation += Math.PI*2;
      }
      if(e._rotation>Math.PI) {
        e._rotation = e._rotation-Math.PI*2;
      }
      if(e._rotation<-Math.PI) {
        e._rotation = Math.PI*2+e._rotation;
      }
      // e.rotation += (Math.random()-0.5)*0.1;
      // e.rotation += Math.cos(frameCount*Math.PI/10*e.frq+e.offset)*Math.PI/20*wobble;
      var dr = e._rotation-e.rotation;
      if(dr>Math.PI*2) {
        dr -= Math.PI*2
      }
      if(e.rotation<-Math.PI*2) {
        dr += Math.PI*2;
      }
      if(dr>Math.PI) {
        dr = dr-Math.PI*2;
      }
      if(dr<-Math.PI) {
        dr = Math.PI*2+e.rotation;
      }
      e.parent.dr += dr/500;
      e.dr += (dr-e.dr)/50 + e.parent.dr/500;
      var max = Math.PI/5;
      if(e.dr>max) {
        e.dr = max;
      }
      if(e.dr<-max) {
        e.dr=-max;
      }
      e.rotation += e.dr;
      if(e.rotation>Math.PI*2) {
        e.rotation -= Math.PI*2
      }
      if(e.rotation<-Math.PI*2) {
        e.rotation += Math.PI*2;
      }
      if(e.rotation>Math.PI) {
        e.rotation = e.rotation-Math.PI*2;
      }
      if(e.rotation<-Math.PI) {
        e.rotation = Math.PI*2+e.rotation;
      }
      // e.rotation += e.model.parent.vx/20;
    })
    var angle = -this.parent.vx/2;//Math.atan2(this.parent.vy/2,this.parent.vx)+Math.PI/2;
    this.body.rotation += (angle+this.body._vy/100-this.body.rotation)/10;
    this.head.rotation += (-this.body.rotation-this.head.rotation)/10;
  }
  randomize() {
    this.limbs.forEach(function(e) {
      e.rotation += Math.random()*Math.PI*2;
    })
  }
  update() {
    this.face.scaleX = -(this.parent.tdx||this.parent.dx);
    // var ang = Math.atan2(this.parent.vy,this.parent.vx)+Math.PI/2;
    // this.trail.rotation = -this.head.rotation-this.body.rotation;
    // this.trail.drawable.setEnd(-this.parent.vx*3,-this.parent.vy*3+10);
    // this.trail.drawable.x2 += (-this.parent.vx*5-this.trail.drawable.x2)/30;
    // this.trail.drawable.y2 = (-this.parent.vy*5+10-this.trail.drawable.y2)/30;
    this.sword.rotation = Math.PI;
    if(this.attacking) {
      this.attackUpdate();
    }

    this.body._rotation = 0;
    this.head._rotation = 0;
    if(this.moving) {
      this.walk();
    } else {
      this.thigh1._rotation = Math.PI/8;
      this.thigh2._rotation = -Math.PI/8;
      this.calf1._rotation = -Math.PI/8;
      this.calf2._rotation = Math.PI/8;
    }
    if(this.crouching)this.crouch();
    this.swingLimbs();
    if(this.grounded) {
      this.groundedUpdate();
    }
  }
  prepAttack() {
    this.arm1._rotation = Math.PI;
    this.arm1.rotation = Math.PI;
  }
  attack() {
    // this.arm1.dr+=0.4;
    this.attacking=true;
    this.attackSound.play();
    // this.arm1.dr+=0.5;
    // this.arm1._rotation = Math.PI/2;
    this.arm1.dr += this.parent.tdx*1;
    // this.parent.vx += this.parent.dx*10;
    this.outlineColor = '#f00';
    setTimeout(e=>{
      this.outlineColor = '#000';
      this.attacking=false
      this.arm1._rotation = Math.PI/20;
      this.arm1.dr=0;
    },400);
  }
  attackUpdate() {
    // this.arm1.dr = 0.5;
  }
  crouch() {
    var kneel = Math.PI*.3*this.parent.dx;
    this.body._rotation = kneel;
    this.head._rotation = -kneel;
    var knees = Math.PI*.7;
    this.thigh1._rotation = -kneel+knees;
    this.thigh2._rotation = -kneel-knees;
    this.calf1._rotation = -knees;
    this.calf2._rotation = knees;
    // this.limbs.forEach(function(e) {
    //   e.rotation += (e._rotation-e.rotation)/20;
    // });

  }
  draw(x,y) {
    if(this.attacking) {
      // canvas.beginPath();
      // canvas.strokeStyle = "#ffffffaa";
      // canvas.lineCap = 'square';
      // canvas.lineWidth = 30;
      var angle = this.arm1.rotation+this.body.rotation+Math.PI/2+this.forearm1.rotation;
      if(true) {
        canvas.fillStyle = "#ffffffaa";
        canvas.beginPath();
        canvas.arc(x,y,100,angle - 1, angle);
        canvas.arc(x,y,50,angle,angle-1, 1);
        canvas.fill();
      }
      else if(this.lastAngle) {
        var r1 = 50;
        var r2 = 100;
        var cos1 = Math.cos(this.lastAngle);
        var sin1 = Math.sin(this.lastAngle);
        var cos2 = Math.cos(angle);
        var sin2 = Math.sin(angle);
        canvas.beginPath();
        canvas.fillStyle = "#ffffffaa";
        canvas.moveTo(x+cos1*r1,y+sin1*r1);
        canvas.quadraticCurveTo(x+cos1*r2,y+sin1*r2,x+cos2*r2,y+sin2*r2);
        // canvas.lineTo(x+cos2*r2,y+sin2*r2);
        canvas.lineTo(x+cos2*r1,y+sin2*r1);
        canvas.closePath();
        canvas.fill();
      }
      this.lastAngle = angle;
      // this.lastAngle = -Math.PI/2;
      // var mx = Math.cos(angle)*60+x;
      // var my = Math.sin(angle)*60+y;
      // canvas.moveTo(mx,my);
      // if(this.lastX) {
      //   canvas.lineTo(this.lastX,this.lastY);
      // }
      // this.lastX = mx;
      // this.lastY = my;
      // canvas.stroke();
    } else {
      this.lastAngle = null;
    }
    this.drawOutline(x,y);
    super.draw(x,y);
    
  }
}