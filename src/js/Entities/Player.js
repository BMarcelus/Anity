class Player extends Platformer {
  constructor(x,y) {
    super(x,y,20,40,'darkgray');
    // this.canAttack = false;
    this.outlineColor = "black";
    this.invulTime = 40;
    window.parent.player = this;
  }
  addShoes() {
    this.model.addShoes();
    this.canAttack = true;
  }
  initModel() {
    this.model = new PlayerModel(this);
  }
  onJump() {
    SOUNDS.jump.play();
  }
  onDoubleJump() {
    SOUNDS.jump2.play();
  }
  
  setScene(scene) {
    scene.specialActors.kwak = this;
    this.scene=scene;
  }
  getInputs() {
    this.model.outlineColor = this.outlineColor;
    if(this.inputBlocked)return;
    // if(this.scene.dialogueController.simpleDialogue.text&&!this.scene.dialogueController.current.done) {
      // this.mx = 0;return;
    // }
    var axes = getAxes();
    this.mx = axes.inputX;
    var axesDown = getAxesDown();
    if(axesDown.inputY<0) {
      this.jump();
    }
    if(axesDown.inputY>0) {
      this.crouch();
    }
    if(axes.inputY >= 0) {
      this.unjump();
    }
    this.crouching = axes.inputY > 0;
    if(getButtonDown(Buttons.B)) {
      this.attack();
    }
    if(keys[82]) {
      this.die();
    }
  }
  die() {
    if(this.shouldDelete)return;
    super.die();
    SOUNDS.blowImpact.play();
    setTimeout(e=>
      this.scene.respawn(), 1000);
  }
}