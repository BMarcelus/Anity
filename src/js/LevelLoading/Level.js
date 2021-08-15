class Level {
  constructor(level) {
    var matrix = level.m;
    var tileset = level.t || 0;
    this.level = level;
    this.tileSetIndex = tileset;
    this.tileSet = LEVELS.getTileSet(tileset);
    this.matrix = matrix;
    this.rows = matrix.length;
    this.cols = matrix[0].length;
    this.cellWidth = this.cellHeight = 44;
    this.width = this.cols * this.cellWidth;
    this.height = this.cellHeight * this.rows;
    this.image = document.createElement('canvas');
    this.image.width = this.cols*this.cellWidth;
    this.image.height = this.rows*this.cellHeight;
    this.ctx = this.image.getContext('2d');
    this.cellsLength = 16+LEVELS.entitiesList.length;
    this.editor = false;
    this.drawBake();
  }
  reMake() {
    var matrix = this.matrix;
    this.rows = matrix.length;
    this.cols = matrix[0].length;
    this.width = this.cols * this.cellWidth;
    this.height = this.cellHeight * this.rows;
    this.image.width = this.cols*this.cellWidth;
    this.image.height = this.rows*this.cellHeight;
    this.drawBake();
  }
  preProcess(game) {
    for(var i=0;i<this.cols;i++) {
      for(var j=0;j<this.rows;j++) {
        var tileIndex = this.matrix[j][i];
        var x = (i+0.5)*this.cellWidth;
        var y = (j+0.5)*this.cellHeight;
        if(this.tileSetIndex==1&&(tileIndex==2||tileIndex==3)) {
          game.addEntity(new FakeSpikeTrigger(x,y));
        }
        if(tileIndex == 4||tileIndex==5) {
          game.addEntity(new LightSouce(x,y,this.tileSet.lightColor));
          // this.addEntity(new Exit(i*this.level.cellSize, j*this.level.cellSize));
          // this.addEntity(player = new Player(i*this.level.cellSize, j*this.level.cellSize));
          // this.camera.x = player.x;
          // this.camera.y = player.y;
        }
        if(tileIndex == 8) {
          game.camera.x=
          game.player.x = x;
          game.camera.y=
          game.player.y = y;
        }
        if(tileIndex>=LEVELS.entitiesIndex) {
          var e = LEVELS.getEntity(tileIndex);
          game.addEntity(new e.e(x,y));
        }
      }
    }
  }
  getTile(x,y) {
    if(y<0)return 0;
    if(x>=this.cols) {
      return 0;
    }
    if(x<0||y<0||y>=this.rows) {
      return 1;
    }
    return this.matrix[y][x];
  }
  isAir(tile,x,y,tx,ty,entity) {
    if(this.tileSetIndex != 0) {
      if(tile==5) return false;
      if(tile==9 ) return false;
      if(tile==2) return true;
      if(tile==3) return true;
      if(tile==13) return false;
    }
    if(tile==1|tile==2||tile==3)return false;
    if(tile==7 && entity) {
      if(y-entity.vy <= ty*this.cellHeight) return false;
    }
    return true;
    // if(tile>=LEVELS.entitiesIndex)return true;
    // return tile%4==0;
  }
  collides(x,y,entity) {
    var tx = Math.floor(x/this.cellWidth);
    var ty = Math.floor(y/this.cellHeight);
    var tile = this.getTile(tx,ty);
    if(this.isAir(tile,x,y,tx,ty,entity))return 0;
    // var dx = x%this.cellWidth;
    // var dy = y%this.cellHeight;
    // if(y%this.cellHeight<x%this.cellWidth)return 0;

    return {cell:tile,x:tx,y:ty};
  }
  standOn(cell,entity) {
    return cell.cell;
  }
  wallCollideWith(cell,entity) {
    return cell.cell;
  }
  update(){}
  setTile(x,y,value) {
    if(x<0||x>=this.cols)return;
    if(y<0||y>=this.rows)return;
    this.matrix[y][x]=value;
    this.drawBake();
  }
  drawCell(ctx,cell,x,y,w,h,i,j) {
    if(cell==8&&!this.editor)return;
    if(cell>=LEVELS.entitiesIndex) {
      if(this.editor) {
        var e = LEVELS.getEntity(cell).forDraw;
        e.x=x+w/2;
        e.y=y+h/2;
        var can = canvas;
        canvas = ctx;
        e.draw();
        canvas = can;
      }
      return;
    }
    var tileset = this.tileSet.image;
    ctx.drawImage(tileset,cell%4*22,(cell>>2)*22,22,22,x,y,w,h);
    // var v = cell*100 % 255;
    // var color = `rgb(${v},${v},${v})`;
    // canvas.fillStyle = color;
    // canvas.fillRect(x,y,w,h);
    // canvas.beginPath();
    // canvas.moveTo(x,y);
    // canvas.lineTo(x,y+h);
    // canvas.lineTo(x+w,y+h);
    // canvas.lineTo(x,y);
    // canvas.fill();
    // canvas.fillStyle = 'grey';
    // var ds = [[-1,0],[1,0],[0,1],[0,-1]];
    // for(var k=0;k<ds.length;k++) {
    //   var di = ds[k][0];
    //   var dj = ds[k][1];
    //   if(this.getTile(i+di,j+dj)!=cell) {
    //     var mw = w/4+!di*w*3/4;
    //     var mh = h/4+!dj*h*3/4;
    //     canvas.fillRect(x+w/2+di*(w/2-mw/2)-mw/2,y+h/2+dj*(h/2-mh/2)-mh/2,mw,mh);
    //   }
    // }
  }
  drawBake() {
    var canvas = this.ctx;
    canvas.imageSmoothingEnabled = false;
    canvas.mozImageSmoothingEnabled=false;
    canvas.msImageSmoothingEnabled = false;
    canvas.oImageSmoothingEnabled=false;
    canvas.webkitImageSmoothingEnabled=false;
    var w = this.cellWidth;
    var h = this.cellWidth;
    canvas.fillStyle = 'white';
    for(var i=0;i<this.rows;i++) {
      for(var j=0;j<this.cols;j++) {
        var cell = this.matrix[i][j];
        var x = j*w;
        var y = i*h;
        this.drawCell(canvas,0,x,y,w,h,j,i);
        if(cell==0)continue;
        this.drawCell(canvas,cell,x,y,w,h,j,i);
      }
    }
  }
  draw() {
    canvas.drawImage(this.image,0,0);
  }
}

function testMatrix() {
  var rows = 32;
  var cols = 64;
  var matrix = [];
  for(var i=0;i<rows;i++) {
    var row = [];
    for(var j=0;j<cols;j++) {
      var x = j>>1;
      var y = i>>0;
      var b = (x*x+y*y+x*y+x+y)%(17)>>3;
      row.push(b);
    }
    matrix.push(row);
  }
  return matrix;
}