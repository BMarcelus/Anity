class LevelEditorScene extends Scene {
  constructor(level,x,y) {
    super();
    this.level = this.addEntity(level);
    this.level.editor = true;
    this.camera = {
      x:x||0,y:y||0
    }
    this.LightMask = createScreenCanvas();
    this.zoom = 1;
    this.controls = [
      ["zoom in",e=>{this.zoom+=.1},84,'T'],
      ["zoom out",e=>{this.zoom-=.1},71,'G'],
      ["Eyedrop",e=>{this.selectedIndex = this.level.getTile(this.tx,this.ty)},65,'A'],
      ["Cycle Block",e=>{this.selectedIndex += 1},87,'W'],
      ["Cycle Block Back",e=>{this.selectedIndex += this.level.cellsLength-1},83,'S'],
      ["Export",e=>{LEVELS.export(this.level.level)},186,';'],
      ["Play Test",e=>{
        this.level.editor = false;
        this.level.drawBake();
        var s;
        MainDriver.setScene(s=new GameScene(this.level,this));
        s.camera.x = 
        s.player.x = this.camera.x;
        s.camera.y = 
        s.player.y = this.camera.y;
        s.player.addShoes();
      },80,'P'],
      ["Open Level",e=>{
        var level = LEVELS.promptLevel();
        if(level)MainDriver.setScene(new LevelEditorScene(level))
      },79,'O'],
      ["New Level",e=>{
        var level = LEVELS.newLevel();
        if(level)MainDriver.setScene(new LevelEditorScene(level))
      },78,'N'],
      ["Add Row Top",this.addRowTop.bind(this),73,"I"],
      ["Add Col Left",this.addColLeft.bind(this),74,"J"],
      ["Add Row Bot",this.addRowBot.bind(this),75,"k"],
      ["Add Col Right",this.addColRight.bind(this),76,"L"],
    ]
    this.keyBuffer = [];
    this.selectedIndex = 0;
  }
  update() {
    super.update();
    this.selectedIndex %= this.level.cellsLength;
    if(keys[32]) {
      this.drag();
    } else {
      this.undrag();
    }
    if(mouse.held) {
      if(mouse.y<=88) this.pick();
        else
      this.onHeld();
    }
    for(var i=0;i<this.controls.length;i++){
      var c = this.controls[i];
      if(keys[c[2]]&&this.keyBuffer[c[2]]==0) {
        c[1].call(this);
      }
      this.keyBuffer[c[2]] = keys[c[2]]
    }
    if(mouse.y>88) {
      this.highlightTile();
    } else {
      this.highlight = null;
    }
  }
  addRowTop() {
    var row = [];
    for(var i=0;i<this.level.cols;i++) {
      row[i]=0;
    }
    this.level.matrix.unshift(row);
    this.level.reMake();
  }
  addColLeft() {
    for(var i=0;i<this.level.rows;i++) {
      this.level.matrix[i].unshift(0);
    }
    this.level.reMake();
  }
  addRowBot() {
    var row = [];
    for(var i=0;i<this.level.cols;i++) {
      row[i]=0;
    }
    this.level.matrix.push(row);
    this.level.reMake();
  }
  addColRight() {
    for(var i=0;i<this.level.rows;i++) {
      this.level.matrix[i].push(0);
    }
    this.level.reMake();
  }
  pick() {
    if(mouse.y<=44) {
      this.selectedIndex = mouse.x/44>>0;
    } else {
      var e = (mouse.x/44>>0);
      if(e<LEVELS.entitiesList.length) {
        this.selectedIndex = e+LEVELS.entitiesIndex;
      }
    }
  }
  onHeld() {
    this.level.setTile(this.tx,this.ty,this.selectedIndex);
  }
  drag() {
    if(!this.dragStart) {
      this.dragStart = {x: mouse.x, y:mouse.y};
    }
    if(!this.lastDrag) {
      this.lastDrag = {x: mouse.x, y:mouse.y};
    } else {
      var dx = mouse.x - this.lastDrag.x;
      var dy = mouse.y - this.lastDrag.y;
      this.camera.x -= dx;
      this.camera.y -= dy;
      this.lastDrag = {x: mouse.x, y:mouse.y};
    }
  }
  undrag() {
    this.dragStart = null;
    this.lastDrag = null;
  }
  highlightTile() {
    var cx = this.camera.x-CE.width/2;
    var cy = this.camera.y-CE.height/2;
    var tx = (mouse.x+cx) / this.zoom / this.level.cellWidth >>0;
    var ty = (mouse.y+cy) / this.zoom / this.level.cellHeight >>0;
    this.tx = tx;
    this.ty = ty;
    var wx = tx*this.level.cellWidth;
    var wy = ty*this.level.cellHeight;
    this.highlight = {
      x: wx, y: wy,
      w: this.level.cellWidth,h: this.level.cellHeight,
    };
  }
  draw() {
    canvas.save();
    canvas.translate(CE.width/2-this.camera.x,CE.height/2-this.camera.y);
    canvas.scale(this.zoom,this.zoom);
    this.entities.forEach(e=>e.draw());
    if(this.highlight) {
      canvas.fillStyle = '#00000055';
      canvas.fillRect(this.highlight.x,this.highlight.y,this.highlight.w,this.highlight.h);
    }
    canvas.restore();

    this.level.drawCell(canvas, this.selectedIndex, mouse.x,mouse.y,20,20,0,0);

    canvas.fillStyle = 'black';
    canvas.fillRect(0,0,CE.width,88);

    for(var i=0;i<LEVELS.entitiesIndex;i++) {
      var w = 44;
      var h = 44;
      var x = i *w;
      var y = 0;
      this.level.drawCell(canvas, i, x,y,w,h,0,0);
    }
    for(var i=0;i<LEVELS.entitiesList.length;i++) {
      var w = 44;
      var h = 44;
      var x = i *w;
      var y = h;
      this.level.drawCell(canvas, i+LEVELS.entitiesIndex, x,y,w,h,0,0);
    }
  }
}