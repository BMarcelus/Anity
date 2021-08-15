class CheeseburgerJohnson extends Platformer {
  constructor(x,y) {
    super(x,y,20,40,"red");
  }
  initModel(w,h,c) {
    this.model = new CheeseburgerJohnsonModel(this);
  }
  setScene(scene) {
    scene.specialActors.cheeseburgerJohnson = this;
    this.scene=scene;
  }
}