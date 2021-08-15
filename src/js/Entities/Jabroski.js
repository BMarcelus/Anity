class Jabroski extends Platformer {
  constructor(x,y) {
    super(x,y,20,40,"#03a");
    this.isLounging = true;
  }
  setScene(scene) {
    this.scene=scene;
    scene.specialActors.jabroski = this;
  }
  initModel() {
    this.model = new JabroskiModel(this);
  }
}