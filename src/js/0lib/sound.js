//  Copyright Brian Dizon 2019

var SOUNDASSETS='sounds/';
var VOLUME = 2;

var AUDIOCONTEXT;
var DESTINATION;
var BUFFERBUFFER = [];
var SOUND_INITIALIZED = false;
var DecodeBuffer = [];
function setVolume(val) {
  if(val < 0) val = 0;
  if(val > 1) val = 1;
  VOLUME = val;
  DESTINATION.gain.setValueAtTime(val, 0);  
}
function initializeSound() {
  if(SOUND_INITIALIZED) return false;
  try {
    if('webkitAudioContext' in window) {
      AUDIOCONTEXT = new webkitAudioContext();
    } else {
      AUDIOCONTEXT = new AudioContext();
    }
    AUDIOCONTEXT.resume();
    var GAIN = AUDIOCONTEXT.createGain();
    GAIN.connect(AUDIOCONTEXT.destination);
    DESTINATION = GAIN;
    setVolume(0.5);
    // for(var i in BUFFERBUFFER) {
    //   BUFFERBUFFER[i].beginLoad();
    // }
    // BUFFERBUFFER = [];
    for(var i in DecodeBuffer) {
      decode(DecodeBuffer[i][0], DecodeBuffer[i][1]);
    }
    SOUND_INITIALIZED = true;
    return true;
  }
  catch (error){
    alert(error);
  }
}
function decode(response, callback) {
  AUDIOCONTEXT.decodeAudioData(
    response,
    function(buffer) {
      if (!buffer) {
        alert('error decoding file data: ' + url);
        return;
      }
      callback(buffer);
    },
    function(error) {
      console.error('decodeAudioData error', error);
    }
  );
}

function loadBuffer(url, callback) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  // if(OnFile) url = webDomain + url;
  // else url = '.' + url;
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function() {
    SOUNDS.onLoad();
    // Asynchronously decode the audio file data in request.response
    if(SOUND_INITIALIZED) decode(request.response, callback);
    else
    DecodeBuffer.push([request.response, callback]);
  }

  request.onerror = function() {
    console.log("BufferLoader: XHR error");
    console.log("Cannot load sounds from File system");
  }

  request.send();
}
class SoundSource {
  constructor(url, playbackRate, volume,loops) {
    url = SOUNDASSETS + url;    
    this.url = url;
    this.loaded = false;
    this.playbackRate = playbackRate || 1;
    this.volume = volume || 1;
    this.loops=loops||false;
    BUFFERBUFFER.push(this);
    this.lastSound = null;
    SOUNDS.soundsToLoad ++;
    this.beginLoad();
  }
  addOnLoad(callback) {
    this.addOnCallback = callback;
  }
  beginLoad() {
    loadBuffer(this.url, this.onloadBuffer.bind(this));
  }
  onloadBuffer(buffer) {
    this.buffer=buffer;
    this.loaded = true;
    if(this.addOnCallback) {
      this.addOnCallback();
    }
  }
  stopSound() {
    if(!this.lastSound) return;
    this.lastSound.stopSound();
    this.lastSound = null;
  }
  pause() {
    this.setVolume(0);
    // if(!this.lastSound)return;
    // this.pauseTime = this.lastSound.getTime();
    // this.stopSound();
  }
  resume() {
    this.setVolume(1);
    // if(!this.lastSound||!this.pauseTime)return;
    // this.lastSound.resume(this.pauseTime);
  }
  setVolume(v) {
    if(!this.lastSound)return;
    this.lastVolume = v;
    v = v*this.volume;
    if(v<0)v=0;
    if(v>1)v=1;
    this.lastSound.myGain.gain.setValueAtTime(v, AUDIOCONTEXT.currentTime);
  }
  play(playbackRate) {
    if(!playbackRate)playbackRate=0;
    var audioContext= AUDIOCONTEXT;
    var destination = DESTINATION;
    if(!destination)return;
    var time = audioContext.currentTime;
    var source = audioContext.createBufferSource();
    source.buffer = this.buffer;

    //3 -> -100     
    //0.5 -> 100    
    // source.detune.setValueAtTime(-100, time);
    source.playbackRate.value = this.playbackRate + playbackRate;
    // if(pitchShift != null) {
    //   source.playbackRate.setValueAtTime(pitchShift, time)
    //   // source.detune = pitchShift;
    //   // source.detune.setValueAtTime(pitchShift*100, time);
    // }
    var r = 1;// + (Math.random()-0.5)/10;
    // var pbr = (this.playbackRate)/10+0.9;
    // source.playbackRate.setValueAtTime(pbr,time);
    source.start(time);  
    if(this.loops) source.loop = true;
    var gain = audioContext.createGain();
    gain.gain.setValueAtTime(this.volume, time);
    // gain.gain.setValueAtTime(0, time + 1/this.playbackRate);
    gain.connect(destination);
    source.connect(gain);    
    source.stopSound = function() {
      try {
        this.disconnect(gain);
      } catch(e) {
        console.log(e);
      }
    };
    source.myGain = gain;
    this.lastSound = source;
    source.getTime = function() {}
    source.pause = function() {
      try {
        this.disconnect(gain);
      } catch(e) {
        console.log(e);
      }
      this.paused = true;
    }
    source.resume = function() {
      if(!this.paused)return;
      try {
        this.connect(gain);
        this.paused = false;
      } catch(e) {
        console.log(e);
      }
    }
    return source;
  }
}

