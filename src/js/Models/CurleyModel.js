class CurleyModel extends PlatformerModel{
  constructor(parent) {
    super(40,40,"black",parent);
    this.head.drawable = new ImageDrawable(IMAGES.CurleysHead,0,-5,20);
    this.body.scaleX = 2;
    this.body.scaleY = 2;
    // this.foot1.drawable = null;
    // this.foot2.drawable = null;
    this.hand1.drawable.color = "#0ad";
    this.hand2.drawable.color = "#0ad";

    // this.foot1.drawable.y2=20;
    this.foot1.drawable.width=2;
    // this.foot2.drawable.y2=20;
    this.foot2.drawable.width=2;
    this.outlineColor = "#0df";

    // this.body.before.push(this.head);
    // this.body.after.splice(this.body.after.indexOf(this.head),1);
    this.addShoes();
  }
}