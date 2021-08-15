class NPC extends Platformer {
  constructor(x,y,model) {
    super(x,y,20,40,"white");
    this.mmodel = model;
    this.initModel(2000,0,this.color);
    this.mx = -1;
    this.jumpStrength=9;
  }
  initModel(w,h,color) {
    if(this.mmodel) {
      this.model = new this.mmodel(w,h,color,this);
    }
  }
  update() {
    super.update();
    if(this.wallColliding) {
      this.mx = -this.mx;
      if(this.grounded)
        this.jump();
    }
  }
}