//  Copyright Brian Dizon 2019

var gamepadConfig = {
  leftBumper: 4,
  A: 0,
  B: 1,
  start: 8,
  select: 9,
}

window.addEventListener('load', function(e) {
  Buttons.menuSelect = {
    keys: [32,74,13],
    buttons: [gamepadConfig.A],
  }
  Buttons.A = {
    keys: [74,32,90],
    buttons: [0],
    touchButtons: [0],
  }
  Buttons.B = {
    keys: [16,75,88],
    buttons: [gamepadConfig.B],
    touchButtons: [1],
  },
  Buttons.start = {
    keys: [73,27],
    buttons: [gamepadConfig.start]
  },
  Buttons.select = {
    keys: [79],
    buttons: [gamepadConfig.select]
  },
  Buttons.cheatForward = {
    keys: [67,78],
    allKeys: true,
  },
  Buttons.cheatBackward = {
    keys: [67,66],
    allKeys: true,
  },
  Buttons.chapterSkip = {
    keys: [67,77],
    allKeys: true,
  }
})
