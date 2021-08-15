class Rect {
  constructor(x,y,w,h,color) {
    this.x=x;this.y=y;
    this.w=w;
    this.h=h;
    this.color = color;
  }
  draw() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x-this.w/2,this.y-this.h/2,this.w,this.h);
  }
}

class Circle {
  constructor(x,y,r,color) {
    this.x=x;this.y=y;this.r=r;this.color=color;
  }
  draw(override) {
    if(override&&override.color)canvas.fillStyle=override.color;
    else canvas.fillStyle = this.color;
    var r = this.r;
    if(override&&override.dw) {
      r+=override.dw;
    }
    var dx =0;
    var dy =0;
    if(override) {
      if(override.dx)dx=override.dx;
      if(override.dy)dy=override.dy;
    }
    canvas.beginPath();
    canvas.arc(this.x+dx,this.y+dy,r,0,Math.PI*2);
    canvas.fill();
  }
}

class ImageDrawable {
  constructor(image,x,y,w,h) {
    this.image = image;
    this.x=x;this.y=y;this.w=w;this.h=h;
    if(!w&&!h) {
      this.w = image.width;
      this.h = image.height;
    }
    else if(!this.w) {
      this.w = image.width/image.height*this.h;
    }else if(!this.h) {
      this.h = image.height/image.width*this.w;
    }
  }
  draw(override) {
    if(override)return;
    canvas.drawImage(this.image,this.x-this.w/2,this.y-this.h/2,this.w,this.h);
  }
}

class CurveTrail {
  constructor(x1,y1,width,cap,color) {
    this.x1=x1;
    this.y1=y1;
    this.ex = x1;
    this.ey = y1;
    this.mx = x1;
    this.my = y1;
    this.points = [];
    this.length = 3;
    this.points.push([x1,y1]);
    this.width=width;
    this.cap=cap;
    this.color = color;
  }
  setEnd(x,y) {
    this.mx=this.ex;
    this.my=this.ey;
    this.ex+=(x-this.ex)/10;
    this.ey+=(y-this.ey)/10;
  }
  draw(override) {
    if(override&&override.color) canvas.strokeStyle = override.color;
    else canvas.strokeStyle = this.color;
    canvas.lineCap = this.cap;
    var w = this.width;
    if(override&&override.dw) {
      w+=override.dw*2;
    }
    var dx=0;
    var dy =0;
    if(override) {
      if(override.dx) dx += override.dx;
      if(override.dy) dy += override.dy;
    }
    canvas.lineWidth = w;
    canvas.beginPath();
    canvas.moveTo(this.x1+dx,this.y1+dy);
    canvas.quadraticCurveTo(this.mx+dx,this.my+dy,this.ex+dx,this.ey+dy);
    canvas.stroke();
  }
}

class Line {
  constructor(x1,y1,x2,y2,width,cap,color){
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
    this.width=width;
    this.cap=cap;
    this.color=color;
  }
  draw(override) {
    if(override&&override.color) canvas.strokeStyle = override.color;
    else canvas.strokeStyle = this.color;
    canvas.lineCap = this.cap;
    var w = this.width;
    if(override&&override.dw) {
      w+=override.dw*2;
    }
    var dx = 0;
    var dy = 0;
    if(override) {
      if(override.dx) dx=override.dx;
      if(override.dy) dy=override.dy;
    }
    canvas.lineWidth = w;
    canvas.beginPath();
    canvas.moveTo(this.x1+dx,this.y1+dy);
    canvas.lineTo(this.x2+dx,this.y2+dy);
    canvas.stroke();
  }
}

class Limb {
  constructor(x,y,drawable,rotation,ignoresOverride) {
    this.ignoresOverride=ignoresOverride;
    this._x=0;
    this._y=0;
    this.scaleX=1;
    this.scaleY=1;
    this.x=x;this.y=y;
    this.rotation = rotation || 0;
    this._rotation = this.rotation;
    this.drawable = drawable;
    this.before = [];
    this.after = [];
  }
  createBefore(...args) {
    var limb = new Limb(...args);
    limb.parent = this;
    limb.model = this.model;
    this.before.push(limb);
    return limb;
  }
  createAfter(...args) {
    var limb = new Limb(...args);
    limb.parent = this;
    limb.model = this.model;
    this.after.push(limb);
    return limb;
  }
  draw(override) {
    if(override&&this.ignoresOverride)return;
    canvas.save();
    canvas.translate(this.x+this._x,this.y+this._y);
    if(this.rotation)canvas.rotate(this.rotation);
    canvas.scale(this.scaleX,this.scaleY);
    this.before.forEach(function(e){e.draw(override)});
    if(this.drawable)this.drawable.draw(override);
    this.after.forEach(function(e){e.draw(override)});
    canvas.restore();
  }
}