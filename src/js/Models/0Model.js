class Model {
  constructor(parent) {
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.parent = parent;
    this.parts = [];
    this.outlineColor = "black";
  }
  update(){}
  createLimb(x,y,drawable,rotation) {
    var limb = new Limb(x,y,drawable,rotation);
    limb.parent=this;
    limb.model=this;
    this.parts.push(limb);
    return limb;
  }
  draw(x,y) {
    canvas.save();
    canvas.translate(x,y);
    canvas.rotate(this.rotation);
    canvas.scale(this.scaleX,this.scaleY);
    // canvas.strokeRect(-this.w/2,-this.h/2,this.w,this.h);
    this.parts.forEach(function(e) {
      e.draw();
    });
    canvas.restore();
  }
  drawOutline(x,y) {
    var color = this.outlineColor;
    canvas.save();
    canvas.translate(x,y);
    canvas.rotate(this.rotation);
    canvas.scale(this.scaleX,this.scaleY);
    // canvas.strokeRect(-this.w/2,-this.h/2,this.w,this.h);
    this.parts.forEach(function(e) {
      e.draw({color: color, dw: 1});
    });
    canvas.restore();
  }
  drawHighlight(x,y) {
    canvas.save();
    canvas.translate(x,y);
    canvas.rotate(this.rotation);
    canvas.scale(this.scaleX,this.scaleY);
    // canvas.strokeRect(-this.w/2,-this.h/2,this.w,this.h);
    this.parts.forEach(function(e) {
      e.draw();
      e.draw({color: "#ffffff88", dw: -2,dx:1,dy:-1});
    });
    canvas.restore();
  }
}