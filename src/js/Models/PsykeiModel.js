class PsykeiModel extends PlatformerModel {
  constructor(parent) {
    super(30,60,"#0a0",parent, 12);
    this.head.drawable = new ImageDrawable(IMAGES.PsykeiHead, 5,-15,40);
    this.face.y-=15;
    this.face.x=10;
    this.addShoes();
    this.staff = this.hand1.createAfter(0,0,new ImageDrawable(IMAGES.PsykeiStaff, 0,0,null,100),-Math.PI*.6);
    this.eye1.drawable.color = 'red';
    this.eye2.drawable.color = 'red';
  }
  faceUpdate() {
    this.head.scaleX = 1;
    // super.faceUpdate();
    if(this.parent.dx<0) {
      this.head.scaleX = -1;
      // this.face._x = -this.face._x+10;
    }
    //this.parent.dx<0?-1:1;
    this.arm1.rotation = Math.PI/2;
  }
  attack() {
    if(this.attacking)return;
    this.arm1.rotation = Math.PI/2;
    this.staff.rotation = Math.PI;
    this.attacking = true;
    SOUNDS.attack.play();
  }
}