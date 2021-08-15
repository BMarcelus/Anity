
class GameScene extends Scene {
  constructor(level, prev) {
    super();
    if(level) {
      this.addEntity(this.level = level);
    } else {
      this.addEntity(this.level = new Level(LEVELS.getLevelByName("CurleyHallway")));
      this.addEntity(this.level = new Level(World.getNextLevel()));
    }
    this.addEntity(this.player = new Player(100,100));
    // this.addEntity(new Knight(100,-100));
    // this.addEntity(new NPC(2100,0, CurleyModel));
    // this.addEntity(new Curley(2100,0));
    // this.addEntity(new Chomper(2200,0));
    this.camera = {
      x:0,y:0,
      target: this.player,
      zoom:1,
    };
    this.doLighting = true;
    this.screenShake = 0;
    this.LightMask = createScreenCanvas();
    this.dialogueController = new DialogueController(null,this);
    this.preProcessLevel();
  }
  dialogueProcess(name) {
    var dialogue = GetDialogueData(this,name);
    if(dialogue) {
      this.dialogueController.setSequence(dialogue);
    } else {
      this.dialogueController.setSequence([{}]);
    }
  }
  preProcessLevel() {
    this.enemyCount = 0;
    this.level.preProcess(this);
    this.ambient = this.level.tileSet.ambient;
    this.dialogueProcess(this.level.level.name);
  }
  wallCollideWith(cell,entity) {
    return this.level.wallCollideWith(cell,entity);
  }
  standOn(cell,entity) {
    return this.level.standOn(cell,entity);
  }
  collides(...args) {
    return this.level.collides(...args);
  }
  update() {
    super.update();
    if(DEV&&getButtonDown(Buttons.chapterSkip)) {
      this.level.level.index += 10;
      this.loadNextLevel();
    }
    if(DEV&&getButtonDown(Buttons.cheatForward)) {
      this.loadNextLevel();
    }
    if(DEV&&getButtonDown(Buttons.cheatBackward)) {
      this.loadPrevLevel();
    }
    if(keys[69]&&DEV) {
      MainDriver.setScene(new LevelEditorScene(this.level,this.player.x,this.player.y));
    }
    var target = this.camera.target;
    var tvx = target.vx||0;
    var tx = target.x + tvx*5;
    var ty = target.y;
    if(!this.dialogueController.done) {
      ty += CE.height/20;
    }
    this.camera.x += Math.floor((tx-this.camera.x)/10);
    this.camera.y += Math.floor((ty-this.camera.y)/10);
    
    var targetZoom = 1/(1+Math.abs(this.player.vx)/100);
    // this.camera.zoom += (targetZoom-this.camera.zoom)/100;

    var screenw = CE.width/2/this.camera.zoom;
    var screenh = CE.height/2/this.camera.zoom;
    if(this.camera.x-screenw < 0) {
      this.camera.x = screenw;
    }
    if(this.camera.y-screenh<0) {
      this.camera.y = screenh;
    }
    if(this.camera.x+screenw > this.level.width) {
      this.camera.x = this.level.width - screenw;
    }
    if(this.camera.y+screenh> this.level.height) {
      this.camera.y = this.level.height-screenh;
    }

    if(this.player.y>this.level.cellHeight*this.level.rows) {
      this.player.die();
    }
    if(this.screenShake>.001) {
      this.screenShake -= 0.1;
      var r = this.screenShake * 2;
      this.camera.x += Math.cos(frameCount*Math.PI/7)*r;
      this.camera.y += Math.cos(frameCount*Math.PI/13)*r;
      this.camera.rotation = Math.cos(frameCount*19)*Math.PI/200*this.screenShake;
    } else {
      this.camera.rotation = 0;
    }
    if(this.player.x>this.level.width) {
      this.loadNextLevel()
    }
    this.dialogueController.update(); 
  }
  loadLevel(level) {
    this.entities = [];
    // this.player.inputBlocked = false;
    var x = this.player.x;
    var y = this.player.y;
    this.addEntity(this.level = new Level(level));
    this.addEntity(this.player = new Player(x,y));
    this.camera.target = this.player;
    if(this.level.level.index>3) {
      this.player.addShoes();
    }
    this.preProcessLevel();
  }
  loadNextLevel() {
    var nextLevel = World.getNextLevel(this.level);
    if(nextLevel) {
      this.loadLevel(nextLevel);
    }
  }
  loadPrevLevel() {
    var nextLevel = World.getPrevLevel(this.level);
    this.loadLevel(nextLevel);
  }
  draw() {
    var ctx = this.LightMask.canvas;
    ctx.clearRect(0,0,CE.width,CE.height);
    canvas.save();
      canvas.translate(CE.width/2,CE.height/2);
      canvas.rotate(this.camera.rotation);
      canvas.scale(this.camera.zoom,this.camera.zoom);
      canvas.translate(-this.camera.x,-this.camera.y);
      super.draw();
    canvas.restore();
    if(this.doLighting) {
      var zoom = this.camera.zoom;
      var cx =CE.width/2-this.camera.x;
      var cy =CE.height/2-this.camera.y;
      this.entities.forEach(function(e) {
        if(e.lightDraw) {
          e.lightDraw(ctx,cx,cy,zoom);
        }
      })
      // var ambient = "#ffffffaa";    
      var ambient = this.ambient;
      ctx.fillStyle = ambient;
      ctx.fillRect(0,0,CE.width,CE.height)
      canvas.globalCompositeOperation = "destination-in";
      canvas.drawImage(this.LightMask.CE, 0,0);
      canvas.globalCompositeOperation = "source-over";
    }
    this.dialogueController.draw();
  }
  respawn() {
    // this.player.health = this.player.maxHealth;
    // this.player.shouldDelete = false;
    this.loadLevel(this.level.level);
    this.camera.target = this.player;
    this.camera.x = this.player.x;
    this.camera.y = this.player.y;
  }
}