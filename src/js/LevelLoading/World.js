var World = {
  index: 0,
  levelList: [],
  getNextLevel(level) {
    var ind;
    if(level) {
      if(level.level.index == undefined) return null;
      ind = level.level.index +1;
      if(ind == this.levelList.length){
        MainDriver.setScene(new JsScene(new BDScene(new MenuScene)));
      }
    } else {
      ind = this.index;
    }
    var level = LEVELS.getLevelByName(this.levelList[ind]);
    if(level) {
      level.index = ind;
    }
    return level;
  },
  getPrevLevel(level) {
    var ind;
    if(level) {
      ind = level.level.index -1;
    } else {
      ind = this.index;
    }
    var level = LEVELS.getLevelByName(this.levelList[ind]);
    level.index = ind;
    return level;
  }
}

function addLevelList(name,list) {
  World.levelList.push(...list);
}
addLevelList("Curleys", [
    // "CurleyFall",
    "CurleyCloset",
    "CurleyStairs",
    "CurleyHallway",
    "BootPickup",
    "CurleyJump",
    "CurleyDoubleJump",
    "CurleyStuck",
    "CurleySpikePit",
    "CurleyShortJump",
    "CurleyFallJump",
    "CurleySpikeFake",
    "CurleyAttack",
    "CurleyAttack2",
    "CurleyCongrats",
]);
addLevelList("Vents", [
  "VentsEntrance",
  "VentsEavesdrop1",
  "VentsEavesdrop2",
  "VentsFall",
]);
addLevelList("Outside", [
  "TowerFall",
  "WakeUp"
]);
addLevelList("Jabroski", [
  "Drones2",
  "Core"
  //deliver this letter to grayspike, he can get you in. hes pretty cool
  //Sir Danathon can get you a ride closer
]);
addLevelList("Keep", [
  "Drawbridge",
  "Drawbridge2",
  "Dungeon",
  "Dungeon2",
  "ThroneRoom",
  "Catapult",
])
addLevelList("DarkGraySpike" , [
  "FlowerTrail",
  "FlowerTime",
  // "iimosPit", //goth butterfly
    //that Dark gray prick? yeah cuz he went all crazy, I can't get to my stuff
    //cuz of all the weird shadows
    //A dude needs his stuff dude
    //You can't see the shadows dude?
    //hey, I guess if I help you see the shadows, you can help me get to my stuff.
    //simply point the wiimote at the screen and iimo will reveal where you point
      //(or just use your mouse)
  "reconciliation"
])
addLevelList("Lair", [
  "AnityEntrance",
  "Lair",
  "Lair2",
  "BossHall",
  "Boss",
  "Cage",
  "Win",
  "worldPan",
]);