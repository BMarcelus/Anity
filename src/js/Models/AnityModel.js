class AnityModel extends Model {
  constructor(parent) {
    super(parent);
    var size = 50;
    var icon = new ImageDrawable(IMAGES.AnityArrow, 0,0,null,size);
    this.arrows = [];
    for(var i=0;i<3;i++) {
      var angle = i * Math.PI*2/3;
      var l = this.createLimb(0,0,null, angle);
      this.arrows.push(l.createAfter(0,size/2,icon,Math.PI));
    }
    this.t = 0;
  }
  flip() {
    this.flipping = true;
  }
  update() {
    if(!this.flipping) return;
    this.t ++;
    var t = this.t;
    this.arrows.forEach(function(e) {
      if(e.rotation>0) {
        e.rotation -= 0.001*t;
      } else {
        e.rotation = 0;
      }
    })
  }
}