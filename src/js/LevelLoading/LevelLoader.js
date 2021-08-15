function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function emptyMatrix(rows,cols) {
  var m = [];
  for(var i=0;i<rows;i++) {
    var row = []
    for(var j=0;j<cols;j++) {
      row[j]=0;
    }
    m.push(row);
  }
  return m;
}

var LEVELS = {
  levelMap: {},
  levels: [],
  entitiesIndex: 16,
  getEntity: function(cell) {
    var i = cell-this.entitiesIndex;
    if(i<0||i>=this.entitiesList.length)return null;
    return this.entitiesList[i];
  },
  getTileSet: function(ind) {
    this.tileSets = [
      {image: IMAGES.tilesetPortalRoom, ambient: "#00000000", lightColor: "#00ffddff"},
      {image: IMAGES.tilesetCurleys, ambient: "#ffffffaa", lightColor: "#00ddffff"},
      {image: IMAGES.tilesetVents, ambient: "#00000000",lightColor: "#aaff00ff"},
      {image: IMAGES.tilesetOutside, ambient: "#ffffffff",lightColor: "#ffaa00ff"},
      {image: IMAGES.tilesetLab, ambient: "#ffffff77",lightColor: "#ffaa00ff"},
    ];
    return this.tileSets[ind%this.tileSets.length];
  },
  promptLevel: function() {
    var name;
    var str = "Load";
    while(name==null) {
      name = prompt(str);
      if(name==''||name==null||name=="cancel") return null;
      console.log(name);
      console.log(this.levelMap);
      var level = this.levelMap[name];
      if(level) {
        return new Level(level);
      }
      name = null;
      str = "Load: Not Found"
    }
  },
  newLevel: function() {
    var name;
    var str = "name";
    while(name==null) {
      name = prompt(str);
      if(name==''||name==null||name=="cancel") return null;
      if(this.levelMap[name]) {
        name = null;
        str = "name: Must be Unique"
      }
    }
    var tileSet = prompt("tileset");
    var level = {
      v: 0,
      name: name,
      t: tileSet,
      m: emptyMatrix(16,32),
    }
    this.add(level);
    return new Level(level);
  },
  getLevelByName: function(name) {
    return this.levelMap[name];
  },
  add: function(level) {
    this.levelMap[level.name] = level;
    this.levels.push(level);
    return level;
  },
  stringify: function(level) {
    var matrix = level.m;
    var name = level.name;
    var t = level.t||0;
    var string = 'setTimeout(function(){LEVELS.add({v:0,name:"'+name+'",t:'+t+',m:[\n';
    var rows = matrix.length;
    var cols = matrix[0].length;
    for(var j=0;j<rows;j++) {
      string+='[';
      for(var i=0;i<cols;i++) {
        var value = matrix[j][i];
        string+=value+',';
      }
      string+='],\n';
    }
    string+=']})},0);\n';
    return string;
  },
  export: function(level) {
    download(level.name+'.ALEVEL.js', this.stringify(level));
  }
}

window.addEventListener('load', function(e) {
  LEVELS.entitiesList= [
    CheeseburgerJohnson,
    Curley,
    Chomper,
    Knight,
    Boots,
    Psykei,
    Jabroski,
    Drone,
    SirDanathon,
    GraySpike,
    Boss,
    Sunflower,
  ].map(function(e) {
    return {e: e, forDraw: new e(0,0)}
  });
});
