class Particle {
  constructor(x,y,w,h,color,vx,vy,life,grav) {
    this.x=x;this.y=y;this.color=color;
    this.w=w;this.h=h;
    this.vx=vx;
    this.vy=vy;
    this.grav=grav||0;
    this.maxLife=
    this.life=life;
  }
  update() {
    this.vy += this.grav;
    this.x+=this.vx;
    this.y+=this.vy;
    this.life--;
    if(this.life<=0) {
      this.shouldDelete = true;
    }
  }
  draw() {
    canvas.fillStyle = this.color;
    // canvas.fillRect(this.x-this.w/2,this.y-this.h/2,this.w,this.h);
    canvas.globalAlpha = this.life/this.maxLife;
    canvas.beginPath();
    canvas.arc(this.x,this.y,this.w/2,0,Math.PI*2);
    canvas.fill();
    canvas.globalAlpha = 1;
  }
}