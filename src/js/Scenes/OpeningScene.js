class SpinningPortal {
  constructor() {
    this.image = new ImageDrawable(IMAGES.portal, 0,0,CE.width*1.4);
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.x = CE.width/2;
    this.y = CE.height/2;
  }
  update() {
    this.rotation += Math.PI/100;
    this.scaleX = 1.2+ 0.1*Math.cos(frameCount*Math.PI/80);
    this.scaleY = this.scaleX;
  }
  draw() {
    canvas.save();
    canvas.translate(this.x,this.y);
    canvas.rotate(this.rotation);
    canvas.scale(this.scaleX,this.scaleY);
    this.image.draw();
    canvas.restore();
  }
}

class SpinningModel {
  constructor(angle,r,size,model) {
    this.model = new model(this);
    this.model.moving = true;
    this.vx = 10;
    this.angle = angle;
    this.r=r;
    size += r/90;
    this.scaleX = size;
    this.scaleY = size;
  }
  update() {
    var dx = Math.cos(this.angle);
    var dy = Math.sin(this.angle);
    this.x = CE.width/2 + dx * this.r;
    this.y = CE.height/2 + dy * this.r;
    this.angle += Math.PI/40;
    this.vy = dx*10;
    this.vx = dy*10;
    this.dx=1;
    this.model.moving = true;
    this.model.update();
    if(this.r>0)
    this.r -= 0.9;
    this.scaleX = this.scaleY = this.scaleX-0.01;
    if(this.scaleX<=0) this.shouldDelete = true;
  }
  draw() {
    canvas.save();
    canvas.translate(this.x,this.y);
    canvas.scale(this.scaleX,this.scaleY);
    this.model.draw();
    canvas.restore();
  }
}

class PortalSwirl extends Scene {
  constructor() {
    super();
    this.addEntity(new SpinningPortal());
    this.addEntity(new SpinningModel(0, 300, 1, PlayerModel));
    this.addEntity(new SpinningModel(1, 100, 1, CheeseburgerJohnsonModel));
    // this.addEntity(new SpinningModel(2, 400, 1, CurleyModel));
    // this.addEntity(new SpinningModel(3, 500, 1, SirDanathonModel));
    // this.addEntity(new SpinningModel(4, 600, 1, JabroskiModel));
    // this.addEntity(new SpinningModel(5, 700, 1, DarkGraySpikeModel));
    this.timer = 7.5*60;
    // SOUNDS.portalMusic.play();
    // MusicHandler.stop();
    MusicHandler.playMusic(SOUNDS.portalMusic);
  }
  update() {
    if(this.timer--<=0||getButtonDown(Buttons.chapterSkip)) {
      MusicHandler.stop();
      MainDriver.setScene(new GameScene()), 10000
    }
    super.update();
  }
  collides() {
    return false;
  }
}

