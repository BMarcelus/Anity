class JabroskiModel extends PlatformerModel {
  constructor(parent) {
    super(30,40,"black", parent);
    this.body.drawable.color = "#22a";
    this.face.y -= 5;
    this.face.drawable = new ImageDrawable(IMAGES.JabroskiHead, 0,0,40);
    this.face.after = [];
    this.mouthClosed = IMAGES.JabroskiMouthClosed;
    this.mouthChewing = IMAGES.JabroskiMouthChewing;
    this.mouth = this.face.createAfter(0,0,new ImageDrawable(IMAGES.JabroskiMouthChewing,0,0,40));
  }
  faceUpdate() {
    this.face.scaleX = this.parent.dx<0?-1:1;
    if(this.parent.isTalking) {
      this.mouth.scaleX = 1+Math.cos(frameCount*Math.PI/20)*.3;
      this.mouth.scaleY = 1+Math.sin(frameCount*Math.PI/20)*.3;
      this.mouth.drawable.image = this.mouthChewing;
    } else {
      this.mouth.drawable.image = this.mouthClosed;
    }
  }
  idle() {
    super.idle();
    if(this.parent.isLounging) {
      this.body.rotation = -Math.PI/4;
      this.body._y = 10;
      this.head.rotation = Math.PI/6;
      this.arm1.rotation = Math.PI/2;
    }
  }
}