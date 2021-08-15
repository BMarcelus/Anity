class DarkGraySpikeModel extends PlatformerModel {
  constructor(parent) {
    super(20,40,"#111", parent);
    this.face.after = [];
    this.body.scaleX = 2;
    this.body.scaleY = 2;
    this.happy = IMAGES.DarkGraySpikeHead
    this.evil = IMAGES.DarkGrayHead;
    this.face.drawable = new ImageDrawable(this.evil, 0,-10, 40);
  }
  faceUpdate() {
    this.face.scaleX = this.parent.dx<0?-1:1;
    if(this.parent.happy) {
      this.face.drawable.image = this.happy;
    } else {
      this.face.drawable.image = this.evil;
    }
  }
}