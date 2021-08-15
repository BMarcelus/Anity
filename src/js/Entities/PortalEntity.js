class PortalEntity {
  constructor(x,y) {
    this.x=x;this.y=y;
    this.drawable = new ImageDrawable(IMAGES.portal, 0,0,50,50);
    this.rotation = 0;
    this.strength = 0;
    this.timer = 60;
    this.active = false;
    this.strength2=0;
    this.scale = 0.1;
  }
  update() {
    if(frameCount%4==0) {
      var vx = (Math.random()-0.5)*5+2;
      var vy = (Math.random()-0.5)*5;
      var grav = 0;
      var life = 40;
      var x = this.x-vx*25;
      var y = this.y-vy*25;
      this.scene.addEntity(new Particle(x,y,10,10,"purple",vx,vy,life,grav));
    }
    this.scale += (1-this.scale)/20;
    this.rotation += Math.PI/20;
    if(!this.active)return;
    var player = this.scene.specialActors.kwak;
    if(this.timer-->0) {
      player.vx -= 1;
      player.vy -= 1;
      return;
    }
    var cj = this.scene.specialActors.cheeseburgerJohnson;
    cj.mx = -1;
    this.strength += 0.05;
    // player.vx += 1;
    // player.model.moving = true;
    if(this.step2) {
      this.strength2 += 0.05;
      player.vx = (this.x-player.x)/100*this.strength2;
      player.vy += (this.y-player.y)/200*this.strength2;
    }
    cj.vx += (this.x-cj.x)/200*this.strength;
    cj.vy += (this.y-cj.y)/500*this.strength;
    if(cj.x>this.x) {
      cj.shouldDelete =true;
    }
  }
  setScene(scene) {
    scene.specialActors.portalEntity = this;
    this.scene=scene;
  }
  draw() {
    canvas.save();
    canvas.translate(this.x,this.y);
    canvas.rotate(this.rotation);
    canvas.scale(this.scale,this.scale);
    this.drawable.draw();
    canvas.restore();
  }
}