class MenuScene extends Scene {
  constructor() {
    super();
    this.addEntity(new TextUI("Thanks For Playing!", CE.width/2,CE.height/2, 30, {
      textAlign: 'center',
    }));
  }
  update() {
    
  }
}