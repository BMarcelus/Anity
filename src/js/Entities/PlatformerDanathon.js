class SirDanathon extends Platformer {
  constructor(x,y) {
    super(x,y,20,80,"#03a");
  }
  setScene(scene) {
    this.scene=scene;
    scene.specialActors.sirDanathon = this;
  }
  initModel() {
    this.model = new SirDanathonModel(this);
  }
}