class OpeningScene extends Scene {
  constructor() {
    super();
    this.addEntity(this.gameScene = new GameScene(new Level(LEVELS.getLevelByName("PortalRoom"))));
    this.addEntity(this.dialogueController = new DialogueController(openingSceneData(this.gameScene),this.gameScene));
    this.gameScene.player.canAttack = false;
    MusicHandler.playMusic(SOUNDS.dramaticMusic);
    // this.gameScene.player.getInputs = function() {
    //   if(this.x>500)this.mx = -1;
    //   if(this.x<400)this.mx = 1;
    // }
  }
  update() {
    super.update();
    if(DEV&&keys[67]&&keys[78]) {
      MainDriver.setScene(new PortalSwirl());
    }    
  }
}
SCENES = {
  portal: PortalSwirl
};
function openingSceneData(game) {
CHARACTERS = {
  Computer: {
    name: "Computer",
    talkSound: SOUNDS.computerTalk
  },
  Kwak: {
    name: "Nib",
    obj: game.specialActors.kwak,
    talkSound: SOUNDS.playerTalk,
  },
  Johnson: {
    name: "Cheeseburger Johnson",
    obj: game.specialActors.cheeseburgerJohnson,
    talkSound: SOUNDS.johnsonTalk,
  },
  Door: {
    name: "Door",
    obj: {
      x: 300,
      y: 376
    }
  }
}
  return [
    {set :{inputBlocked: true}, entity: 'kwak'},
    {waitFor: 20},
    {set :{mx: 1}, entity: 'kwak'},
    {waitFor: 30},
    {set :{mx: 0}, entity: 'kwak'},
{dialogue: true, text: "Alirght, Johnson. Lets get out of here", person: CHARACTERS.Kwak},
{dialogue: true, text: "...", person: CHARACTERS.Johnson},
{dialogue: true, text: "Calculating Stability Offset", person: CHARACTERS.Computer},
{person: CHARACTERS.Door, particles: {num: 10, color: "brown"}},
{dialogue: true, text: "*Crash", sound: SOUNDS.oneCrash, screenShake: 5, person: CHARACTERS.Door},
{dialogue: true, text: "Ugg we don't have enough time", person: CHARACTERS.Kwak},
{set :{mx: 1}, entity: 'kwak'},
{waitFor: 20},
{set :{mx: 0}, entity: 'kwak'},
{dialogue: true, text: "I'll calculate it myself", person: CHARACTERS.Kwak, sound: SOUNDS.keyboardSounds1},
{dialogue: true, text: "Uhh are you sure about this, Nib?", person: CHARACTERS.Johnson},
{person: CHARACTERS.Door, particles: {num: 10, color: "brown"}},
{dialogue: true, text: "*Crash", sound: SOUNDS.oneCrash, screenShake: 5, person: CHARACTERS.Door},
{dialogue: true, text: "Computer, Initialize Manual Override Control!", person: CHARACTERS.Kwak,sound: SOUNDS.keyboardSounds1},
{dialogue: true, text: "Initializing Manual OC self-insertion protocol", person: CHARACTERS.Computer},
{spawn: PortalEntity, tx:17,ty:8, sound: SOUNDS.portalSwish, target: true,},
{dialogue: true, text: "Dimensional Portal initialized Succefully", person: CHARACTERS.Computer},
{dialogue: true, text: "*WARNING INSTABILITY DETECTED", person: CHARACTERS.Computer, sound: SOUNDS.warning},
{dialogue: true, text: "*DIMENSIONAL COORDINATES UNSTABLE", person: CHARACTERS.Computer},
{set: {active: true}, entity: "portalEntity", sound: SOUNDS.blowImpact, screenShake: 7},
{dialogue: true, text: "AHH", person: CHARACTERS.Johnson},
{waitForProximity: true, e1: "portalEntity", e2: 'cheeseburgerJohnson', r: 50},
{set: {step2: true}, entity: "portalEntity", sound: SOUNDS.portalSwish, screenShake: 7},
{set: {mx: 1}, entity: "kwak"},
{dialogue: true, text: "Johnson!", person: CHARACTERS.Kwak, doNotWait:true},
{waitForProximity: true, e1: "portalEntity", e2: 'kwak', r: 40},
{sceneTransition: true, scene: SCENES.portal}
  ]
}

// portalSceneData = [
//   {dialogue: true, text: "*WARNING STABILITY COMPROMISED*", person: CHARACTERS.Computer},
//   {dialogue: true, text: "DIMENSIONAL ANOMALY DETECTED", person: CHARACTERS.Computer},
//   {dialogue: true, text: "Johnson!", person: CHARACTERS.Kwak},
// ]

// crashSceneData = [
//   {dialogue: true, text: "Johnson!", person: CHARACTERS.Kwak},
//   {questTrigger: true, goal: "Find Johnson"},
// ]

// Goals = [
//   "Find Johnson",
//   "Blend In, and Gather Info",
//   "Rescue Johnson",
//     "Fix Dimensional Anomalies",
//     "Gain the Support of Anity Influencers",
//       "Help Jabroski To the AI Core",
//         // machine learning thinks it can predict you. Pick a door style tricks
//       "Find Sir Danathon",
//         "Get to Sir Danathon's Castle",
//         // Psykei Interferes
//         // Palette swap
//         "Find Sir Danathon",
//       "Find Dark GreySpike",
//         // Get iimo bill
//           // detect kaiso and alt dimension shit
//   "Confront Anity",
//     // The Game Is A Liar
    
// ]