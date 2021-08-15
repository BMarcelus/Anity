class PlayerModel extends PlatformerModel {
  constructor(parent) {
    super(20,40,"darkgray",parent);
    this.arm1.createAfter(-2,2,new Line(0,0,0,5,"round",5,"black"));
  }
  draw(x,y){
    super.draw(x,y);
    if(this.parent.waterMark) {
      canvas.textAlign = 'center';
      canvas.fillStyle = 'black';
      canvas.font = '15px Arial';
      canvas.fillText("OC do not steal",x,y);
    }
  }
}