//  Copyright Brian Dizon 2019

SOUNDASSETS='Assets/sounds/';

SOUNDS.dramaticMusic = new SoundTag('Dramatic.wav', 1,1);
SOUNDS.portalMusic = new SoundTag('PortalSong.wav', 1,1);
SOUNDS.curleyMusic = new SoundTag('CurleysSong.wav', 1,0.3);
SOUNDS.portalSwish = new SoundTag('portalNoise1.wav', 1,1);
SOUNDS.chewing = new SoundTag('Chewing2.wav', 1,1);
SOUNDS.crash = new SoundTag('3Crashes.wav', 1,1);
SOUNDS.oneCrash = new SoundTag('1Crash.wav', 1,1);
SOUNDS.warning = new SoundTag('WarningSoundShort.wav', 1,1);
SOUNDS.jump = new SoundTag('swish1.wav', 1,1);
SOUNDS.swishLong = new SoundTag('swish1.wav', 0.8,1);
SOUNDS.jump2 = new SoundTag('swish2.wav', 1,1);
SOUNDS.attack = new SoundTag('hwah.wav', 1,1);
SOUNDS.enemyAttack = new SoundTag('hwah.wav', 2,1);
SOUNDS.keyboardSounds1 = new SoundTag('keyboardSounds1.wav', 1,1);
SOUNDS.keyboardSounds2 = new SoundTag('keyboardSounds2.wav', 1,1);
SOUNDS.blowImpact = new SoundTag('blowImpact.wav', 1,1);
SOUNDS.pickup = new SoundTag('onHover.wav',2,2);
SOUNDS.hit = new SoundTag('swish1.wav',2,2);
SOUNDS.glassBreak = new SoundTag('GlassBreak.wav',1,1);
SOUNDS.laser = new SoundTag('laser.wav',1,1);
SOUNDS.droneSong = new SoundTag('DroneSong.wav',1,1);
SOUNDS.pop = new SoundTag('pop1.wav',1,1);
SOUNDS.ding = new SoundTag('pop1.wav',2,1);
SOUNDS.graySong = new SoundTag('GrayspikeSong.wav',1,1);
SOUNDS.victorySong = new SoundTag('victory2.wav',1,1);
SOUNDS.daniSong = new SoundTag('fastV2.wav',1,0.5);
SOUNDS.hitSoundthing = new SoundTag('hitSoundthing.wav',1,0.5);
SOUNDS.stringRaise = new SoundTag('stringRaise.wav',1,1);
SOUNDS.burr = new SoundTag('pulsebrassbr.wav',1,1);
SOUNDS.creepySong = new SoundTag('creepySong.wav',1,1);

SOUNDS.evilFlower =  new SoundList([
  new SoundTag('ARG1.wav', 1,1),
  new SoundTag('ARG2.wav', 1,1),
  new SoundTag('ARG3.wav', 1,1),
])

SOUNDS.enemyHit =  new SoundList([
  new SoundTag('ARG1.wav', 2,1),
  new SoundTag('ARG2.wav', 2,1),
  new SoundTag('ARG3.wav', 2,1),
])

SOUNDS.enemyHit2 =  new SoundList([
  new SoundTag('ARG1.wav', .7,1),
  new SoundTag('ARG2.wav', .7,1),
  new SoundTag('ARG3.wav', .7,1),
])

var d = 0.5;
SOUNDS.pressenseTalk =  new SoundList([
  new SoundTag('onHover.wav', 1*d,1),
  new SoundTag('onHover.wav', 1.17*d,1),
  new SoundTag('onHover.wav', 1.25*d,1),
  new SoundTag('onHover.wav', 1.17*d,1),
  new SoundTag('onHover.wav', 1.33*d,1),
])

d = 0.75;
SOUNDS.darkGraySpikeTalk =  new SoundList([
  new SoundTag('onHover.wav', 1*d,1),
  new SoundTag('onHover.wav', 1.17*d,1),
  new SoundTag('onHover.wav', 1.25*d,1),
  new SoundTag('onHover.wav', 1.17*d,1),
  new SoundTag('onHover.wav', 1.33*d,1),
])

SOUNDS.psykeiTalk =  new SoundList([
  new SoundTag('onHover.wav', 1*2,1),
  new SoundTag('onHover.wav', 1.17*2,1),
  new SoundTag('onHover.wav', 1.17*2,1),
  new SoundTag('onHover.wav', 1.25*2,1),
  new SoundTag('onHover.wav', 1.25*2,1),
  new SoundTag('onHover.wav', 1.25*2,1),
  new SoundTag('onHover.wav', 1.33*2,1),
  new SoundTag('onHover.wav', 1.33*2,1),
  new SoundTag('onHover.wav', 1.33*2,1),
  new SoundTag('onHover.wav', .91*2,1),
])

SOUNDS.curleyTalk =  new SoundList([
  new SoundTag('onHover.wav', 1*2,1),
  new SoundTag('onHover.wav', 1.25*2,1),
  new SoundTag('onHover.wav', 1.33*2,1),
  new SoundTag('onHover.wav', 1.17*2,1),
  new SoundTag('onHover.wav', .91*2,1),
  new SoundTag('onHover.wav', .91*2,1),
  new SoundTag('onHover.wav', .8*2,1),
  new SoundTag('onHover.wav', .8*2,1),
  new SoundTag('onHover.wav', .8*2,1),
  new SoundTag('onHover.wav', 1.17*2,1),
  new SoundTag('onHover.wav', 1.17*2,1),
  new SoundTag('onHover.wav', 1.17*2,1),
  new SoundTag('onHover.wav', .8*2,1),
])

SOUNDS.playerTalk =  new SoundList([
  new SoundTag('onPress.wav', 1,1),
  new SoundTag('onPress.wav', 1.25,1),
  new SoundTag('onPress.wav', 1.33,1),
  new SoundTag('onPress.wav', 1.17,1),
  new SoundTag('onPress.wav', .91,1),
])

var jtd = 0.8;
SOUNDS.johnsonTalk =  new SoundList([
  new SoundTag('onPress.wav', 1*jtd,1),
  new SoundTag('onPress.wav', .91*jtd,1),
  new SoundTag('onPress.wav', 1.17*jtd,1),
  new SoundTag('onPress.wav', 1.25*jtd,1),
  new SoundTag('onPress.wav', 1.33*jtd,1),
])


var jtd = 2;
SOUNDS.computerTalk =  new SoundList([
  new SoundTag('onPress.wav', 1*jtd,1),
  new SoundTag('onPress.wav', 1.17*jtd,1),
  new SoundTag('onPress.wav', 1.25*jtd,1),
  new SoundTag('onPress.wav', .91*jtd,1),
  new SoundTag('onPress.wav', 1.33*jtd,1),
])

// SOUNDS.exampleSound = new SoundTag('exampleSound.wav', 1,1);
// SOUNDS.exampleSoundRandom = new SoundListRandom([
//     new SoundTag('exampleSound1.wav', 1, 1),
//     new SoundTag('exampleSound2.wav', 1, 1),
//   ])
