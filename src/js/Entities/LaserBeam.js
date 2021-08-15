class LaserBeam {
  constructor(x,y,vx, life) {
    this.w = 20;
    this.h = 8; 
    this.x=x;this.y=y;this.vx=vx;
    this.life=life;
  }
  update() {
    this.x += this.vx;
    this.life --;
    if(this.life<=0) {
      this.shouldDelete = true;
    }
    var player = this.scene.player;
    if(!player)return;
    var dx = Math.abs(player.x-this.x);
    var dy = Math.abs(player.y-this.y);
    if(dx<5+player.w/2 && dy<2+player.h/2) {
      player.getHit(this);
      this.shouldDelete = true;
    }
  }
  draw() {
    canvas.fillStyle = 'red';
    canvas.fillRect(this.x-this.w/2,this.y-this.h/2,this.w,this.h);
  }
}