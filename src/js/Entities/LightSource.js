class LightSouce {
  constructor(x,y,color){
    this.r = 400;
    var grd = canvas.createRadialGradient(0,0,0,0,-100,this.r);
    grd.addColorStop(0,color);
    grd.addColorStop(1,"#00000000");
    this.color = grd;
    this.x = x;
    this.y = y;
  }
  update(){}
  draw(){
    canvas.save();
    canvas.globalAlpha=0.1;
    canvas.translate(this.x,this.y);
    canvas.beginPath();
    canvas.fillStyle = this.color;
    canvas.arc(0,0,this.r,0,Math.PI*2);
    canvas.fill();
    canvas.restore();
  }
  lightDraw(ctx,cx,cy,zoom) {
    ctx.save();
    ctx.translate(this.x+cx,this.y+cy);
    ctx.scale(zoom,zoom);
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(0,0,this.r*1.5,0,Math.PI*2);
    ctx.fill();
    ctx.restore();
  }
}