class SoundTag {
  constructor(url, playbackRate, volume) {
    url = SOUNDASSETS + url;
    this.url = url;
    this.playbackRate = playbackRate || 1;
    this.volume = volume || 1;
    this.lastVolume = this.volume;
    this.createAudio();
  }
  createAudio() {
    var audioElement = document.createElement("audio");
    // audioElement.mozPreservesPitch = false;
    audioElement.src = this.url;
    this.audioElement = audioElement;
    audioElement.playbackRate = this.playbackRate;
    this.setVolume(1);
  }
  play() {
    this.audioElement.play();
    this.audioElement.currentTime = 0;
    if(this.loops) this.audioElement.loop = true;        
    return this;
  }
  stopSound() {
    this.audioElement.pause();
  }
  pause() {
    this.audioElement.pause();
  }
  resume(time) {
    this.audioElement.play();
    if(time!=undefined) {
      this.audioElement.currentTime = time;
    }
  }
  getTime() {
    return this.audioElement.currentTime;
  }
  setVolume(v) {
    this.lastVolume = v;        
    v = v*VOLUME*this.volume;
    if(v<0)v=0;
    if(v>1)v=1;
    this.audioElement.volume = v;    
  }
  getVolume() {
    return this.lastVolume;
  }
}

class SoundList {
  constructor(sounds) {
    this.sounds = sounds;
    this.index = 0;
  }
  play(...args) {
    this.sounds[this.index].play(...args);
    this.index = (this.index+1)%this.sounds.length;
  }
}

class SoundListRandom {
  constructor(sounds) {
    this.sounds = sounds;
  }
  play(...args) {
    this.sounds[Math.floor(Math.random()*this.sounds.length)].play(...args);
  }
}

function dup(name, playback ,volume, amount) {
  var sounds = [];
  for(var i=0;i<amount; ++i) {
    sounds[i] = new SoundTag(name, playback, volume);
  }
  return new SoundList(sounds);
}

class SoundMix {
  constructor(sounds) {
    this.sounds=sounds;
  }
  play(...args) {
    this.sounds.forEach(function(e) {
      e.play(...args);
    })
  }
}

var MusicHandler = {
  stop() {
    if(this.music) {
      this.music.loops = false;
      this.music.stopSound();
      this.music = null;
      this.musicSource = null;
    }
    this.waitingOn = null;
  },
  onLoad() {
    if(this.waitingOn) {
      console.log("attempting to play ");
      console.log(this.waitingOn);
      this.playMusic(this.waitingOn);
    }
  },
  pause() {
    if(this.music) {
      this.music.pause();
    }
  },
  resume() {
    if(this.music) {
      this.music.resume();
    }
  },
  playMusic(music) {
    if(this.musicSource == music)return;
    this.musicSource = music;
    music.loops = true;
    this.waitingOn = null;
    this.stop();
    this.music = music.play();
    if(!this.music||!this.music.loaded) {
      this.waitingOn = music;
      music.addOnLoad(this.onLoad.bind(this));
      // SOUNDS.onComplete(this.onLoad.bind(this));
    } else {
      music.loop = true;
    }
  }
}


window.addEventListener('mousedown', initializeSound);
window.addEventListener('touchstart', initializeSound);

var OnFile = (window.location.protocol == "file:");
// if(!OnFile)
SoundTag = SoundSource;

var SOUNDS = {
  soundsToLoad:0,
  soundsLoaded:0,
  onCompleteCallbacks: [],
  getLoaded() {
    return SOUNDS.soundsLoaded/SOUNDS.soundsToLoad;
  },
  onComplete(callback) {
    if(this.soundsLoaded >= this.soundsToLoad) {
      callback();
    } else {
      this.onCompleteCallbacks.push(callback);
    }
  },
  onLoad: function() {
    this.soundsLoaded++;
    if(this.soundsLoaded>=this.soundsToLoad) {
      this.onCompleteCallbacks.forEach(function(e) {
        e();
      })
      this.onCompleteCallbacks = [];
    }
  }
}