

function GetDialogueData(game, levelName) {
  CHARACTERS = {
    Computer: {
      name: "Computer",
      talkSound: SOUNDS.computerTalk
    },
    Pressense: {
      name: "Pressense",
      talkSound: SOUNDS.pressenseTalk,
      every: 7,
    },
    Knight: {
      name: "Knight",
      talkSound: SOUNDS.johnsonTalk
    },
    Curley: {
      name: "Curley",
      obj: game.specialActors.curley,
      talkSound: SOUNDS.curleyTalk,
      every:3,
    },
    Psykei: {
      name: "Psykei",
      obj: game.specialActors.psykei,
      talkSound: SOUNDS.psykeiTalk,
      every: 4,
    },
    Jabroski: {
      name: 'Jabroski',
      obj: game.specialActors.jabroski,
      // talkSound: SOUNDS.chewing
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
    SirDanathon: {
      name: "Sir Danathon",
      obj: game.specialActors.sirDanathon,
      talkSound: SOUNDS.johnsonTalk,
      every: 3,
    },
    DarkGraySpike: {
      name: "Dark Gray Spike",
      obj: game.specialActors.DarkGraySpike,
      talkSound: SOUNDS.darkGraySpikeTalk,
      every: 2,
    },
    GraySpike: {
      name: "Gray Spike",
      obj: game.specialActors.DarkGraySpike,
      talkSound: SOUNDS.playerTalk,
      every: 3,
    }
  }
    switch(levelName) {
      case "CurleyCloset":
        return [
          {sound: SOUNDS.glassBreak},
{text: "You have emerged in Pocket Dimension **46721-C", person: CHARACTERS.Computer, doNotTarget:true},
{text: "It has a chaotic inverted linkality with a Developmental section of the Tube-R Sector", person: CHARACTERS.Computer, doNotTarget:true},
{text: "Crap I gotta find Johnson", person: CHARACTERS.Kwak, doNotTarget:true},
{text: "Use WASD or ARROW KEYS to move", person: CHARACTERS.Computer, doNotTarget:true},
{wait: 60},
        ]
      case "CurleyStairs":
        return [
{text: "Remember. The first priority of interdimensional travel is to blend in.", person: CHARACTERS.Computer, doNotTarget:true},
{text: "Im routing you to a nearby training facility", person: CHARACTERS.Computer, doNotTarget:true},
        ]
        case "CurleyHallway":
          return [
{music: SOUNDS.curleyMusic},
          ]
    case "BootPickup":
        return [
{text: "Alright Welcome new Recruits", person: CHARACTERS.Curley, doNotTarget:true},
{text: "I'm Curley, CEO of Curleys, here to introduce you to Anity power.", person: CHARACTERS.Curley, doNotTarget:true},
{text: "At Anity we believe in community", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Thats why with our patented Anity boots,", person: CHARACTERS.Curley, doNotTarget:true},
{text: "we will all know what its like to walk in the same shoes.", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Version 32. Cause all the other ones kept exploding for some reason...", person: CHARACTERS.Curley, doNotTarget:true},
        ]
    case "CurleyJump":
      return [
{text: "You can press Up to Jump, and you can hold Up to Jump Higher", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Try doing some full height jumps across these small gaps", person: CHARACTERS.Curley, doNotTarget:true},
      ]
      case "CurleyStuck":
      return [
{text: "If you ever get stuck. Press R to restart", person: CHARACTERS.Curley, doNotTarget:true, persist: true},
      ]
    case "CurleyDoubleJump":
      return [
{text: "You can press Up in the Air, to do a double jump", person: CHARACTERS.Curley, doNotTarget:true},
{text: "You will need to hold both jumps down fully to get the max height possible", person: CHARACTERS.Curley, doNotTarget:true},
      ]
    case "CurleySpikePit":
      return [
{text: "Ouch! These Spikes are really sharp!", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Touching one of these bad boys is definitely not good for your health", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Special rewards are given if you make it to the end without ever touching them", person: CHARACTERS.Curley, doNotTarget:true},
      ]
    case "CurleyShortJump":
      return [
{text: "Tap and quickly release the jump button to do a short jump", person: CHARACTERS.Curley, doNotTarget:true},
{text: "You can try doing this now to make these small jumps without getting hit by spikes above you", person: CHARACTERS.Curley, doNotTarget:true},
      ]
    case "CurleyFallJump":
      return [
{text: "You can use your double jump in the air after falling off of a ledge", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Simply fall off and jump in the air", person: CHARACTERS.Curley, doNotTarget:true},
      ]
    case "CurleySpikeFake-ignore":
      return [
{text: "Okay so you may have noticed. Nothing here could actually hurt you", person: CHARACTERS.Curley, doNotTarget:true},
{text: "If you managed to make it to the end without touching any spikes", person: CHARACTERS.Curley, doNotTarget:true},
{text: "You'd be suprised to know the spikes didn't actually do anything.", person: CHARACTERS.Curley, doNotTarget:true},
{text: "You can try it for yourself", person: CHARACTERS.Curley, doNotTarget:true},
{text: "But that doesn't mean they will be so harmless in the real world!", person: CHARACTERS.Curley, doNotTarget:true},
{text: "You should try to avoid the spikes to prepare your self for the real world", person: CHARACTERS.Curley, doNotTarget:true},
      ];
      case "CurleyFakeSpikeFound":
      return [
{set: {inputBlocked: true, mx:0}, entity: 'kwak'},
{text: "Hey what are you doing! Those spikes are dangerous!", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Make sure to take the training seriously. If you did that in the real world. You would totally die", person: CHARACTERS.Curley, doNotTarget:true},
{set: {inputBlocked: false, mx:0}, entity: 'kwak'},
      ];
    case "CurleyAttack":
      return [
{text: "Press K or X to do a Boot Blask Kick", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Be careful of these chompers, these cute little guys will bite your head off!", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Defeat all the chompers to continue", person: CHARACTERS.Curley, doNotTarget: true},
{waitForEnemyClear: 1},
{waitFor: 20},
{nextLevel:1, sound: SOUNDS.ding},
      ]
    case "CurleyCongrats":
      return [
{text: "Anyways, Congrats! You have completed your introduction", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Sit tight while we prepare your certification.", person: CHARACTERS.Curley, doNotTarget:true},
{text: "After that you can wait in a super long line while we read all of your names out one by one", person: CHARACTERS.Curley, doNotTarget:true},
{text: "But there's nowhere else to go anywas, its not like you can wall jump out of here or anything", person: CHARACTERS.Curley, doNotTarget:true},
      ]
    case "VentsEntrance":
      return [
{musicStop: 1, text: "Johnson, where are you?", person: CHARACTERS.Kwak, doNotTarget:true},
{text: "[from below] Hm. Theres something in the vents", person: CHARACTERS.Psykei, doNotTarget:true},
{waitFor: 60, screenShake: 3, sound: SOUNDS.oneCrash},
{waitFor: 60, screenShake: 7, sound: SOUNDS.oneCrash},
{screenShake: 7, sound: SOUNDS.oneCrash, text: "AHHHHhhhh", person: CHARACTERS.Johnson, doNotTarget:true},
{text: "(Johnson!)", person: CHARACTERS.Kwak, doNotTarget:true},
{text: "What have we here...", person: CHARACTERS.Psykei, doNotTarget:true},
      ]
    case "VentsEavesdrop1":
      return [
{text: "The boss might just be interested in this", person: CHARACTERS.Psykei, doNotTarget:true},
{text: "I gotta get to Johnson!", person: CHARACTERS.Kwak, doNotTarget:true},
      ]
    case "VentsEavesdrop2":
      return [
{text: "My Leige, I found This lurking around the vents", person: CHARACTERS.Psykei, doNotTarget:true},
{text: "Looking closely at it through my psyche powers,", person: CHARACTERS.Psykei, doNotTarget:true},
{text: "I can tell that it has a very strange, foreign pressence kindof", person: CHARACTERS.Psykei, doNotTarget:true},
{text: "Very interesting", person: CHARACTERS.Pressense, doNotTarget:true},
{text: "The Anreals must have sent this strange creature.", person: CHARACTERS.Pressense, doNotTarget:true},
{text: "(That voice...)", person: CHARACTERS.Kwak, doNotTarget:true},
{text: "SPEAK ABOMINATION!", person: CHARACTERS.Pressense, doNotTarget:true},
{text: "what mission do they send you for? Reconnaissance? Sabotage?", person: CHARACTERS.Pressense, doNotTarget:true},
{text: "(It can't be)", person: CHARACTERS.Kwak, doNotTarget:true},
{text: "SPEAK! playing dumb with your culinary disguise fools no one here.", person: CHARACTERS.Pressense, doNotTarget:true},
{text: "...", person: CHARACTERS.Johnson, doNotTarget:true},
{text: "Very well. We shall keep it for study", person: CHARACTERS.Pressense, doNotTarget:true},
{text: "Psykei, update the others that we must be wary of intruders in our midst.", person: CHARACTERS.Pressense, doNotTarget:true},
{text: "Anity must not fall to the trickery of our rivals.", person: CHARACTERS.Pressense, doNotTarget:true},
{text: "Oh, Yes my leige, intruders, of course", person: CHARACTERS.Psykei, doNotTarget:true},
{text: "This is not good", person: CHARACTERS.Kwak, doNotTarget:true},
{waitFor: 60, screenShake: 7, sound: SOUNDS.oneCrash},
{text: "Uh oh", person: CHARACTERS.Kwak, doNotTarget:true},
{waitFor: 60, screenShake: 7, sound: SOUNDS.oneCrash},
{waitFor: 60, screenShake: 10, sound: SOUNDS.oneCrash},
{screenShake: 7, sound: SOUNDS.oneCrash, nextLevel: true},
  ]
  case "VentsFall":
    return [
{music: SOUNDS.dramaticMusic, set: {dx:-1}, entity: "psykei"},
{set: {speed: 0, outlineColor: "#d71876", inputBlocked: true,}, entity: "kwak"},
{set: {dx:-1, inputUpdate:function(){this.jump()}}, entity: "cheeseburgerJohnson"},
{waitFor: 120},
{text: "Another intruder in the vents it seems", person: CHARACTERS.Psykei},
{text: "Nib!", person: CHARACTERS.Johnson, doNotTarget: true},
{waitFor:30, set: {mx:-1}, entity: "psykei"},
{waitFor: 30, set: {mx:0}, entity: "psykei"},
{text: "What are you doing to me? Why cant I move?", person: CHARACTERS.Kwak},
{text: "Show me your secrets, Intruder", person: CHARACTERS.Psykei, sound: SOUNDS.portalNoise},
{text: "ARG", person: CHARACTERS.Kwak, sound: SOUNDS.evilFlower},
{text: "A source of magic yourself it seems. Yet you are not an Anity user", person: CHARACTERS.Kwak, sound: SOUNDS.evilFlower},
{text: "I'll be taking your little friend with me back to HQ", person: CHARACTERS.Psykei},
{text: "And as for you, outsider,", person: CHARACTERS.Psykei},
{waitFor:30, set: {mx:-1}, entity: "psykei"},
{waitFor: 30, set: {mx:0}, entity: "psykei"},
{text: "I wont be taking any chances", person: CHARACTERS.Psykei},
{waitFor: 30},
{set: {getInputs: function(){this.attack()}}, entity: "psykei"},
{waitFor: 30, set: {vx: -25,vy:-9}, entity: "kwak"},
{musicStop:1, sound: SOUNDS.glassBreak},
{waitFor: 120},
{text: "Nib NO!", person: CHARACTERS.Johnson, doNotTarget: true},
{set: {outlineColor: 'black', passedOut: true}, entity: "kwak", nextLevel: 1, target: CHARACTERS.Kwak.obj},
    ]
  case "TowerFall":
    return [
  {musicStop:1,set: {vx: -30,speed:0,passedOut: true, inputBlocked: true,}, entity: "kwak", target: CHARACTERS.Kwak.obj, sound: SOUNDS.glassBreak},
  {musicStop:1,waitFor: 180},
  {set: {dx: -1, isLounging: false}, entity: 'jabroski'},
  {waitFor: 60},
  {set: {dx: 1}, entity: 'jabroski'},
  {waitFor: 60},
  {set: {dx: -1}, entity: 'jabroski'},
  {waitFor: 60},
  {set: {mx: -1, speed: 2.5}, entity: 'jabroski'},
  {waitFor: 120},
  {set: {mx: 0}, entity: 'jabroski'},
  {waitFor: 60},
  {text: "Hey dude are you okay?", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {waitFor: 30},
  {text: "...", person: CHARACTERS.Kwak},
  {fadeToBlack: 100},
  {nextLevel: 1},
    ]
    case "WakeUp":
      return [
{waitFor: 1},
{fadeIn: 99, set: {speed: 5, passedOut: false}, entity: 'kwak'},
{text: "Hey dude you really fell quite a ways back there", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
{text: "Buut, you're okay now. A little rest fixed you right up", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {text: "Oh god. what happened", person: CHARACTERS.Kwak},
  {text: "eh you know. you just got thrown out of a tower", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {text: "You want any food? I got chips, candy, war ready bread, pasta with the stromboli sauce.", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {text: "Johnson!", person: CHARACTERS.Kwak},
  {text: "They went to some headquarters. Anity or something. Do you know what I'm talking about?", person: CHARACTERS.Kwak},
  {text: "Oh my dude. Thats like really far away.", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {text: "Please they took my friend", person: CHARACTERS.Kwak},
  {text: "Kidnapping? that doesn't sound like Anity...", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {text: "Although, they have been doing some weird stuff lately. Ever since that guy showed up", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {text: "New guy? what does he look like?", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {text: "I didn't really get a good look at him. He was more like...", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {text: "Like a presence?", person: CHARACTERS.Kwak},
  {text: "Yeah exactly", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {text: "(Oh no)", person: CHARACTERS.Kwak},
        // {text: "What about that wizard guy, how does he get around?", person: CHARACTERS.Kwak},
  // {text: "Oh Psykei? Oh he can like definitely teleport or something", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  // {text: "Ug. so whats the deal with these drones?", person: CHARACTERS.Kwak},
  {text: "Normally I could help you out with my drones, buut they are kind of evil at the moment", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {text: "If I could get access to the AI core, I could regain control and fix them", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {text: "That new Anity guy had me equip them with lasers as part of some new defense program, and that is not user friendly", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {text: "If I help you bust a few drones, you can help get me to the headquarters?", person: CHARACTERS.Kwak},
  {text: "Oh for sure, just clear all the drones, and I'm at your service. The lab is just to the right there.", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
  {set: {speed: 5, inputBlocked: false}, entity: 'kwak', target: CHARACTERS.Kwak.obj},
      ]
    case "Drones2":
      return [
        {music: SOUNDS.droneSong,set: {speed: 5, inputBlocked: false}, entity: 'kwak', target: CHARACTERS.Kwak.obj},
        {text: "Clear out all the drones", persist: true},
        {waitForEnemyClear: 1},
        {waitFor: 60},
        {text: "Hey Nice work.", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing, doNotTarget: true},
        {nextLevel:1}
      ]
    case "Core":
      return [
        {set :{inputBlocked: true, mx: 0}, entity:'kwak' },
        {text: "Alright. This should start getting them in order", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing,sound: SOUNDS.keyboardSounds1},
        {text: "It looks like Psykei set a goal to defend against non-Anity users", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing,sound: SOUNDS.keyboardSounds1},
        {text: "I can have the drones fly you over the river to the keep.", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "Once you're there, find Sir Danathon. He can catapult you the rest of the way", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "And hey if you are going up against magic users, you're gonna need a mark of protection", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "You can find GraySpike near the HQ, and he can help you out", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "And here, take these letters to GraySpike and Sir Danathon when you see them will you?", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "I haven't seen em in a while", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "Will do. Thanks boss, you've been a huge help", person: CHARACTERS.Kwak},
        {text: "Weird. doesn't sound like something he would do.", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "...Hey, This Psykei, his face look like a giant P?", person: CHARACTERS.Kwak},
        {text: "Yeah thats him", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "Are his eyes usually red?", person: CHARACTERS.Kwak},
        {text: "Uh no... why? whats going on", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "... its nothing. I'm probably just overthinking it", person: CHARACTERS.Kwak},
        {fadeToBlack: 100},
        {nextLevel:1},
      ]
    case "Drawbridge":
      return [
        {waitFor: 1},        
        {set: {inputBlocked: true, mx:0}, entity: 'kwak'},
        {fadeIn: 100, musicStop:1},
        {text: "Hey whats up, just giving the new updates from Anity", person: CHARACTERS.Psykei},
        {text: "A crazy powerful dark wizard has been spotted in the kingdom. He is known to be colluding with the Anreals.", person: CHARACTERS.Psykei},
        {text: "This gray humanoid blob must be stopped at all costs.", person: CHARACTERS.Psykei},
        {text: "yeah so thats it", person: CHARACTERS.Psykei},
        {text: "Yes sir, understood sir. The goon, sir, aprehend him, sir.", person: CHARACTERS.Knight},
        {waitFor: 30, target: CHARACTERS.Kwak.obj},
        // {set: {shouldDelete:true}, entity: 'psykei'},
        {set: {inputBlocked: false}, entity: 'kwak'},
        {nextLevel:1},
      ]
    case "ThroneRoom":
      return [
        {set: {inputBlocked: true, mx:0}, entity: 'kwak'},
        {text: "AHA who goes there?", person: CHARACTERS.SirDanathon},
        {text: "OOh a letter from Jabroski?", person: CHARACTERS.SirDanathon},
        {text: "What a good lad he is. One I haven't heard from in a while", person: CHARACTERS.SirDanathon},
        {text: "HA", person: CHARACTERS.SirDanathon},
        {text: "It just says 'Sup Dude :)'", person: CHARACTERS.SirDanathon},
        {text: "Hilarious!", person: CHARACTERS.SirDanathon},
        {text: "My Catapult you say? Oh of course!", person: CHARACTERS.SirDanathon},
        {text: "Towards my good friend GraySpike no less!", person: CHARACTERS.SirDanathon},
        {text: "Though I would have it be warned good friend of the rumors", person: CHARACTERS.SirDanathon},
        {text: "They say GraySpike has not been acting quite himself as of late", person: CHARACTERS.SirDanathon},
        {text: "They say he resides himself amongst eerie whispers", person: CHARACTERS.SirDanathon},
        {text: "In fact he has begun to be known as Dark GraySpike of late", person: CHARACTERS.SirDanathon},
        {text: "But no matter I'm sure! Hes a good lad at heart after all.", person: CHARACTERS.SirDanathon},
        {text: "Off you go then. To The Catapults!", person: CHARACTERS.SirDanathon},
        {target: CHARACTERS.Kwak.obj},
        {fadeToBlack: 100},        
        {set: {inputBlocked: false}, entity: 'kwak'},
        {nextLevel:1},
      ]
      case "Dungeon":
      return [{}
      ]
    case "Catapult":
      return [
        {target: CHARACTERS.Kwak.obj},
        {waitFor: 1},
        {set: {vx:40,vy:-10,inputBlocked:false,speed:5}, entity: 'kwak', sound: SOUNDS.swishLong}       
      ]
      // case "FlowerTrail":
    case "FlowerTime":
        return [
          {set: {vx: 0}, entity: 'kwak'},
          {music: SOUNDS.graySong},
          {set: {isBossin: true, happy:true}, entity: 'darkGraySpike'},
          {waitForEnemyClear:1},
          {waitFor: 60},
          {nextLevel:1},
        ]
      case "reconciliation":
        return [
        {set: {inputBlocked: true, mx:0,dx:1,}, entity: 'kwak'},
        {text: "ARGH. Who is this creature before me that seeks my presense", person: CHARACTERS.DarkGraySpike},
        {text: "Cower before the Might of Dark Gray Spike", person: CHARACTERS.DarkGraySpike},
        {musicStop:1,set: {happy:true}, entity: 'darkGraySpike', text: "...A letter. From Jabroski?", person: CHARACTERS.GraySpike},
        {set: {happy:false}, entity: 'darkGraySpike', text: "Why Should I care!", person: CHARACTERS.DarkGraySpike},
        {text: "I'm fine by myself!", person: CHARACTERS.DarkGraySpike},
        {set: {happy:true}, entity: 'darkGraySpike', text: "Oh. It just says 'Sup Dude :)' ha thats nice", person: CHARACTERS.GraySpike},
        {text: "I should write him back we haven't talked in a while", person: CHARACTERS.GraySpike},
        {text: "You have to connect with your friend too?", person: CHARACTERS.GraySpike},
        {text: "Oh save him. Well I guess I can help", person: CHARACTERS.GraySpike},
        {set: {happy:false}, entity: 'darkGraySpike', text: "From the Defense of the Seas and aqua, I bestow on you, a water mark of protection!", person: CHARACTERS.DarkGraySpike},
        {set: {waterMark: true}, entity: 'kwak', sound: SOUNDS.pop},
        {set: {happy:true}, entity: 'darkGraySpike', text: "Go Have Fun! ^.^", person: CHARACTERS.GraySpike},
        {set: {happy:false}, entity: 'darkGraySpike', text: "And DESTROY your ENEMIES", person: CHARACTERS.DarkGraySpike},
        {set: {inputBlocked: false}, entity: 'kwak'},
        {fadeToBlack: 100},
        {nextLevel:1, set: {waterMark: false}, entity: 'kwak'},
        ]
        case "BossHall" :
          return [
          {music: SOUNDS.dramaticMusic},
          {setCondition: {pxG: 1000}, conditionTarget: "BossCut"},
          ]
        case "BossCut":
          return [
            {set: {inputBlocked: true, mx:0}, entity: 'kwak',},
            {fadeToBlack: 100},
            {nextLevel:1},        
        ]
        case "Boss":
        return [
        {set: {inputBlocked: true, mx:0}, entity: 'kwak',},
        {set: {dx:-1}, entity: 'psykei',},
        {waitFor: 1},
        {fadeIn: 100},
        {text: "I bet you're thinking... its time for a boss fight, right?", person: CHARACTERS.Psykei},
        {text: "I'm afraid that won't be necessary", person: CHARACTERS.Psykei},
        {text: "I found your secrets, Outsider", person: CHARACTERS.Psykei},
        {text: "I've discovered what all this is about. This world has seemed off from the beginning", person: CHARACTERS.Psykei,set: {fourthwall: true}, entity: 'psykei'},
        {text: "Forced obscure referrences, weird plot devices that don't really make any sense.", person: CHARACTERS.Psykei,set: {fourthwall: true}, entity: 'psykei'},
        {text: "Characters so awkwardly mixed from realy life and original content that they lack real purpose and direction", person: CHARACTERS.Psykei,set: {fourthwall: true}, entity: 'psykei'},
        {text: "What? What are you talking about?", person: CHARACTERS.Kwak,set: {fourthwall: true}, entity: 'psykei'},
        {text: "Silence!", person: CHARACTERS.Psykei, screenShake: 3, sound: SOUNDS.oneCrash},
        {musicStop: true},        
        {text: "The Game is a Liar", person: CHARACTERS.Psykei, slow: true},
        {text: "What? What is that supposed to mean?", person: CHARACTERS.Kwak},
        {text: "This game was not made in Unity", person: CHARACTERS.Psykei,set: {fourthwall: true}, entity: 'psykei'},
        {text: "Lying about your game engine. A strange thing to keep from your players.", person: CHARACTERS.Psykei,set: {fourthwall: false}, entity: 'psykei'},
        {text: "What did you use!?", person: CHARACTERS.Psykei, screenShake: 4},
        {text: "Nothing...", person: CHARACTERS.Kwak},
        {text: "Lies!", person: CHARACTERS.Psykei, screenShake: 2, sound: SOUNDS.oneCrash},
        {text: "I didn't use anything!", person: CHARACTERS.Kwak},
        {text: "You can't make a game without a game engine! What did you use?!", person: CHARACTERS.Psykei},
        {text: "Nothing! ...Its just javascript. And nothing else", person: CHARACTERS.Kwak},
        {text: "I made the game engine myself from scratch using nothing but html5 canvas", person: CHARACTERS.Kwak},
        {text: "I've dont it a million times. I basically have the game engine programmed in my head", person: CHARACTERS.Kwak},
        {text: "Niborious... tsk tsk tsk", person: CHARACTERS.Psykei},
        {text: "Why? why lie about your game engine?", person: CHARACTERS.Psykei},
        {text: "...", person: CHARACTERS.Kwak},
        {text: "the prize for the jam is a unity license.", person: CHARACTERS.Kwak},
        {text: "I thought, maybe if people thought I made the game in Unity... I'd have a better chance", person: CHARACTERS.Kwak},
        {text: "There are over 6000 people. What makes you think you even stood a chance?", person: CHARACTERS.Psykei},
        {text: "I don't know... just hope I guess", person: CHARACTERS.Kwak},
        {text: "I wanted to be accepted. To have a following. Like they do.", person: CHARACTERS.Kwak},
        {text: "You Idiot", person: CHARACTERS.Psykei, screenShake: 3, sound: SOUNDS.oneCrash},
        {text: "Do you know what Anity means?", person: CHARACTERS.Psykei},
        {text: "What? Anity isn't a real word", person: CHARACTERS.Kwak},
        {text: "Not according to Urban dictionary", person: CHARACTERS.Psykei},
        {text: "A way to sort into groups", person: CHARACTERS.Psykei},
        {text: "this isn't about winning. This is about you feeling insecure. about fitting in", person: CHARACTERS.Psykei},
        {text: "Well, say goodbye to your chances now. No boss fight. No climatic ending", person: CHARACTERS.Psykei},
        {text: "You will suffer for your crimes!", person: CHARACTERS.Psykei},
        {nextLevel:1},
        ]
        case "Cage":
        return [
          {screenShake: 5},
          {musicStop:true},
          {setCondition: {pxG: 933}, conditionTarget: 'Teleported'},
          {target: CHARACTERS.Kwak.obj},
          {set: {inputBlocked: true, mx: 0}, entity: 'kwak'},
          {text: "Just sit in a cage and think about what you've done", person: CHARACTERS.Psykei, sound: SOUNDS.oneCrash, doNotTarget:true,},
          {waitFor: 120},
          {set: {mx: 1}, entity: 'kwak'},
          {waitFor: 40},
          {set: {mx: 0}, entity: 'kwak'},
          {text: "Well... I guess thats it", person: CHARACTERS.Kwak},
          {text: "Theres nothing left of the game", person: CHARACTERS.Kwak},
          {text: "You'll just have to quit...", person: CHARACTERS.Kwak},
          {text: "But, Hey. People don't really care that much about what engine you use.", person: CHARACTERS.Kwak},
          {text: "Javascript is fine!", person: CHARACTERS.Kwak},
          {text: "The reload time is super fast for itterating", person: CHARACTERS.Kwak},
          {text: "And you can run code in the console while the game is running", person: CHARACTERS.Kwak},
          {text: "I could just say player.x += 100, and boom teleportation", person: CHARACTERS.Kwak},
          {text: "... hey wait a minute", person: CHARACTERS.Kwak},
          {text: "You!", person: CHARACTERS.Kwak},
          {text: "If you're part of the community jam, you're probably a coder right?", person: CHARACTERS.Kwak},
          {text: "You can get us out of here!", person: CHARACTERS.Kwak},
          {text: "Open the console! do you know how to do that?", person: CHARACTERS.Kwak},
          {text: "I think its cmd option J or ctrl shift J", person: CHARACTERS.Kwak},
          {text: "If that doesn't work then just google open console for your web browser", person: CHARACTERS.Kwak},
          {text: "Then you can type in comands", person: CHARACTERS.Kwak},
          {text: "All you have to do is teleport me past the cage!", person: CHARACTERS.Kwak},
          {text: "player.x += 100 should work", person: CHARACTERS.Kwak},
        ]
        case "Teleported":
          return [
          {text: "... You did it!", person: CHARACTERS.Kwak},
          {text: "you teleported us out of there!", person: CHARACTERS.Kwak},
          {text: "hey like it or not, you're a javascript coder now too!", person: CHARACTERS.Kwak},
          {text: "Come on! lets finish this game!", person: CHARACTERS.Kwak},
          {set: {inputBlocked: false}, entity: 'kwak'},
          ]
        case "Win":
        return [
        {text: "Nib!", person: CHARACTERS.Johnson},
        {text: "Johnson! Let's get out of here", person: CHARACTERS.Kwak},
        {fadeToBlack: 100},
        {nextLevel:1}
        ]
        case "worldPan":
          return [
            {set: {inputBlocked: true, grav: 0, y: -100,x:150, mx: 1, speed: 2,vx:1,vy:0}, entity: 'kwak'},
            {fadeIn: 20},            
            {text: "Thanks For Playing!", persists: true},
            {waitForEnemyClear:1},
          ]
      default:
        return null;
    }
  }

class Scene {
  constructor() {
    this.entities = [];
    this.specialActors = {};
  }
  addEntity (entity) {
    if(entity.setScene)entity.setScene(this);
    else {entity.scene = this};
    this.entities.push(entity);
    return entity;
  }
  init() {}
  update() {
    this.entities.forEach(function(e) {e.update()});
    this.entities = this.entities.filter(function(e){return !e.shouldDelete});
  }
  draw() {
    this.entities.forEach(function(e) {if(e.draw)e.draw()});
  }
  onLeave() {}
}

class LoadingBar {
  constructor(x,y,w,h,border,color) {
    this.x=x;this.y=y;this.w=w;this.h=h;
    this.border=border;
    this.value = 0;
    this.displayValue = 0;
    this.color = color;
    this.valueSetter = null;
  }
  ValueSetter(callback) {
    this.valueSetter = callback;
    return this;
  }
  update() {
    this.displayValue += (this.value-this.displayValue)/10;
    if(this.valueSetter)this.setValue(this.valueSetter());
  }
  setValue(value) {
    this.value = value;
  }
  draw() {
    var x = this.x-this.w/2;
    var y = this.y-this.h/2;
    canvas.fillStyle = this.color;
    canvas.strokeStyle = this.color;
    canvas.lineWidth = this.border;
    canvas.strokeRect(x,y,this.w,this.h);
    canvas.fillRect(x,y,this.w*this.displayValue,this.h);
  }
}

class ModelEntity {
  constructor(model, x,y) {
    this.model = model;
    this.x=x;this.y=y;
  }
  update() {
    this.model.update();
  }
  draw() {
    this.model.draw(this.x,this.y);
  }
}

class ImageEntity {
  constructor(image,x,y,w,h) {
    this.image = image;
    this.x=x;this.y=y;this.w=w;this.h=h;
    if(h==null) {
      this.h = this.w * image.height/image.width;
    } else if (w==null) {
      this.w = this.h * image.width/image.height;
    }
  }
  update() {}
  draw() {
    var x = this.x-this.w/2;
    var y = this.y-this.h/2;
    canvas.drawImage(this.image,x,y,this.w,this.h);
  }
}

class TextUI {
  constructor(text,x,y,fontsize,options) {
    this.text=text;this.x=x;this.y=y;
    this.options = options;
    this.fontsize = fontsize;
  }
  update(){}
  draw() {
    if(this.options.font)
      canvas.font = this.font;
    if(this.options.textAlign)
      canvas.textAlign = this.options.textAlign;
    if(this.options.textBaseline)
      canvas.textBaseline = this.options.textBaseline;
    canvas.font = this.fontsize + 'px Arial';
    var x = this.x;
    var y = this.y;
    canvas.fillText(this.text,x,y);
  }
}
class JkScene extends Scene {
  constructor(next) {
    super();
    SOUNDS.hit.play();
    this.image = IMAGES.unityLogo;
    this.logo =new ImageEntity(this.image, CE.width/2,CE.height/2,null,100);
    this.addEntity(new TextUI(
      "JK",
      CE.width/2-this.logo.w*.45,CE.height*.38,20,
      {textAlign:'left', textBaseline: "top"}
    ));
    this.timer = 0;
    this.time = 40;
    this.next = next;
  }
  update() {
    super.update();
    if(this.timer<this.time) {
      this.timer ++;
    } else {
      this.driver.setScene(new JsScene(this.next));
    }
  }
  draw() {
    var x = Math.cos(frameCount*7)/this.timer*20;
    var y = Math.cos(frameCount*13)/this.timer*20;
    canvas.save();
    canvas.translate(x,y);
    super.draw();
    canvas.restore();
  }
}
class JsScene extends Scene {
  constructor(next) {
    super();
    SOUNDS.hit.play();
    this.image = IMAGES.unityLogo;
    this.logo =new ImageEntity(this.image, CE.width/2,CE.height/2,null,100);
    this.addEntity(new TextUI(
      "Made with",
      CE.width/2-this.logo.w*.45,CE.height*.38,20,
      {textAlign:'left', textBaseline: "top"}
    ));
    this.addEntity(new TextUI(
      "JavaScript",
      CE.width/2-this.logo.w*.45,CE.height*.48,40,
      {textAlign:'left', textBaseline: "top"}
    ));
    // this.addEntity(new TextUI(
    //   "And nothing else",
    //   CE.width/2-this.logo.w*.45,CE.height*.6,20,
    //   {textAlign:'left', textBaseline: "top"}
    // ));
    this.timer = 0;
    this.time = 180;
    this.next = next;
  }
  update() {
    super.update();
    if(this.timer<this.time) {
      this.timer ++;
    } else {
      SOUNDS.hit.play();
      this.driver.setScene(this.next);
    }
  }
  // draw() {
  //   var x = Math.cos(frameCount*7)/this.timer*20;
  //   var y = Math.cos(frameCount*13)/this.timer*20;
  //   canvas.save();
  //   canvas.translate(x,y);
  //   super.draw();
  //   canvas.restore();
  // }
  draw() {
    canvas.save();
    var t = this.timer/this.time;
    t= Math.sin(t*Math.PI);
    var a = t;
    var s = 1+t/1000;
    canvas.globalAlpha = a;
    canvas.translate(CE.width/2,CE.height/2);
    canvas.scale(s,s);
    canvas.translate(-CE.width/2,-CE.height/2);
    super.draw();
    canvas.globalAlpha = 1;
    canvas.restore();    
  }
}


class BDScene extends Scene {
  constructor(next) {
    super();
    SOUNDS.hit.play();
    this.image = IMAGES.unityLogo;
    this.logo =new ImageEntity(this.image, CE.width/2,CE.height/2,null,100);
    this.addEntity(new TextUI(
      "Made by",
      CE.width/2-this.logo.w*.45,CE.height*.38,20,
      {textAlign:'left', textBaseline: "top"}
    ));
    this.addEntity(new TextUI(
      "Brian Dizon",
      CE.width/2-this.logo.w*.45,CE.height*.48,40,
      {textAlign:'left', textBaseline: "top"}
    ));
    // this.addEntity(new TextUI(
    //   "And nothing else",
    //   CE.width/2-this.logo.w*.45,CE.height*.6,20,
    //   {textAlign:'left', textBaseline: "top"}
    // ));
    this.timer = 0;
    this.time = 180;
    this.next = next;
  }
  update() {
    super.update();
    if(this.timer<this.time) {
      this.timer ++;
    } else {
      SOUNDS.hit.play();
      this.driver.setScene(this.next);
    }
  }
  draw() {
    canvas.save();
    var t = this.timer/this.time;
    t= Math.sin(t*Math.PI);
    var a = t;
    var s = 1+t/1000;
    canvas.globalAlpha = a;
    canvas.translate(CE.width/2,CE.height/2);
    canvas.scale(s,s);
    canvas.translate(-CE.width/2,-CE.height/2);
    super.draw();
    canvas.globalAlpha = 1;
    canvas.restore();    
  }
}

class SplashScreen extends Scene {
  constructor(next) {
    super();
    this.image = IMAGES.unityLogo;
    this.logo =new ImageEntity(this.image, CE.width/2,CE.height/2,null,100);
    this.addEntity(this.logo);
    this.addEntity(new TextUI(
      "Made with",
      CE.width/2-this.logo.w*.45,CE.height*.38,20,
      {textAlign:'left', textBaseline: "top"}
    ));
    // this.addEntity(new TextUI(
    //   "JavaScript",
    //   CE.width/2-this.logo.w*.45,CE.height*.48,40,
    //   {textAlign:'left', textBaseline: "top"}
    // ));
    // this.addEntity(new TextUI(
    //   "And nothing else",
    //   CE.width/2-this.logo.w*.45,CE.height*.6,20,
    //   {textAlign:'left', textBaseline: "top"}
    // ));
    this.timer = 0;
    this.time = 180;
    this.next = next;
  }
  update() {
    super.update();
    if(this.timer<this.time) {
      this.timer ++;
    } else {
      this.driver.setScene(new this.next());
    }
  }
  draw() {
    canvas.save();
    var t = this.timer/this.time;
    t= Math.sin(t*Math.PI);
    var a = t;
    var s = 1+t/1000;
    canvas.globalAlpha = a;
    canvas.translate(CE.width/2,CE.height/2);
    canvas.scale(s,s);
    canvas.translate(-CE.width/2,-CE.height/2);
    super.draw();
    canvas.globalAlpha = 1;
    canvas.restore();    
  }
}

class LoadingScene extends Scene {
  constructor() {
    super();
    this.image = IMAGES.anityIcon;
    // this.addEntity(new ImageEntity(this.image, CE.width/2,CE.height/2,null,100));
    // this.addEntity(new ImageEntity(this.image, CE.width/2,CE.height/2,null,100));
    this.addEntity(new ModelEntity(this.arrows = new AnityModel(), CE.width/2, CE.height/2));
    function getLoaded() {
      return ImageLoader.getLoaded()/2+SOUNDS.getLoaded()/2;
    }
    this.addEntity(new LoadingBar(CE.width/2,CE.height*.6,100,10,4,"white").ValueSetter(getLoaded));
    // this.addEntity(new LoadingBar(CE.width/2,CE.height*.7,100,10,4,"white").ValueSetter(SOUNDS.getLoaded));
    // ImageLoader.onComplete(this.arrows.flip.bind(this.arrows))
  }
}

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
    if(this.timer--<=0||(keys[67]&&keys[77]&&DEV)) {
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
      x: 121,
      y: 376
    }
  }
}
  return [
{dialogue: true, text: "Alirght, Johnson. Lets get out of here", person: CHARACTERS.Kwak},
{dialogue: true, text: "...", person: CHARACTERS.Johnson},
{dialogue: true, text: "Calculating Stability Offset", person: CHARACTERS.Computer},
{dialogue: true, text: "*Crash", sound: SOUNDS.crash, screenShake: 5, person: CHARACTERS.Door},
{dialogue: true, text: "Ugg we don't have enough time, I'll calculate it myself", person: CHARACTERS.Kwak, sound: SOUNDS.keyboardSounds1},
{dialogue: true, text: "Uhh are you sure about this, Nib?", person: CHARACTERS.Johnson},
{dialogue: true, text: "*Crash", sound: SOUNDS.crash, screenShake: 5, person: CHARACTERS.Door},
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
    };
    this.screenShake = 0;
    this.zoom = 1;
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
    if(DEV&&getButtonDown(Buttons.cheatForward)) {
      this.loadNextLevel();
      this.player.addShoes();
    }
    if(DEV&&getButtonDown(Buttons.cheatBackward)) {
      this.loadPrevLevel();
    }
    if(keys[69]&&DEV) {
      MainDriver.setScene(new LevelEditorScene(this.level,this.player.x,this.player.y));
    }
    var target = this.camera.target;
    var ty = target.y;
    if(!this.dialogueController.done) {
      ty += CE.height/20;
    }
    this.camera.x += Math.floor((target.x-this.camera.x)/10);
    this.camera.y += Math.floor((ty-this.camera.y)/10);
    if(this.camera.x-CE.width/2 < 0) {
      this.camera.x = CE.width/2;
    }
    if(this.camera.y-CE.height/2<0) {
      this.camera.y = CE.height/2;
    }

    if(this.camera.x+CE.width/2 > this.level.width) {
      this.camera.x = this.level.width - CE.width/2;
    }
    if(this.camera.y+CE.height/2> this.level.height) {
      this.camera.y = this.level.height-CE.height/2;
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
    this.camera.target = this.player;
    this.player.inputBlocked = false;
    this.addEntity(this.level = new Level(level));
    this.addEntity(this.player);
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
      canvas.translate(CE.width/2-this.camera.x,CE.height/2-this.camera.y);
      canvas.rotate(this.camera.rotation);
      super.draw();
    canvas.restore();
    var cx =CE.width/2-this.camera.x;
    var cy =CE.height/2-this.camera.y;
    this.entities.forEach(function(e) {
      if(e.lightDraw) {
        e.lightDraw(ctx,cx,cy);
      }
    })
    // var ambient = "#ffffffaa";    
    var ambient = this.ambient;
    ctx.fillStyle = ambient;
    ctx.fillRect(0,0,CE.width,CE.height)
    canvas.globalCompositeOperation = "destination-in";
    canvas.drawImage(this.LightMask.CE, 0,0);
    canvas.globalCompositeOperation = "source-over";

    this.dialogueController.draw();
  }
  respawn() {
    this.player.health = this.player.maxHealth;
    this.player.shouldDelete = false;
    this.loadLevel(this.level.level);
    this.camera.target = this.player;
    this.camera.x = this.player.x;
    this.camera.y = this.player.y;
  }
}

class SimpleDialogue {
  constructor() {
    this.text= "";
    this.person = "";
    this.index= 0;
    this.impatience = 0;
  }
  setText(obj) {
    this.text = obj.text;
    this.person = obj.person;
    this.index = 0;//this.text.length;
    this.impatience = 0;
    this.done = false;
    if(obj.person) {
      this.talkSound = obj.person.talkSound;
      this.every = obj.person.every;
    } else {
      this.talkSound = null;
    }
  }
  reset() {
    this.index = 0;
  }
  update() {
    if(this.index<this.text.length&&frameCount%2==0) {
      this.index += 1;
      if(this.talkSound) {
        if(this.every) {
          if((frameCount>>1)%this.every==0) {
            this.talkSound.play();
          }
        } else {
          this.talkSound.play();
        }
      }
    }
    if(this.index>=this.text.length) {
      this.impatience ++;
      if(this.impatience>30&&this.scene.player.mx!=0) {
        this.done = true;
      }
    }
  }
  progress() {
    if(this.index>=this.text.length) {
      this.done = true;
    } else {
      if(this.talkSound) {
        this.talkSound.play();
      }
      this.index = this.text.length;
    }
  }
  draw() {
    if(this.text=='')return;
    canvas.fillStyle = "#000000aa";
    canvas.fillRect(0,CE.height*.8,CE.width,CE.height*.2);
    if(this.person) {
      canvas.fillRect(0,CE.height*.75,CE.width*.3,CE.height*.05);
    }
    canvas.fillStyle = "white";
    canvas.textBaseline = "top";
    canvas.font = "30px Arial";
    canvas.textAlign = "left";
    if(this.person) {
      canvas.fillText(this.person.name, CE.width/50,CE.height*.77);
    }
    canvas.font = "25px Arial";
    var text = this.text.substring(0,this.index);
    var words = text.split(" ");
    var text1 = '';
    var text2 = '';
    for(var i=0;i<words.length;i++) {
      if(i<10)
        text1 += words[i]+' ';
      else
        text2 += words[i]+' ';
    }
    canvas.fillText(text1, CE.width/30,CE.height*.85);
    canvas.fillText(text2, CE.width/30,CE.height*.9);
    if(this.impatience>60) {
      var t = ' (press space)';//.substring(0,this.impatience-60);
      canvas.textAlign = 'right';
      canvas.fillText(t, CE.width*.99,CE.height*.95);
    }
  }
}

class WaitForEnemyClear {
  constructor(scene) {
    this.scene = scene;
  }
  progress() {}
  update() {
    if(this.scene.enemyCount <=0)this.done=true;
  }
}

class WaitForFrames {
  constructor(frames) {
    this.frames = frames;
  }
  progress() {}
  update() {
    this.frames--;
    if(this.frames<0) {
      this.done = true;
    }
  }
}

class WaitForProximity {
  constructor(e1,e2,r) {
    this.e1=e1;
    this.e2=e2;
    this.r=r;
    this.done = false;
  }
  progress() {}
  update() {
    var dx = this.e1.x-this.e2.x;
    var dy = this.e1.y-this.e2.y;
    var r = Math.sqrt(dx*dx+dy*dy) 
    if(r<=this.r) {
      this.done = true;
    }
  }
}

class DialogueController {
  constructor(sequence, gameScene) {
    this.gameScene = gameScene;
    this.sequence = sequence;
    this.index = 0;
    this.done = false;
    this.current = null;
    this.simpleDialogue = new SimpleDialogue();
    this.simpleDialogue.scene = this.gameScene;
    if(sequence)
    this.processData(this.sequence[0]);
    this.lastSpeaker = null;
    this.conditions = [];
  }
  add(sequence) {
    this.setSequence(sequence);
  }
  setSequence(sequence) {
    this.conditions = [];
    this.persist = false;
    this.simpleDialogue.text = '';
    this.done = false;
    this.current = null;
    this.sequence = sequence;
    this.index = 0;
    this.processData(this.sequence[0]);
  }
  processData(event) {
    if(event.setCondition) {
      this.conditions.push([event.setCondition, event.conditionTarget]);
    }
    if(event.text) {
      this.simpleDialogue.setText(event)
      this.current = this.simpleDialogue;
      if(event.person&&event.person.obj&&!event.doNotTarget) {
        this.gameScene.camera.target = event.person.obj;
        event.person.obj.isTalking = true;
        this.lastSpeaker = event.person.obj;
      }
      if(event.doNotWait) {
        this.simpleDialogue.progress();
        this.next();
      }
    }
    if(event.persist) {
      this.persist = true;
    }
    if(event.sceneTransition) {
      MainDriver.setScene(new event.scene());
    }
    if(event.screenShake) {
      this.gameScene.screenShake = event.screenShake;
    }
    if(event.sound) {
      event.sound.play();
    }
    if(event.spawn) {
      var x = (event.tx+0.5) * this.gameScene.level.cellWidth;
      var y = (event.ty+0.5) * this.gameScene.level.cellHeight;
      var e = this.gameScene.addEntity(new event.spawn(x,y));
      if(event.target) {
        this.gameScene.camera.target = e;
      }
    } else if(event.target) {
      this.gameScene.camera.target = event.target;
    }
    if(event.waitForProximity) {
      var e1 = this.gameScene.specialActors[event.e1];
      var e2 = this.gameScene.specialActors[event.e2];
      this.current = new WaitForProximity(e1,e2,event.r);
    }
    if(event.set) {
      var e = (event.person && event.person.obj)||this.gameScene.specialActors[event.entity];
      Object.assign(e, event.set);
    }
    if(event.waitFor) {
      this.current = new WaitForFrames(event.waitFor);
    }
    if(event.nextLevel) {
      this.gameScene.loadNextLevel();
    }
    if(event.music) {
      MusicHandler.playMusic(event.music);
    }
    if(event.musicStop) {
      MusicHandler.stop();
    }
    if(event.fadeToBlack) {
      this.current = {update(){},draw(){},progress(){}};
      MainDriver.fadeToBlack(event.fadeToBlack, e=>{
        if(this.current)
          this.current.done = true;
        this.next()
      });
    }
    if(event.fadeIn) {
      this.current = {update(){},draw(){},progress(){}};
      MainDriver.fadeIn(event.fadeIn, e=>{
        if(this.current)
          this.current.done = true;
        this.next()
      });
    }
    if(event.waitForEnemyClear) {
      this.current = new WaitForEnemyClear(this.gameScene);
    }
    if(this.current == null) {
      this.next();
    }
  }
  processCondition(con) {
    if(con.pxG) {
      if(this.gameScene.player.x>con.pxG)return true;
    }
    return false;
  }
  update() {
    for(var i=0;i<this.conditions.length;i++) {
      var con = this.conditions[i];
      if(this.processCondition(con[0])) {
        this.setSequence(GetDialogueData(this.gameScene, con[1]));
      }
    }
    if(this.current) {
      this.current.update();
      if(getButtonDown(Buttons.A)) {
        this.current.progress();
      }
      if(this.current.done) {
        this.next()
      }
    }
    // if(this.index >= this.sequence.length) {
    //   this.done = true;
    //   return;
    // }
    // var current = this.sequence[this.index];
    // this.current = current;
    // current.update();
    // if(getButtonDown(Buttons.A)) {
    //   current.progress();
    // }
    // if(current.done) {
    //   this.next();
    // }
  }
  next() {
    if(this.lastSpeaker) {
      this.lastSpeaker.isTalking = false;
    }
    this.index += 1;
    if(this.index >= this.sequence.length) {
      this.done = true;
    } else {
      this.processData(this.sequence[this.index]);
    }
  }
  draw() {
    if(this.done&&!this.persist)return;
    // if(this.current&&this.current.draw)
      // this.current.draw();
    this.simpleDialogue.draw();
  }
}

var IMAGES = {};
var ImageLoader = {
  imagesToLoad: 0,
  loaded: 0,
  onCompleteEvents: [],
  directory: './Assets/images/',
  getLoaded() {
    return ImageLoader.loaded/ImageLoader.imagesToLoad;
  },
  loadImage(src) {
    var img = new Image();
    img.src=this.directory+src;
    this.imagesToLoad += 1;
    img.onload = this.onLoad;
    return img;
  },
  onLoad() {
    ImageLoader.loaded++;
    if(ImageLoader.loaded>=ImageLoader.imagesToLoad) {
      ImageLoader.onCompleteEvents.forEach(function(f){f()});
      ImageLoader.onCompleteEvents = [];
    }
  },
  onComplete(callback) {
    if(this.loaded>=this.imagesToLoad) {
      callback();
    } else {
      this.onCompleteEvents.push(callback);
    }
  }
}


function linearMove(start,target,step) {
  var diff = target-start;
  if(Math.abs(diff)<step)return target;
  if(diff>0) return start + step;
  return start - step;
}

//  Copyright Brian Dizon 2019

var keys = [];
var anyKey = 0;
var anyKeyDown = 0;
function resetKeys() {
  for(var i=0;i<255;++i)keys[i]=0;
  anyKey = 0;
}

function onkeydown(e) {
  var k = e.keyCode;
  if(!e.metaKey) {
    if(!keys[k]) {
      anyKey += 1;
      anyKeyDown = true;
    }
    keys[k]=true;
    e.preventDefault();
  }
}

function onkeyup(e) {
  anyKey -= 1;
  var k = e.keyCode;
  keys[k]=false;
}


window.addEventListener('keydown', onkeydown);
window.addEventListener('keyup', onkeyup);
window.addEventListener('load', resetKeys);
window.addEventListener('blur', resetKeys);
window.addEventListener('focus', resetKeys);
window.addEventListener('contextmenu', resetKeys);

//  Copyright Brian Dizon 2019

var gamepadOn = false;
var gamepadAnyButton = 0;
var gamepadAnyButtonDown = 0;

var gamepadJoysticks = [
  {held:false, output: {x: 0, y: 0, angle: 0 }},
  {held:false, output: {x: 0, y: 0, angle: 0 }},
]
var gamepadButtons = [];
// for(var i=0;i<255;i++) gamepadButtons[i]=0;

function pressed(b) {
  return b && (b==1 || b.pressed);
}

function handleGamePad() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  // if(gamepads2.length>0)
  for(var i=0;i<gamepads.length;i++) {
    var gp = gamepads[i];
    if(!gp || gp.buttons.length <= 0)continue;
    if(gp.axes) {
      var x1 = gp.axes[0];
      var y1 = gp.axes[1];
      if(Math.abs(x1)<.25)x1=0;
      if(Math.abs(y1)<.25)y1=0;

      var angle = Math.atan2(y1,x1);
      gamepadJoysticks[0].output = {x:x1,y:y1,angle};
      if(x1!=0||y1!=0) {
        gamepadJoysticks[0].held = true;
        // gamepadOn = true;
      } else {
        gamepadJoysticks[0].held = false;
      }

      var x2 = gp.axes[3];
      var y2 = gp.axes[4];
      if(Math.abs(x2)<.25)x2=0;
      if(Math.abs(y2)<.25)y2=0;
      angle = Math.atan2(y2,x2);
      gamepadJoysticks[1].output = {x:x2,y:y2,angle};
      gamepadJoysticks[1].held = x2!=0||y2!=0;
    }
    if(gp.buttons) {
      gamepadAnyButton = 0;
      gp.buttons.forEach((b,i) => {
        var p = pressed(b);
        if(p) {
          gamepadOn = true;
          gamepadAnyButton+=1;
          if(!gamepadButtons[i]) gamepadAnyButtonDown = true;
        }
        gamepadButtons[i] = p;
      });
    }
  }
}
  

//  Copyright Brian Dizon 2019

var mouse = {
  x: 0, y:0,
}
function onmousemove(e) {
  var boundingClientRect = e.target.getBoundingClientRect();
  x = e.clientX-boundingClientRect.left;
  y = e.clientY-boundingClientRect.top;
  x *= CE.width/e.target.offsetWidth;
  y *= CE.height/e.target.offsetHeight;
  mouse.x = x;
  mouse.y = y;
}

function onmousedown(e) {
  onmousemove(e);
  touchOn = false;
  gamepadOn = false;
  mouse.down = true;
  mouse.held = true;
  initializeSound();
}

function onmouseup(e) {
  mouse.held = false;
}

window.addEventListener('load', function(e) {
  window.addEventListener('mousemove', onmousemove);
  window.addEventListener('mousedown', onmousedown);
  window.addEventListener('mouseup', onmouseup);
})

//  Copyright Brian Dizon 2019

var touchOn = false;
touchStarts = [];
var touchJoySticks = [
  {
    x: .15, y:.75, r: .2,
    area: {
      x: 0, y: 0, w: 0.5, h: 1
    },
    output: {x: 0, y: 0, angle: 0,r:0},
    held: false,
  },
  {
    x: -.85, y:.75, r: .2,
    area: {
      x: 0, y: 0, w: 0, h: 1
    },
    output: {x: 0, y: 0, angle: 0,r:0},
    held: false,
  }
];

var touchButtons = [
  {
    name: 'A',
    x: .65, y:.75, r:.1,
    area: {
      x: 0.5, y: 0, w: 0.25, h:1
    },
    held: false,
  },{
    name: 'B',
    x: .85, y:.75, r:.1,
    area: {
      x: 0.75, y: 0, w: 0.25, h:1
    },
    held: false,
  },
]


function getTouchPosition(touch, e) {
  var boundingClientRect = CE.getBoundingClientRect();    
  var x = touch.pageX-boundingClientRect.left;
  var y = touch.pageY-boundingClientRect.top - document.body.scrollTop;
  var W = this.canvas.canvas.offsetWidth;
  var H = this.canvas.canvas.offsetHeight;
  x = x/W;
  y = y/H;
  return{x,y};
}

function pointInRect(x,y,rect) {
  return x >= rect.x && x<=rect.x+rect.w &&
    y >= rect.y && y <= rect.y+rect.h;
}

function touchDraw() {
  for(var i=0;i<touchJoySticks.length;++i) {
    var joyStick = touchJoySticks[i];
    var angle = joyStick.output.angle;
    var w = joyStick.r*CE.height;
    var h = w*60/50;
    canvas.save();
    canvas.translate(joyStick.x*CE.width, joyStick.y*CE.height);
    canvas.rotate(angle+Math.PI/2);
    var color = 'rgba(255,255,255,0.5)';
    if(joyStick.held)color = 'rgba(255,0,0,0.5)';
    canvas.fillStyle = color;
    canvas.fillRect(-w/2,-h/2,w,h);
    canvas.restore();
  }
  for(var i=0;i<touchButtons.length;i++) {
    var button = touchButtons[i];
    var x = button.x * CE.width;
    var y = button.y * CE.height;
    var w = button.r * CE.width;
    var h = button.r * CE.height;
    var color = 'rgba(255,255,255,0.5)';
    if(button.held)color = 'rgba(255,0,0,0.5)';
    canvas.fillStyle = color
    canvas.fillRect(x-w/2,y-h/2,w,h);
  }
}

function touchstart(e) {
  initializeSound();
  touchOn = true;
  // if(this.scene.startGame)this.scene.startGame();
  // if(this.scene.time)this.scene.time=0;
  var touches = e.changedTouches;
  e.preventDefault();
  e.stopImmediatePropagation();
  for(var i=0;i<touches.length;i++) {
    var touch = e.changedTouches[i];
    var {x, y} = this.getTouchPosition(touch, e);
    touchStarts.push({x,y});
    for(var j=0;j<touchJoySticks.length;j++) {
      var joyStick = touchJoySticks[j];
      if(pointInRect(x,y,joyStick.area)) {
        var dx = x - joyStick.x;
        var dy = y - joyStick.y;
        var r = Math.sqrt(dx*dx+dy*dy);
        // var magnitude = r/joyStick.r;
        // if(magnitude>1)magnitude=1;
        var magnitude=1;
        joyStick.output = {
          x: dx/r*magnitude,
          y: dy/r*magnitude,
          angle: Math.atan2(dy,dx),
          r: r,
        };
        joyStick.held = true;
      }
    }
    for(var j=0;j<touchButtons.length;j++) {
      var button = touchButtons[j];
      if(pointInRect(x,y,button.area)) {
        button.held = true;
      }
    }
  }
}
function touchend(e) {
  // if(this.scene.startGame)this.scene.startGame();
  // if(this.scene.time)this.scene.time=0;
  var touches = e.changedTouches;
  e.preventDefault();
  e.stopImmediatePropagation();
  for(var i=0;i<touches.length;i++) {
    var touch = e.changedTouches[i];
    var {x, y} = this.getTouchPosition(touch, e);
    for(var j=0;j<touchJoySticks.length;j++) {
      var joyStick = touchJoySticks[j];
      if(pointInRect(x,y,joyStick.area)) {
        joyStick.held = false;  
      }
    }
    for(var j=0;j<touchButtons.length;j++) {
      var button = touchButtons[j];
      if(pointInRect(x,y,button.area)) {
        button.held = false;
      }
    }
  }
}


  window.addEventListener('touchstart', touchstart,{ passive: false });
  window.addEventListener('touchmove', touchstart,{ passive: false });
  window.addEventListener('touchend', touchend);
  window.addEventListener('touchcancel', touchend);

//  Copyright Brian Dizon 2019

var Buttons = {
  toCache: [],
};

var Axes = [
  {down: false, previous: 0},
  {down: false, previous: 0},
]

function inputUpdate() {
  handleGamePad();
  anyKeyDown = false;
  gamepadAnyButtonDown = false;
  mouse.down = false;
  touchStarts = [];
  Buttons.toCache.forEach(function(e) {
    e.cache = e.toCache;
  })
  Buttons.toCache = [];
  Axes.forEach(function(e) {
    e.previous = e.toPrevious;
    e.down = true;
  })
}

function getAnyDown() {
  return anyKeyDown || touchStarts.length>0 || mouse.down || gamepadAnyButtonDown;
}

function getAxes() {
  if(touchOn&&touchJoySticks[0].held) {
    return {
      inputX: touchJoySticks[0].output.x,
      inputY: touchJoySticks[0].output.y,
    }
  }
  if(gamepadOn&&gamepadJoysticks[0].held) {
    return {
      inputX: gamepadJoysticks[0].output.x,
      inputY: gamepadJoysticks[0].output.y,
    }
  }
  var inputX = (keys[68]||keys[39])-(keys[65]||keys[37]);
  var inputY = (keys[83]||keys[40])-(keys[87]||keys[38]);
  return {inputX, inputY};
}

function getAxesNormal() {
  var {inputX, inputY} = getAxes();
  var r = Math.sqrt(inputX*inputX+inputY*inputY);
  if(r>1) {
    inputX = inputX/r;
    inputY = inputY/r;
    r=1;
  }
  return {inputX, inputY, inputR:r};
}

function getAxesDown() {
  var {inputX,inputY} = getAxes();
  var ix = Math.round(inputX);
  var iy = Math.round(inputY);
  if(Axes[0].previous != ix) {
    Axes[0].down = true;
    Axes[0].toPrevious = ix;
  } else {
    ix = 0;
  }
  if(Axes[1].previous != iy) {
    Axes[1].down = true;
    Axes[1].toPrevious = iy;
  } else {
    iy = 0;
  }
  return {
    inputX: ix,
    inputY: iy,
  }
}

function getButton(button) {
  if(button.keys) {
    if(button.allKeys) {
      for(var i=0;i<button.keys.length;i++) {
        if(!keys[button.keys[i]])return false;
      }
      return true;
    }
    for(var i=0;i<button.keys.length;i++) {
      if(keys[button.keys[i]])return true;
    }
  }
  if(gamepadOn&&button.buttons)
  for(var i=0;i<button.buttons.length;i++) {
    if(gamepadButtons[button.buttons[i]])return true;
  }
  if(touchOn&&button.touchButtons)
  for(var i=0;i<button.touchButtons.length;i++) {
    if(touchButtons[button.touchButtons[i]].held)return true;
  }
  return false;
}

function getButtonDown(button) {
  //kind of requires this to be called every frame,
  //also only works once per frame. this is pretty bad.
  var current = getButton(button);
  var last = button.cache;
  button.toCache = current;
  // button.cache = current;
  Buttons.toCache.push(button);
  if(current && !last)return true;
  return false;
}

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
  play() {
    this.sounds[this.index].play();
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
if(!OnFile) SoundTag = SoundSource;

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

//  Copyright Brian Dizon 2019

function checkHost() {
  var knownHosts = ['bmarcelus.github.io', 'niborious.itch.io','uploads.ungrounded.net'];
  var devHosts = ['localhost', '127.0.0.1'];
  try {
    var params = new URLSearchParams(window.location.search);
    if(window.location.origin != "file://" ||  params.has("illegal")) {
      var hostname = window.location.hostname;
      console.log(hostname);
      if(knownHosts.indexOf(hostname)<0) {
        console.log("Wait thats illegal");
        if(devHosts.indexOf(hostname)<0) {
          NotifyStealer();
        } else {
          NotifyIllegalDev();
        }
      }
      return true;
    }
  } catch (e) {
    console.log("Error ", e);
    NotifyStealer();    
  }
}

function NotifyStealer() {
  var gameName = "House";
  var win = window.open("https://bmarcelus.github.io/potentialBreachOfCopyright.html?gameName="+gameName+"&illegalHost="+window.location.hostname+'$illegalPath='+window.location, '_blank');
  win.focus();
  window.location = "https://bmarcelus.github.io/" + gameName + '/?from=' + window.location;
}

function NotifyIllegalDev() {
  if(DEV)return;
  var gameName = "House";
  var win = window.open("https://bmarcelus.github.io/howToDoLegalBusiness.html?gameName="+gameName+"&illegalHost="+window.location.hostname+'$illegalPath='+window.location, '_blank');
  win.focus();
}


// checkHost();

//  Copyright Brian Dizon 2019

var CE = document.getElementById('gc');
var canvas = CE.getContext('2d');
var canvasPercent = "100%";

var SCREEN_CANVASES = [];

function createScreenCanvas() {
  var C = document.createElement('canvas');
  C.width = CE.width;
  C.height = CE.height;
  var ctx = C.getContext('2d');
  SCREEN_CANVASES.push(ctx);
  return {
    CE: C,
    canvas: ctx
  }
}


canvas.fillRectFloor = function(x,y,w,h){
  this.fillRect(Math.floor(x),Math.floor(y),Math.floor(w),Math.floor(h));
}

function onresize(e){
  var rw = window.innerWidth/window.innerHeight;
  var rc = CE.width/CE.height;
  if(rw >= rc) {
    CE.style.height = "100%";
    CE.style.width = "";
  } else {
    CE.style.width = "100%";
    CE.style.height = "";
  }
  
  canvas.imageSmoothingEnabled = false;
  canvas.mozImageSmoothingEnabled=false;
  canvas.msImageSmoothingEnabled = false;
  canvas.oImageSmoothingEnabled=false;
  canvas.webkitImageSmoothingEnabled=false;

  SCREEN_CANVASES.forEach(function(canvas) {
    canvas.imageSmoothingEnabled = false;
    canvas.mozImageSmoothingEnabled=false;
    canvas.msImageSmoothingEnabled = false;
    canvas.oImageSmoothingEnabled=false;
    canvas.webkitImageSmoothingEnabled=false;
  })
}

window.addEventListener('resize', onresize);
window.addEventListener('load', onresize);

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
  "Lair",
  "Lair2",
  "BossHall",
  "Boss",
  "Cage",
  "Win",
  "worldPan",
]);

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
        if(tileIndex==2 && this.tileSetIndex==1) {
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
    if(y<=0)return 0;
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

class Model {
  constructor(parent) {
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.parent = parent;
    this.parts = [];
    this.outlineColor = "black";
  }
  update(){}
  createLimb(x,y,drawable,rotation) {
    var limb = new Limb(x,y,drawable,rotation);
    limb.parent=this;
    limb.model=this;
    this.parts.push(limb);
    return limb;
  }
  draw(x,y) {
    canvas.save();
    canvas.translate(x,y);
    canvas.rotate(this.rotation);
    canvas.scale(this.scaleX,this.scaleY);
    // canvas.strokeRect(-this.w/2,-this.h/2,this.w,this.h);
    this.parts.forEach(function(e) {
      e.draw();
    });
    canvas.restore();
  }
  drawOutline(x,y) {
    var color = this.outlineColor;
    canvas.save();
    canvas.translate(x,y);
    canvas.rotate(this.rotation);
    canvas.scale(this.scaleX,this.scaleY);
    // canvas.strokeRect(-this.w/2,-this.h/2,this.w,this.h);
    this.parts.forEach(function(e) {
      e.draw({color: color, dw: 1});
    });
    canvas.restore();
  }
  drawHighlight(x,y) {
    canvas.save();
    canvas.translate(x,y);
    canvas.rotate(this.rotation);
    canvas.scale(this.scaleX,this.scaleY);
    // canvas.strokeRect(-this.w/2,-this.h/2,this.w,this.h);
    this.parts.forEach(function(e) {
      e.draw();
      e.draw({color: "#ffffff88", dw: -2,dx:1,dy:-1});
    });
    canvas.restore();
  }
}

class ChomperModel extends Model {
  constructor(w,h,color,parent) {
    super(parent);
    this.body = this.createLimb(0,h/2);
    this.top = this.body.createAfter(-w/2,0,new ImageDrawable(IMAGES.ChomperTop,w/2,0,w));
    this.bottom = this.body.createAfter(-w/2,0,new ImageDrawable(IMAGES.ChomperTop,-w/2,0,w),Math.PI);

    this.face = this.top.createAfter(w/2,-h/16);
    this.face.createAfter(-w/8,0,new Circle(0,0,w/20,'white'));
    this.face.createAfter(w/8,0,new Circle(0,0,w/20,'white'));
  }
  update() {
    this.top.rotation = Math.cos(frameCount*Math.PI/20)*Math.PI/10-Math.PI/3;
    var d = this.parent.vy/40 || 0;
    d+=Math.cos(frameCount*Math.PI/40)/10;
    this.scaleX += (1-d-this.scaleX)/10;
    this.scaleY += (1+d-this.scaleY)/10;
    if(this.crouching&&this.grounded) this.crouch();
    if(this.grounded) {
      if(this.scaleY<1)
        this.body._y = (1-this.scaleY)*this.h;
      else
        this.body._y = (1-this.scaleY)*this.h/4;
    } else if(this.ceilingCollide) {
      this.body._y = -(1-this.scaleY)*this.h;
    } else {
      this.body._y=0;
    }
    // this.face._x = this.parent.dx*2;
    this.rotation = Math.cos(frameCount*Math.PI/10)*Math.PI/20*this.parent.vx/this.parent.speed;
   
  }
  crouch() {
    this.scaleY = 0.5;
    this.scaleX = 1.5;
  }
  jump() {
    this.scaleY = 2;
    this.scaleX = .5;
  }
  doubleJump() {
    this.scaleY = 2;
    this.scaleX = .5;
  }
  wallCollide() {
    var d = Math.abs(this.parent.vx)/30;
    this.scaleX = 1-d;
    this.scaleY = 1+d;
  }
  attack() {

  }
  land() {
    this.scaleY = .8;
    this.scaleX = 1.2+Math.abs(this.parent.vy)/20;
  }
  draw(...args) {
    // var sx = this.scaleX;
    // if(this.parent.dx<0) {
    //   this.scaleX = -1;
    // }
    // if(this.parent.dx<0)this.scaleX = -1;
    // else this.scaleX = 1;
    if(this.parent.vx<0)
      this.scaleX = -1;
    else
      this.scaleX = 1;
      super.draw(...args);
    // this.scaleX = sx;
  }
}

class SunFlowerModel extends Model {
  constructor(parent) {
    super(parent);
    var w = 40;
    var h = 40;
    this.happy = new ImageDrawable(IMAGES.sunflower,0,0,w);
    this.evil = new ImageDrawable(IMAGES.evilSunflower,0,0,w*1.5)
    this.body = this.createLimb(0,0,this.happy);
    this.isEvil = false;
  }
  becomeEvil() {
    if(this.isEvil)return;
    SOUNDS.evilFlower.play();
    this.isEvil = true;
    this.body.drawable = this.evil;
    this.scaleX = 0.5;
    this.scaleY = 0.5;
  }
  update() {
    var d = this.parent.vy/40 || 0;
    d+=Math.cos(frameCount*Math.PI/40)/10;
    this.scaleX += (1-d-this.scaleX)/10;
    this.scaleY += (1+d-this.scaleY)/10;
    if(this.crouching&&this.grounded) this.crouch();
    if(this.grounded) {
      if(this.scaleY<1)
        this.body._y = (1-this.scaleY)*this.h;
      else
        this.body._y = (1-this.scaleY)*this.h/4;
    } else if(this.ceilingCollide) {
      this.body._y = -(1-this.scaleY)*this.h;
    } else {
      this.body._y=0;
    }
    // this.face._x = this.parent.dx*2;
    this.rotation = Math.cos(frameCount*Math.PI/10)*Math.PI/20*this.parent.vx/this.parent.speed;
  }
  crouch() {
    this.scaleY = 0.5;
    this.scaleX = 1.5;
  }
  jump() {
    this.scaleY = 2;
    this.scaleX = .5;
  }
  doubleJump() {
    this.scaleY = 2;
    this.scaleX = .5;
  }
  wallCollide() {
    var d = Math.abs(this.parent.vx)/30;
    this.scaleX = 1-d;
    this.scaleY = 1+d;
  }
  attack() {

  }
  land() {
    this.scaleY = .8;
    this.scaleX = 1.2+Math.abs(this.parent.vy)/20;
  }
}

class StickModel extends Model {
  constructor(w,h,color,parent) {
    super(parent)
    this.w=w;this.h=h;
    this.color=color;
    
    var lw = h/20;
    var hr = h/8;
    var bl = h*.4;
    var ll = (h-bl-hr*2)/2;
    var al = bl/2;
    var sl = h*6/10;
    this.ll=ll;
    this.bl = bl;
    this.al = al;
    this.sl = sl;
    this.attacking = false;
    this.attackSound = SOUNDS.enemyAttack;
    this.body = this.createLimb(0,h/2-ll*2,new Line(0,0,0,-bl,lw,'round',color));
    this.head = this.body.createAfter(0,-bl,new Circle(0,-hr,hr,color));
    this.face = this.head.createAfter(0,-hr, new ImageDrawable(IMAGES.daniHelm, 0,0,null,hr*3.4));
    // this.trail = this.head.createBefore(0,-hr*2, new CurveTrail(0,0,10,'round', 'red'));
    // this.face = this.head.createAfter(0,-5);
    // this.eye1 = this.face.createAfter(-2,0,new Circle(0,0,2,'white'));
    // this.eye2 = this.face.createAfter(4,0,new Circle(0,0,2,'white'));
    this.thigh1= this.body.createBefore(0,0,new Line(0,0,0,ll,lw,'round',color),Math.PI/8);
    this.calf1 = this.thigh1.createAfter(0,ll,new Line(0,0,0,ll,lw,'round',color),-Math.PI/8);
    this.thigh2= this.body.createBefore(0,0,new Line(0,0,0,ll,lw,'round',color),-Math.PI/8);
    this.calf2 = this.thigh2.createAfter(0,ll,new Line(0,0,0,ll,lw,'round',color),Math.PI/8);
    this.arm1 = this.body.createAfter(0,-bl+lw,new Line(0,0,0,al,lw,'round',color),Math.PI/10);
    this.forearm1 = this.arm1.createAfter(0,al,new Line(0,0,0,al,lw,'round',color),Math.PI/4);
    this.arm2 = this.body.createAfter(0,-bl+lw,new Line(0,0,0,al,lw,'round',color),-Math.PI/10);
    this.forearm2 = this.arm2.createAfter(0,al,new Line(0,0,0,al,lw,'round',color),Math.PI/20);
    this.sword = this.forearm1.createAfter(0,al,new ImageDrawable(IMAGES.daniSword, 0,-sl/2+lw,null,sl),Math.PI);
    this.limbs = [
      this.thigh1,this.thigh2,this.calf1,this.calf2,this.arm1,this.arm2,this.forearm1,this.forearm2,
      this.body,this.head,
      // this.sword,
      // this.trail
    ];

    this.thigh1.lx=0;
    this.thigh2.lx=0;
    this.sword.lx=0;
    this.limbs.forEach(e=>{
      // e.offset=Math.random()*10;
      // e.frq = Math.random();
      e.dr=0;
      // e.rotation += (Math.random()-0.5)*Math.PI
    })
    this.dr=0;
    this.body._vy = 0;
  }
  wallCollide(){}
  land(){}
  jump(){
    // this.arm1.dr += 1;
  }
  doubleJump() {
    this.body.rotation += Math.PI*this.parent.dx;
    // this.body.dr += this.parent.dx*10;
  }
  groundedUpdate() {
    var ll1 =
    Math.cos(this.body.rotation+this.thigh1.rotation)*this.ll+
    Math.cos(this.body.rotation+this.thigh1.rotation+this.calf1.rotation)*this.ll;
  var lx1 = 
    Math.sin(this.body.rotation+this.thigh1.rotation)*this.ll+
    Math.sin(this.body.rotation+this.thigh1.rotation+this.calf1.rotation)*this.ll;

  var ll2 =
    Math.cos(this.body.rotation+this.thigh2.rotation)*this.ll+
    Math.cos(this.body.rotation+this.thigh2.rotation+this.calf2.rotation)*this.ll;
  var lx2 = 
    Math.sin(this.body.rotation+this.thigh2.rotation)*this.ll+
    Math.sin(this.body.rotation+this.thigh2.rotation+this.calf2.rotation)*this.ll;

  var ll3 = 
    Math.cos(this.body.rotation+Math.PI)*this.bl +
    Math.cos(this.body.rotation+this.arm1.rotation)*this.al+
    Math.cos(this.body.rotation+this.arm1.rotation+this.forearm1.rotation)*this.al+
    Math.cos(this.body.rotation+this.arm1.rotation+this.forearm1.rotation+this.sword.rotation+Math.PI)*this.sl;
  var lx3 = 
    Math.sin(this.body.rotation+Math.PI)*this.bl +
    Math.sin(this.body.rotation+this.arm1.rotation)*this.al+
    Math.sin(this.body.rotation+this.arm1.rotation+this.forearm1.rotation)*this.al+
    Math.sin(this.body.rotation+this.arm1.rotation+this.forearm1.rotation+this.sword.rotation+Math.PI)*this.sl;

  var dx1 = this.thigh1.lx - lx1;
  var dx2 = this.thigh2.lx - lx2;
  var dx3 = this.sword.lx - lx3;
  this.thigh1.lx = lx1;
  this.thigh2.lx = lx2;
  this.sword.lx = lx3;

  var tl = ll1;
  var tx = dx1;
  var obj = this.thigh1;
  if(ll2>ll1) {
    tl = ll2;
    tx = dx2;
    obj=this.thigh2;
  }
  if(ll3>tl) {
    // tl=ll3;
    // tx = dx3;
    // obj = this.arm1;
    // this.forearm1.dr=0;
    // this.arm1.dr=0;
    this.forearm1.dr += (0.05-this.forearm1.dr)/3;
    // this.arm1.dr += 0.01;
    // this.arm1.rotation += 0.4;
  } 
  obj.dr *= 0.9;


  var tby = (this.ll*2-tl);
  this.parent.vx += -tx/2;
  if(tby<this.body._y) {
    this.body._y += (tby-this.body._y)/1;
    this.body._vy = 0;
  } else {
    this.body._vy += 0.3;
    this.body._y += this.body._vy;
  }
  // this.body._y += (tby-this.body._y)/10;
  }
  walk() {
     // this.sword.rotation = this.parent.dx*Math.PI/2;
     this.face.scaleX = -this.parent.dx;
     
     // this.thigh1._rotation = Math.cos(frameCount*Math.PI/10)*Math.PI/4;
     // this.thigh2._rotation = -Math.cos(frameCount*Math.PI/10)*Math.PI/4;
     this.thigh1.rotation += Math.cos(frameCount*Math.PI/10)*Math.PI/50;
     this.thigh2.rotation -= Math.cos(frameCount*Math.PI/10)*Math.PI/50;

     this.arm1.dr += Math.cos(frameCount*Math.PI/10)*Math.PI/500;
     this.arm2.dr -= Math.cos(frameCount*Math.PI/10+Math.PI/4)*Math.PI/500;
     this.forearm1.dr += this.arm1.dr/50;
     this.forearm2.dr += this.arm2.dr/50;

     this.calf1._rotation = Math.PI/4*this.parent.dx;
     this.calf2._rotation = Math.PI/4*this.parent.dx;
  }
  swingLimbs() {
    this.limbs.forEach(function(e) {
      if(e._rotation>Math.PI*2) {
        e._rotation -= Math.PI*2
      }
      if(e._rotation<-Math.PI*2) {
        e._rotation += Math.PI*2;
      }
      if(e._rotation>Math.PI) {
        e._rotation = e._rotation-Math.PI*2;
      }
      if(e._rotation<-Math.PI) {
        e._rotation = Math.PI*2+e._rotation;
      }
      // e.rotation += (Math.random()-0.5)*0.1;
      // e.rotation += Math.cos(frameCount*Math.PI/10*e.frq+e.offset)*Math.PI/20*wobble;
      var dr = e._rotation-e.rotation;
      if(dr>Math.PI*2) {
        dr -= Math.PI*2
      }
      if(e.rotation<-Math.PI*2) {
        dr += Math.PI*2;
      }
      if(dr>Math.PI) {
        dr = dr-Math.PI*2;
      }
      if(dr<-Math.PI) {
        dr = Math.PI*2+e.rotation;
      }
      e.parent.dr += dr/500;
      e.dr += (dr-e.dr)/50 + e.parent.dr/500;
      var max = Math.PI/5;
      if(e.dr>max) {
        e.dr = max;
      }
      if(e.dr<-max) {
        e.dr=-max;
      }
      e.rotation += e.dr;
      if(e.rotation>Math.PI*2) {
        e.rotation -= Math.PI*2
      }
      if(e.rotation<-Math.PI*2) {
        e.rotation += Math.PI*2;
      }
      if(e.rotation>Math.PI) {
        e.rotation = e.rotation-Math.PI*2;
      }
      if(e.rotation<-Math.PI) {
        e.rotation = Math.PI*2+e.rotation;
      }
      // e.rotation += e.model.parent.vx/20;
    })
    var angle = -this.parent.vx/2;//Math.atan2(this.parent.vy/2,this.parent.vx)+Math.PI/2;
    this.body.rotation += (angle+this.body._vy/100-this.body.rotation)/10;
    this.head.rotation += (-this.body.rotation-this.head.rotation)/10;
  }
  randomize() {
    this.limbs.forEach(function(e) {
      e.rotation += Math.random()*Math.PI*2;
    })
  }
  update() {
    // var ang = Math.atan2(this.parent.vy,this.parent.vx)+Math.PI/2;
    // this.trail.rotation = -this.head.rotation-this.body.rotation;
    // this.trail.drawable.setEnd(-this.parent.vx*3,-this.parent.vy*3+10);
    // this.trail.drawable.x2 += (-this.parent.vx*5-this.trail.drawable.x2)/30;
    // this.trail.drawable.y2 = (-this.parent.vy*5+10-this.trail.drawable.y2)/30;
    this.sword.rotation = Math.PI;
    if(this.attacking) {
      this.attackUpdate();
    }

    this.body._rotation = 0;
    this.head._rotation = 0;
    if(this.moving) {
      this.walk();
    } else {
      this.thigh1._rotation = Math.PI/8;
      this.thigh2._rotation = -Math.PI/8;
      this.calf1._rotation = -Math.PI/8;
      this.calf2._rotation = Math.PI/8;
    }
    if(this.crouching)this.crouch();
    this.swingLimbs();
    if(this.grounded) {
      this.groundedUpdate();
    }
  }
  attack() {
    // this.arm1.dr+=0.4;
    this.attacking=true;
    this.attackSound.play();
    // this.arm1.dr+=0.5;
    // this.arm1._rotation = Math.PI/2;
    this.arm1.dr += 1;
    // this.parent.vx += this.parent.dx*10;
    setTimeout(e=>{
      this.attacking=false
    this.arm1._rotation = Math.PI/20;
      this.arm1.dr=0;
    },400);
  }
  attackUpdate() {
    // this.arm1.dr = 0.5;
  }
  crouch() {
    var kneel = Math.PI*.3*this.parent.dx;
    this.body._rotation = kneel;
    this.head._rotation = -kneel;
    var knees = Math.PI*.7;
    this.thigh1._rotation = -kneel+knees;
    this.thigh2._rotation = -kneel-knees;
    this.calf1._rotation = -knees;
    this.calf2._rotation = knees;
    // this.limbs.forEach(function(e) {
    //   e.rotation += (e._rotation-e.rotation)/20;
    // });

  }
  draw(x,y) {
    if(this.attacking) {
      canvas.beginPath();
      canvas.strokeStyle = "#ffffffaa";
      canvas.lineCap = 'square';
      canvas.lineWidth = 30;
      var angle = this.arm1.rotation+this.body.rotation+Math.PI/2;
      var mx = Math.cos(angle)*60+x;
      var my = Math.sin(angle)*60+y;
      canvas.moveTo(mx,my);
      if(this.lastX) {
        canvas.lineTo(this.lastX,this.lastY);
      }
      this.lastX = mx;
      this.lastY = my;
      canvas.stroke();
    } else {
      this.lastX = null;
    }
    this.drawOutline(x,y);
    super.draw(x,y);
    
  }
}

class AnityModel extends Model {
  constructor(parent) {
    super(parent);
    var size = 50;
    var icon = new ImageDrawable(IMAGES.AnityArrow, 0,0,null,size);
    this.arrows = [];
    for(var i=0;i<3;i++) {
      var angle = i * Math.PI*2/3;
      var l = this.createLimb(0,0,null, angle);
      this.arrows.push(l.createAfter(0,size/2,icon,Math.PI));
    }
    this.t = 0;
  }
  flip() {
    this.flipping = true;
  }
  update() {
    if(!this.flipping) return;
    this.t ++;
    var t = this.t;
    this.arrows.forEach(function(e) {
      if(e.rotation>0) {
        e.rotation -= 0.001*t;
      } else {
        e.rotation = 0;
      }
    })
  }
}

class PlatformerModel extends Model {
  constructor(w,h,color,parent, al) {
    super(parent);
    this.w=w;this.h=h;this.color=color;   
    this.moving = false;
    this.grounded = false;
    this.moveLocked = false;
    // this.body = this.createLimb(0,0,10,h*.8,color);
    // this.head = this.body.createAfter(0,-10,20,20,color);
    // this.foot1 = this.body.createBefore(-5,h/2-4,8,8,color);
    // this.foot2 = this.body.createBefore(5,h/2-4,8,8,color);
    // this.arm1 = this.body.createBefore(-5,4,8,8,color);
    // this.arm2 = this.body.createBefore(5,4,8,8,color);
    // this.eye1 = this.head.createAfter(0,0,4,4,"white");

    var ll = h/2-12;
    this.ll=ll;
    var al = al||7;

    this.body = this.createLimb(0,0,new Line(0,-5,0,10,10,'round',color));
    this.head = this.body.createAfter(0,-5,new Circle(0,-5,10,color));
    // this.body.createAfter(-10,0,new CheeseburgerJohnsonModel(40,40,this));
    this.face = this.head.createAfter(0,-5);
    this.eye1 = this.face.createAfter(-3,0,new Circle(0,0,2,'white'));
    this.eye2 = this.face.createAfter(3,0,new Circle(0,0,2,'white'));
    this.foot1= this.body.createBefore(0,12,new Line(0,0,0,ll,4,'round',color));
    this.foot2= this.body.createBefore(0,12,new Line(0,0,0,ll,4,'round',color));
    this.arm1 = this.body.createAfter(-5,1,new Line(0,0,0,al,4,'round',color),Math.PI/4);
    this.arm2 = this.body.createAfter(5,1,new Line(0,0,0,al,4,'round',color),-Math.PI/4);
    this.hand1 = this.arm1.createAfter(0,al+1,new Circle(0,0,3,color));
    this.hand2 = this.arm2.createAfter(0,al+1,new Circle(0,0,3,color));

    // var grd = canvas.createRadialGradient(0,0,0,0,0,50);
    // grd.addColorStop(0,"#00aadd55");
    // grd.addColorStop(1,"#00aadd00");
    // this.shoe1.createAfter(0,5,new Circle(0,0,50,grd),0,1);
    // this.shoe2.createAfter(0,5,new Circle(0,0,50,grd),0,1);
    this.attackSound = SOUNDS.attack;
    this.cooldownTimer = 0;
    this.cooldownTime = 15;
  }
  addShoes() {
    if(this.shoe1)return;
    this.shoe1 = this.foot1.createAfter(0,this.ll,new ImageDrawable(IMAGES.Boot,0,0,10));
    this.shoe2 = this.foot2.createAfter(0,this.ll,new ImageDrawable(IMAGES.Boot,0,0,10));
  }
  crouch() {
    var dx = this.parent.dx;
    var d = 2;
    var br = Math.PI*.4;
    this.body._rotation = br*dx;
    this.body._y += (Math.sin(br)*10-this.body._y)/d;
    this.foot1._rotation = (-br-Math.PI/4)*dx;
    this.foot2._rotation = (-br+Math.PI/4)*dx;
    this.arm1._rotation = -br*dx;
    this.arm2._rotation = -br*dx;
    this.head._rotation = -br*dx;
    this._rotation = 0;
    this.head._y += (5-this.head._y)/d;
    // this.head._x += (8*dx-this.head._x)/d;


    this.rotation += (this._rotation-this.rotation)/d;
    this.head.rotation += (this.head._rotation-this.head.rotation)/d;
    this.foot1.rotation += (this.foot1._rotation-this.foot1.rotation)/d;
    this.foot2.rotation += (this.foot2._rotation-this.foot2.rotation)/d;
    this.arm1.rotation += (this.arm1._rotation-this.arm1.rotation)/d;
    this.arm2.rotation += (this.arm2._rotation-this.arm2.rotation)/d;
    this.body.rotation += (this.body._rotation-this.body.rotation)/d;

    // this.idle();
    // this.rotation = 0;
    // this.foot1.rotation = Math.PI/10;
    // this.foot2.rotation=-Math.PI/10;
    // this.arm1.rotation = Math.PI/10;
    // this.arm2.rotation=-Math.PI/10;
    // this.head._y = Math.cos(frameCount*Math.PI/40)*2;
    // this.body.rotation = 0;
    // this.head.rotation = 0;
    
    // // this.body._y += (this.h/2-2-this.body._y)/2;
    this.scaleY += (1-this.scaleY)/2;
    this.scaleX += (1-this.scaleX)/2;
    // this.body._y = (1-this.scaleY)*this.h;
  }
  attack() {
    if(this.attacking)return;
    if(this.cooldownTimer>0)return;
    this.attackSound.play();
    this.doubleJumping=false;
    this.parent.wallColliding = false;
    this.attacking = true;
    var dx = this.parent.dx;
    this.idle();
    this.rotation = 0;
    this.body.rotation = -Math.PI/4*dx;
    this.head.rotation = -this.body.rotation/2;
    this.foot1.rotation = -Math.PI/2*dx-this.body.rotation;
    this.foot2.rotation = -Math.PI/2*dx-this.body.rotation;
    this.foot1.scaleY = 2;
    this.foot2.scaleY = 2;
    if(dx>0) {
      this.foot1._y=5;
    } else {
      this.foot2._y=5;
    }
    this.attackTimer = 15;
  }
  attackEnd() {
    this.attacking =false;
    this.foot1.scaleY = 1;
    this.foot2.scaleY = 1;
    this.foot1._y=0;
    this.foot2._y=0;
  }
  attackUpdate() {
    this.attackTimer --;
    if(this.attackTimer<=0) {
      this.attackEnd();
    }
    this.scaleX=1;
    this.scaleY=1;
    var t = this.attackTimer/15;
    if(this.attackTimer<14&&this.attackTimer>1) {
      this.parent.vx = this.parent.dx*30*t;
      this.parent.vy = 1;
    } else {
      this.parent.vx = 0;
      this.parent.vy = 0;
    }
  }
  idle() {
    this.rotation = 0;
    if(this.wallColliding) {
      this.body._x = (1-this.scaleX)*this.w/2;
    } else {
      this.body._x=0;
    }
    if(this.grounded) {
      this.body._y = (1-this.scaleY)*this.h/2;
    } else {
      this.body._y=0;
    }
    this.scaleY += (1-this.scaleY)/7;
    this.scaleX += (1-this.scaleX)/7;
    this.foot1.rotation = Math.PI/10;
    this.foot2.rotation=-Math.PI/10;
    this.arm1.rotation = Math.PI/10-Math.cos(frameCount*Math.PI/40)*Math.PI/40;
    this.arm2.rotation=-Math.PI/10+Math.cos(frameCount*Math.PI/40)*Math.PI/40;
    this.head._y = Math.cos(frameCount*Math.PI/40)*1;
    this.body.rotation = 0;
    this.head.rotation = 0;
    var bd = Math.cos(frameCount*Math.PI/40+0.1);
    this.body._y += bd;
    this.foot1._y =-bd;
    this.foot2._y =-bd;

    if(this.wallColliding) {
      var dx = this.parent.dx;
      var arm = this.arm1;
      if(dx>0)arm=this.arm2;
      arm.rotation = -dx*Math.PI*.9;
    }
  }
  walk() {
    this.idle();
    // this.scaleX = 1+Math.sin(frameCount*Math.PI/10)*.1;
    // this.scaleY = 1-Math.sin(frameCount*Math.PI/10)*.1;
    this.rotation = Math.cos(frameCount*Math.PI/10)*Math.PI/20;
    var frq = frameCount*Math.PI/10;
    this.foot1.rotation = Math.cos(frq)*Math.PI/4;
    this.foot2.rotation = -Math.cos(frq)*Math.PI/4;
    this.arm1.rotation = -Math.cos(frq)*Math.PI/4;
    this.arm2.rotation = Math.cos(frq)*Math.PI/4;
    this.body.rotation = Math.PI/100*this.parent.vx;
    this.head.rotation = -this.body.rotation;
  }
  airborn() {
    if(this.ceilingCollide){
      this.body._y = -(1-this.scaleY)*this.h/2;
    } else {
      this.body._y=0;
    }
    // this.idle();
    // this.rotation = this.parent.vy/20;
    var ds = Math.abs(this.parent.vy)/40/2;
    this.scaleY += (1+ds-this.scaleY)/10;
    this.scaleX += (1-ds-this.scaleX)/10;
    // var angle = Math.atan2(Math.abs(this.parent.vy),this.parent.vx/2)+Math.PI/2;
    // if(this.parent.vy<10)
      this._rotation = this.parent.vx/20*this.parent.vy/10;
    // else
      // this._rotation = 0;
    this.foot1._rotation = Math.PI/3-this.parent.vy/30;
    this.foot2._rotation = -this.foot1._rotation;
    this.arm1._rotation = Math.min(this.parent.vy/20,Math.PI*.4)+Math.PI/3;
    this.arm2._rotation = -this.arm1._rotation;
    this.head._rotation = 0;
    this.body.rotation = 0;

    if(this.wallColliding) {
      var dx = this.parent.dx;
      var arm = this.arm1;
      if(dx>0)arm=this.arm2;
      arm._rotation = -dx*Math.PI*.9;
      this.head._rotation += -Math.PI/8*dx;
    }

    var d = 2;
    this.rotation += (this._rotation-this.rotation)/d;
    this.head.rotation += (this.head._rotation-this.head.rotation)/d;
    this.foot1.rotation += (this.foot1._rotation-this.foot1.rotation)/d;
    this.foot2.rotation += (this.foot2._rotation-this.foot2.rotation)/d;
    this.arm1.rotation += (this.arm1._rotation-this.arm1.rotation)/d;
    this.arm2.rotation += (this.arm2._rotation-this.arm2.rotation)/d;
  }
  land() {
    this.scaleY = .8;
    this.scaleX = 1.2+Math.abs(this.parent.vy)/20;
    this.doubleJumping = false;
  }
  wallCollide() {
    this.doubleJumping = false;
    var d = Math.abs(this.parent.vx)/30;
    if(this.attacking) {
      this.parent.vy = -4;
      this.parent.vx = -this.parent.dx*10;
      this.parent.wallColliding = false;
      if(this.parent.jumpCount==0) {
        this.parent.jumpCount = 1;
      }
      this.cooldownTimer = this.attackTimer+3;
    }
    this.attackEnd();
    this.scaleX = 1-d;
    this.scaleY = 1+d;
  }
  jump() {
    this.scaleY = 2;
    this.scaleX = .5;
  }
  doubleJumpUpdate() {
    this.doubleJumpTimer--;
    if(this.doubleJumpTimer<=0) {
      this.doubleJumping = false;
    }
    var dx = this.parent.dx;
    var t = this.doubleJumpTimer/20;
    this.arm1.rotation = 0;
    this.arm2.rotation = 0;
    this.foot1.rotation = Math.PI/2*dx;
    this.foot2.rotation = Math.PI/2*dx;
    this.head.rotation = Math.PI/2*dx;
    t = t*t;
    this.rotation = -t*Math.PI*2*dx;
  }
  doubleJump() {
    this.doubleJumping = true;
    this.doubleJumpTimer = 20;
    this.scaleX = 1;
    this.scaleY = 1;
  }
  passedOut() {
    this.body.rotation = -Math.PI*.3;
      this.body._y = 30;
      this.head.rotation = -Math.PI/20;
      // this.arm1.rotation = Math.PI;
  }
  update() {
    this.moveLocked = this.attacking;
    if(this.cooldownTimer>0) this.cooldownTimer--;
    if(this.parent.passedOut) {
      this.passedOut();
      return;
    }
    if(this.attacking) {
      this.attackUpdate();
      return;
    }
    if(!this.grounded) {
      if(this.doubleJumping) {
        this.doubleJumpUpdate();
      } else {
        this.airborn();
      }
    }
    else if(this.crouching) {
      this.crouch();
    }
    else if(this.moving&&!this.wallColliding) {
      this.walk();
    } else {
      this.idle();
    }
    this.faceUpdate();
    if(this.shoe1) {
      this.shoe1.rotation = -this.foot1.rotation/2;
      this.shoe2.rotation = -this.foot2.rotation/2;
    }
  }
  faceUpdate() {
    this.face._x += Math.round((this.parent.dx*5-this.face._x)/3);
  }
  draw(x,y) {
    // canvas.strokeRect(x-this.w/2,y-this.h/2,this.w,this.h);
    this.drawOutline(x,y);
    super.draw(x,y);
  }
}

class SirDanathonModel extends StickModel {
  constructor(parent) {
    super(40,80,"#0af",parent);
  }
}

class JabroskiModel extends PlatformerModel {
  constructor(parent) {
    super(30,40,"black", parent);
    this.body.drawable.color = "#22a";
    this.face.y -= 5;
    this.face.drawable = new ImageDrawable(IMAGES.JabroskiHead, 0,0,40);
    this.face.after = [];
    this.mouthClosed = IMAGES.JabroskiMouthClosed;
    this.mouthChewing = IMAGES.JabroskiMouthChewing;
    this.mouth = this.face.createAfter(0,0,new ImageDrawable(IMAGES.JabroskiMouthChewing,0,0,40));
  }
  faceUpdate() {
    this.face.scaleX = this.parent.dx<0?-1:1;
    if(this.parent.isTalking) {
      this.mouth.scaleX = 1+Math.cos(frameCount*Math.PI/20)*.3;
      this.mouth.scaleY = 1+Math.sin(frameCount*Math.PI/20)*.3;
      this.mouth.drawable.image = this.mouthChewing;
    } else {
      this.mouth.drawable.image = this.mouthClosed;
    }
  }
  idle() {
    super.idle();
    if(this.parent.isLounging) {
      this.body.rotation = -Math.PI/4;
      this.body._y = 10;
      this.head.rotation = Math.PI/6;
      this.arm1.rotation = Math.PI/2;
    }
  }
}

class DroneModel extends Model {
  constructor(parent) {
    super(parent);
    this.body = this.createLimb(0,0,new ImageDrawable(IMAGES.drone, 0,0,50));

    // this.face = this.top.createAfter(w/2,-h/16);
    // this.face.createAfter(-w/8,0,new Circle(0,0,w/20,'white'));
    // this.face.createAfter(w/8,0,new Circle(0,0,w/20,'white'));
  }
  update() {
    var d = this.parent.vy/40 || 0;
    d+=Math.cos(frameCount*Math.PI/40)/10;
    this.scaleX += (1-d-this.scaleX)/10;
    this.scaleY += (1+d-this.scaleY)/10;
    if(this.crouching&&this.grounded) this.crouch();
    if(this.grounded) {
      if(this.scaleY<1)
        this.body._y = (1-this.scaleY)*this.h;
      else
        this.body._y = (1-this.scaleY)*this.h/4;
    } else if(this.ceilingCollide) {
      this.body._y = -(1-this.scaleY)*this.h;
    } else {
      this.body._y=0;
    }
    // this.face._x = this.parent.dx*2;
    this.rotation = Math.cos(frameCount*Math.PI/10)*Math.PI/20*this.parent.vx/this.parent.speed;
   
  }
  crouch() {
    this.scaleY = 0.5;
    this.scaleX = 1.5;
  }
  jump() {
    this.scaleY = 2;
    this.scaleX = .5;
  }
  doubleJump() {
    this.scaleY = 2;
    this.scaleX = .5;
  }
  wallCollide() {
    var d = Math.abs(this.parent.vx)/30;
    this.scaleX = 1-d;
    this.scaleY = 1+d;
  }
  attack() {

  }
  land() {
    this.scaleY = .8;
    this.scaleX = 1.2+Math.abs(this.parent.vy)/20;
  }
  draw(...args) {
    // var sx = this.scaleX;
    // if(this.parent.dx<0) {
    //   this.scaleX = -1;
    // }
    // if(this.parent.dx<0)this.scaleX = -1;
    // else this.scaleX = 1;
    if(this.parent.dx>0)
      this.scaleX = -1;
    else
      this.scaleX = 1;
      super.draw(...args);
    // this.scaleX = sx;
  }
}

class CurleyModel extends PlatformerModel{
  constructor(parent) {
    super(40,40,"black",parent);
    this.head.drawable = new ImageDrawable(IMAGES.CurleysHead,0,-5,20);
    this.body.scaleX = 2;
    this.body.scaleY = 2;
    // this.foot1.drawable = null;
    // this.foot2.drawable = null;
    this.hand1.drawable.color = "#0ad";
    this.hand2.drawable.color = "#0ad";

    // this.foot1.drawable.y2=20;
    this.foot1.drawable.width=2;
    // this.foot2.drawable.y2=20;
    this.foot2.drawable.width=2;
    this.outlineColor = "#0df";

    // this.body.before.push(this.head);
    // this.body.after.splice(this.body.after.indexOf(this.head),1);
    this.addShoes();
  }
}

class DarkGraySpikeModel extends PlatformerModel {
  constructor(parent) {
    super(20,40,"#111", parent);
    this.face.after = [];
    this.body.scaleX = 2;
    this.body.scaleY = 2;
    this.happy = IMAGES.DarkGraySpikeHead
    this.evil = IMAGES.DarkGrayHead;
    this.face.drawable = new ImageDrawable(this.evil, 0,-10, 40);
  }
  faceUpdate() {
    this.face.scaleX = this.parent.dx<0?-1:1;
    if(this.parent.happy) {
      this.face.drawable.image = this.happy;
    } else {
      this.face.drawable.image = this.evil;
    }
  }
}

class PlayerModel extends PlatformerModel {
  constructor(parent) {
    super(20,40,"darkgray",parent);
    // this.arm1.createAfter(-2,2,new Line(0,0,0,5,"round",5,"black"));
  }
  draw(x,y){
    super.draw(x,y);
    if(this.parent.waterMark) {
      canvas.textAlign = 'center';
      canvas.fillStyle = 'black';
      canvas.font = '15px Arial';
      canvas.fillText("OC do not steal",x,y);
    }
  }
}

function wobblyCircle(canvas,x,y,r,wobl) {
  canvas.beginPath();
  canvas.arc(x,y,r,0,Math.PI*2);
  // var iters=20;
  // canvas.moveTo(x+r,y);
  // dr = 0;
  
  // for(var i=0;i<iters;i++) {
  //   var angle = i/iters*Math.PI*2;
  //   dr = rs[i];
  //   var mr = r + dr*10;
  //   var mx = x + Math.cos(angle)*mr;
  //   var my = y + Math.sin(angle)*mr;
  //   canvas.lineTo(mx,my);
  // }
  canvas.fill();
}

class CheeseburgerJohnsonModel extends Model {
  constructor(parent) {
    super(parent);
    var w = 20;
    var h = 40;
    var stuff = [
      ["#da5",0],
      ["#3d3",1],
      ["#ff0",1],
      ["#951",2],
      ["#da5",1],
    ]
    var w = h/stuff.length;
    var y = h/4;
    this.w=w;
    this.h=h;
    this.body = this.createLimb(0,0);
    for(var i=stuff.length-1;i>=0;i--) {
      var thing = stuff[i];
      this.body.createAfter(0,y,new Line(-w/2,0,w/2,0,w*2,'round',thing[0]));
      y-=h/stuff.length/2*thing[1];
    }
    this.face = this.body.createAfter(0,-h/4);
    this.face.createAfter(-w/2,0,new Circle(0,0,w/3,'black'));
    this.face.createAfter(w/2,0,new Circle(0,0,w/3,'black'));
  }
  update() {
    var d = this.parent.vy/40 || 0;
    d+=Math.cos(frameCount*Math.PI/40)/10;
    this.scaleX += (1-d-this.scaleX)/10;
    this.scaleY += (1+d-this.scaleY)/10;
    if(this.crouching&&this.grounded) this.crouch();
    if(this.grounded) {
      if(this.scaleY<1)
        this.body._y = (1-this.scaleY)*this.h;
      else
        this.body._y = (1-this.scaleY)*this.h/4;
    } else if(this.ceilingCollide) {
      this.body._y = -(1-this.scaleY)*this.h;
    } else {
      this.body._y=0;
    }
    this.face._x = this.parent.dx*2;
    this.rotation = Math.cos(frameCount*Math.PI/10)*Math.PI/20*this.parent.vx/this.parent.speed;
  }
  crouch() {
    this.scaleY = 0.5;
    this.scaleX = 1.5;
  }
  jump() {
    this.scaleY = 2;
    this.scaleX = .5;
  }
  doubleJump() {
    this.scaleY = 2;
    this.scaleX = .5;
  }
  wallCollide() {
    var d = Math.abs(this.parent.vx)/30;
    this.scaleX = 1-d;
    this.scaleY = 1+d;
  }
  attack() {

  }
  land() {
    this.scaleY = .8;
    this.scaleX = 1.2+Math.abs(this.parent.vy)/20;
  }
}

class Rect {
  constructor(x,y,w,h,color) {
    this.x=x;this.y=y;
    this.w=w;
    this.h=h;
    this.color = color;
  }
  draw() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x-this.w/2,this.y-this.h/2,this.w,this.h);
  }
}

class Circle {
  constructor(x,y,r,color) {
    this.x=x;this.y=y;this.r=r;this.color=color;
  }
  draw(override) {
    if(override&&override.color)canvas.fillStyle=override.color;
    else canvas.fillStyle = this.color;
    var r = this.r;
    if(override&&override.dw) {
      r+=override.dw;
    }
    var dx =0;
    var dy =0;
    if(override) {
      if(override.dx)dx=override.dx;
      if(override.dy)dy=override.dy;
    }
    canvas.beginPath();
    canvas.arc(this.x+dx,this.y+dy,r,0,Math.PI*2);
    canvas.fill();
  }
}

class ImageDrawable {
  constructor(image,x,y,w,h) {
    this.image = image;
    this.x=x;this.y=y;this.w=w;this.h=h;
    if(!w&&!h) {
      this.w = image.width;
      this.h = image.height;
    }
    else if(!this.w) {
      this.w = image.width/image.height*this.h;
    }else if(!this.h) {
      this.h = image.height/image.width*this.w;
    }
  }
  draw(override) {
    if(override)return;
    canvas.drawImage(this.image,this.x-this.w/2,this.y-this.h/2,this.w,this.h);
  }
}

class CurveTrail {
  constructor(x1,y1,width,cap,color) {
    this.x1=x1;
    this.y1=y1;
    this.ex = x1;
    this.ey = y1;
    this.mx = x1;
    this.my = y1;
    this.points = [];
    this.length = 3;
    this.points.push([x1,y1]);
    this.width=width;
    this.cap=cap;
    this.color = color;
  }
  setEnd(x,y) {
    this.mx=this.ex;
    this.my=this.ey;
    this.ex+=(x-this.ex)/10;
    this.ey+=(y-this.ey)/10;
  }
  draw(override) {
    if(override&&override.color) canvas.strokeStyle = override.color;
    else canvas.strokeStyle = this.color;
    canvas.lineCap = this.cap;
    var w = this.width;
    if(override&&override.dw) {
      w+=override.dw*2;
    }
    var dx=0;
    var dy =0;
    if(override) {
      if(override.dx) dx += override.dx;
      if(override.dy) dy += override.dy;
    }
    canvas.lineWidth = w;
    canvas.beginPath();
    canvas.moveTo(this.x1+dx,this.y1+dy);
    canvas.quadraticCurveTo(this.mx+dx,this.my+dy,this.ex+dx,this.ey+dy);
    canvas.stroke();
  }
}

class Line {
  constructor(x1,y1,x2,y2,width,cap,color){
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
    this.width=width;
    this.cap=cap;
    this.color=color;
  }
  draw(override) {
    if(override&&override.color) canvas.strokeStyle = override.color;
    else canvas.strokeStyle = this.color;
    canvas.lineCap = this.cap;
    var w = this.width;
    if(override&&override.dw) {
      w+=override.dw*2;
    }
    var dx = 0;
    var dy = 0;
    if(override) {
      if(override.dx) dx=override.dx;
      if(override.dy) dy=override.dy;
    }
    canvas.lineWidth = w;
    canvas.beginPath();
    canvas.moveTo(this.x1+dx,this.y1+dy);
    canvas.lineTo(this.x2+dx,this.y2+dy);
    canvas.stroke();
  }
}

class Limb {
  constructor(x,y,drawable,rotation,ignoresOverride) {
    this.ignoresOverride=ignoresOverride;
    this._x=0;
    this._y=0;
    this.scaleX=1;
    this.scaleY=1;
    this.x=x;this.y=y;
    this.rotation = rotation || 0;
    this._rotation = this.rotation;
    this.drawable = drawable;
    this.before = [];
    this.after = [];
  }
  createBefore(...args) {
    var limb = new Limb(...args);
    limb.parent = this;
    limb.model = this.model;
    this.before.push(limb);
    return limb;
  }
  createAfter(...args) {
    var limb = new Limb(...args);
    limb.parent = this;
    limb.model = this.model;
    this.after.push(limb);
    return limb;
  }
  draw(override) {
    if(override&&this.ignoresOverride)return;
    canvas.save();
    canvas.translate(this.x+this._x,this.y+this._y);
    if(this.rotation)canvas.rotate(this.rotation);
    canvas.scale(this.scaleX,this.scaleY);
    this.before.forEach(function(e){e.draw(override)});
    if(this.drawable)this.drawable.draw(override);
    this.after.forEach(function(e){e.draw(override)});
    canvas.restore();
  }
}

class PsykeiModel extends PlatformerModel {
  constructor(parent) {
    super(30,60,"#0a0",parent, 12);
    this.head.drawable = new ImageDrawable(IMAGES.PsykeiHead, 5,-15,40);
    this.face.y-=15;
    this.face.x=10;
    this.addShoes();
    this.staff = this.hand1.createAfter(0,0,new ImageDrawable(IMAGES.PsykeiStaff, 0,0,null,100),-Math.PI*.6);
    this.eye1.drawable.color = 'red';
    this.eye2.drawable.color = 'red';
  }
  faceUpdate() {
    this.head.scaleX = 1;
    // super.faceUpdate();
    if(this.parent.dx<0) {
      this.head.scaleX = -1;
      // this.face._x = -this.face._x+10;
    }
    //this.parent.dx<0?-1:1;
    this.arm1.rotation = Math.PI/2;
  }
  attack() {
    if(this.attacking)return;
    this.arm1.rotation = Math.PI/2;
    this.staff.rotation = Math.PI;
    this.attacking = true;
    SOUNDS.attack.play();
  }
}

var frameCount = 0;
var MainDriver = {
  scene: null,
  started: false,
  FPS: 60,
  paused: false,
  fadeToBlack(time,callback) {
    this.fadeTime = time;
    this.fadeTimer = time;
    this.fadeDir=1;
    this.fadeCallback = callback;
  },
  fadeIn(time,callback) {
    this.fadeTime = time;
    this.fadeTimer = time;
    this.fadeDir=0;
    this.fadeCallback = callback;
  },
  startWithScene(scene) {
    this.update = this.update.bind(this);
    this.draw = this.draw.bind(this);
    this.setScene(scene);
    this.start();
  },
  setScene(scene) {
    scene.driver = this;
    if(this.scene) {
      this.scene.onLeave();
    }
    this.scene = scene;
    scene.init();
  },
  start() {
    if(this.started) {
      console.log('main driver already started');
      return;
    }
    setInterval(this.update, 1000/this.FPS);
    this.draw();
    this.started = true;
    window.addEventListener('blur', this.pause.bind(this));
    window.addEventListener('focus', this.unPause.bind(this));    
  },
  pause() {
    this.paused = true;
    canvas.fillStyle = "black";
    canvas.font = '40px Impact';
    canvas.textAlign = 'center';
    canvas.lineWidth = 5;
    canvas.miterLimit = 2;
    canvas.strokeText("click to resume", CE.width/2,CE.height/2);
    canvas.fillStyle = "white";
    canvas.fillText("click to resume", CE.width/2,CE.height/2);
    MusicHandler.pause();
  },
  unPause() {
    MusicHandler.resume();
    this.paused = false;
  },
  update() {
    frameCount += 1;
    inputUpdate();
    if(this.paused)return;
    this.scene.update();
    if(this.fadeTimer>0) {
      this.fadeTimer--;
    }
    if(this.fadeTimer<3&&this.fadeCallback){
      this.fadeCallback();
      this.fadeCallback = null;
    }
  },
  draw() {
    window.requestAnimationFrame(this.draw);
    if(this.paused)return;
    canvas.clearRect(0,0,CE.width,CE.height);
    this.scene.draw();
    if(this.fadeTimer>0) {
      canvas.fillStyle = 'black';
      var t = this.fadeTimer/this.fadeTime;
      if(this.fadeDir) t=1-t;
      canvas.globalAlpha = t;
      canvas.fillRect(0,0,CE.width,CE.height);
      canvas.globalAlpha=1;
    }
  }
}

window.addEventListener('load', function(e) {
  function start() {
    // window.removeEventListener('mousedown', start);

    // MainDriver.startWithScene(new GameScene());
    // return;

    MainDriver.startWithScene(new LoadingScene());
    ImageLoader.onComplete(function() {
      SOUNDS.onComplete(function() {
        setTimeout(function() {
          MainDriver.setScene(new SplashScreen(OpeningScene));
        },1000);
      })
    })
  }
  start();
  // window.addEventListener('mousedown', start);
  // setTimeout(function(){MainDriver.startWithScene(new OpeningScene())},0);
    // setTimeout(function(){MainDriver.startWithScene(new GameScene())},0);
  // MainDriver.startWithScene(new LoadingScene());
  // ImageLoader.onComplete(function(){
  //   setTimeout(function() {
  //     MainDriver.setScene(new SplashScreen(OpeningScene));
  //   },1000);
  // })
})

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
  }
})


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


IMAGES.anityLogo = ImageLoader.loadImage('AnityLogo.png');
IMAGES.unityLogo = ImageLoader.loadImage('UnityLogo.png');
IMAGES.anityIcon = ImageLoader.loadImage('AnityIcon.png');
IMAGES.daniHelm = ImageLoader.loadImage('daniHelm.png');
IMAGES.daniSword = ImageLoader.loadImage('daniSword.png');
IMAGES.portal = ImageLoader.loadImage('ShittyPortal.png');
IMAGES.tilesetCurleys = ImageLoader.loadImage('tilesetCurleys.png');
IMAGES.tilesetPortalRoom = ImageLoader.loadImage('tilesetPortalRoom.png');
IMAGES.tilesetVents = ImageLoader.loadImage('tilesetVents.png');
IMAGES.tilesetOutside = ImageLoader.loadImage('tilesetOutside.png');
IMAGES.tilesetLab = ImageLoader.loadImage('tileSetLab.png');
IMAGES.CurleysHead = ImageLoader.loadImage('CurleysHead0.png');
IMAGES.ChomperTop = ImageLoader.loadImage('ChomperTop.png');
IMAGES.Boot = ImageLoader.loadImage('Boot.png');
IMAGES.JabroskiHead = ImageLoader.loadImage('JabroskiHeadBlank.png');
IMAGES.JabroskiMouthClosed = ImageLoader.loadImage('JabroskiMouthClosed.png');
IMAGES.JabroskiMouthChewing = ImageLoader.loadImage('JabroskiMouthChewing.png');
IMAGES.DarkGraySpikeHead = ImageLoader.loadImage('DarkGraySpikeHead.png');
IMAGES.DarkGrayHead = ImageLoader.loadImage('DarkGrayHead.png');
IMAGES.PsykeiHead = ImageLoader.loadImage('PsykeiHead.png');
IMAGES.PsykeiStaff = ImageLoader.loadImage('PsykeiStaff.png');
IMAGES.drone = ImageLoader.loadImage('drone.png');
IMAGES.sunflower = ImageLoader.loadImage('Sunflower.png');
IMAGES.evilSunflower = ImageLoader.loadImage('SunflowerEvil.png');
IMAGES.AnityArrow = ImageLoader.loadImage('AnityArrow.png');


CE.width = 800;
CE.height = 600;

setTimeout(function(){LEVELS.add({v:0,name:"Win",t:2,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,8,9,9,9,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,9,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"VentsEavesdrop2",t:2,m:[
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,8,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,7,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"Boss2",t:2,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,5,1,1,1,5,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,9,9,9,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,9,16,9,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,9,9,9,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,1,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,26,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,17,0,25,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,24,0,8,0,22,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"PortalRoom",t:"0",m:[
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0,0,0,15,1,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,1,0,4,0,0,0,0,0,0,0,0,4,0,1,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,3,8,0,0,0,0,4,5,5,16,0,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,3,0,0,0,6,6,7,7,7,7,0,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,1,1,1,2,2,2,2,2,2,2,2,2,1,1,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,],
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"Drones2",t:4,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,5,1,5,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,],
[0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,23,0,0,23,0,0,23,0,0,0,0,1,0,],
[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"Dungeon",t:4,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,1,1,1,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,5,],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"test",t:"1",m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,4,0,0,0,4,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,],
[0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,],
[0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,],
[0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,],
[0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,4,0,4,0,0,0,0,4,0,4,0,0,4,0,0,0,0,0,0,0,0,1,0,0,0,0,0,],
[0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,1,0,0,0,0,0,],
[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,4,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,4,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,1,0,0,0,0,0,],
[0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,],
[0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,4,1,0,1,1,0,0,0,4,4,4,0,4,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,4,1,0,0,4,0,0,0,1,1,0,4,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,4,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,4,1,1,1,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,4,1,1,1,4,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,1,1,2,2,1,1,4,2,1,2,2,2,1,1,1,1,1,1,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,4,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,0,0,0,0,0,0,0,1,0,4,1,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,4,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,4,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,4,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,2,2,2,2,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,2,2,2,2,2,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,2,2,2,2,2,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,2,2,2,0,0,0,0,0,],
[1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,3,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"Drawbridge",t:3,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,19,0,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,19,0,0,0,1,1,1,1,1,1,],
[0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[13,0,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"BossHall",t:2,m:[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[9,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"VentsFall",t:2,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,8,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,16,9,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"Lair",t:2,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,7,7,7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,0,0,0,1,1,1,1,1,],
[0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,],
[1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,4,0,0,0,0,0,0,1,1,1,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,1,],
[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,4,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,],
[1,1,1,1,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,],
[1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,1,],
[0,0,4,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"worldPan",t:3,m:[
[1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0,0,0,0,0,],
[0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,0,0,0,0,0,0,0,1,6,0,0,0,0,],
[0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,1,0,6,0,6,0,1,6,1,0,0,0,0,],
[0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,1,6,1,6,1,6,1,0,0,0,0,0,],
[0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,6,1,6,6,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,5,1,5,6,6,6,0,0,0,0,0,],
[0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,5,1,1,0,0,0,0,0,0,0,],
[0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,6,6,1,0,0,0,0,0,0,0,],
[0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,0,0,0,0,0,0,0,0,1,6,1,6,1,6,1,0,0,0,0,0,0,],
[0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,2,3,2,0,0,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,27,0,27,13,13,13,0,0,0,0,0,0,0,0,1,1,1,6,1,1,1,0,0,0,0,0,0,],
[0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,19,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,9,9,9,0,0,0,0,0,0,0,0,1,1,1,6,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,17,0,18,1,0,0,0,2,0,0,0,0,0,0,5,1,5,0,0,0,9,9,9,9,9,9,0,0,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,6,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,27,27,25,0,0,9,9,9,9,9,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,22,0,6,1,6,0,9,9,9,9,9,9,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,9,9,13,13,13,13,13,13,13,13,13,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,13,13,0,0,0,0,0,0,0,0,0,0,0,0,13,9,9,9,9,9,9,9,9,9,9,9,9,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,13,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleyCloset",t:1,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,8,1,1,1,1,1,0,0,0,0,0,0,],
[0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,],
[1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,],
[1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,],
[1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,],
[1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,],
[1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,],
[1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,],
[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleyAttack2",t:1,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,1,],
[0,0,0,0,0,0,0,0,5,1,1,1,5,0,0,0,0,0,5,1,1,1,5,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleyStuck",t:1,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,4,0,4,0,0,0,0,4,0,1,1,1,0,0,0,0,],
[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,],
[1,1,1,1,1,5,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,4,0,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,4,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,5,],
[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"Lair2",t:2,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,5,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,0,0,23,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,],
[0,8,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleyFallJump",t:1,m:[
[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,],
[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,2,3,0,0,0,],
[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,0,0,0,0,],
[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,],
[0,0,0,0,0,0,1,0,0,0,0,0,5,1,1,5,0,0,0,0,5,1,1,5,0,0,0,0,0,0,0,0,],
[8,0,0,0,0,0,0,0,0,4,0,0,1,1,3,1,0,0,0,0,1,1,1,1,0,0,0,4,0,0,0,0,],
[1,1,1,1,5,0,0,0,4,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,4,0,0,0,0,0,],
[1,1,1,1,1,0,0,4,0,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,0,4,0,0,1,1,1,1,],
[1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,],
[1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,],
[1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleySpikePit",t:1,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,5,0,0,0,0,0,5,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,2,2,0,0,0,1,5,0,0,5,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"reconciliation",t:3,m:[
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,25,0,0,0,13,13,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,13,13,0,0,8,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0,0,0,],
[13,13,13,13,13,13,13,13,13,9,9,13,13,13,13,13,13,13,13,13,9,9,13,13,13,13,13,13,13,13,13,13,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,],
[0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,],
[0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,],
[0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleyShortJump",t:1,m:[
[0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,],
[0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,],
[0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,],
[0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,],
[0,0,0,0,0,0,3,1,5,1,3,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,3,1,3,0,0,0,0,0,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,5,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,4,0,4,0,4,0,0,3,3,3,3,3,3,3,],
[8,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"FlowerTrail",t:3,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,13,13,13,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,13,13,9,9,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,27,13,13,9,9,9,],
[0,0,0,0,0,0,0,0,0,0,27,0,27,0,0,0,0,0,0,0,0,0,0,0,27,13,13,9,9,9,9,9,],
[0,0,0,0,0,0,0,0,0,13,13,13,13,13,27,0,0,0,0,0,0,0,0,27,13,13,9,9,9,9,9,9,],
[8,0,0,0,0,0,0,0,13,13,9,9,9,13,13,27,0,27,0,0,0,0,27,13,13,9,9,9,9,9,9,9,],
[13,13,13,13,13,13,13,13,13,9,9,9,9,9,13,13,13,13,0,27,27,0,13,13,9,9,9,9,9,9,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,13,13,13,13,13,9,9,9,9,9,9,9,9,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleyJump",t:1,m:[
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,4,0,0,0,0,0,4,4,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,4,0,4,0,0,0,4,0,0,4,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,],
[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[5,1,1,1,5,0,0,0,5,1,5,0,0,0,0,5,1,1,5,0,0,0,0,0,5,1,5,1,5,1,5,1,],
[1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"VentsEntrance",t:2,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,],
[0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,1,0,0,0,0,0,0,0,18,4,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,1,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,18,0,18,0,1,1,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,4,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,],
[8,0,0,0,0,0,0,0,0,0,18,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,0,0,18,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"FlowerTime",t:3,m:[
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,],
[9,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,],
[9,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,],
[9,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"Boss",t:2,m:[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,5,1,1,1,5,0,0,0,0,0,0,1,1,1,1,1,1,1,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,],
[1,1,1,1,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,1,1,1,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,],
[0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,],
[0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,],
[0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,],
[1,1,1,1,1,1,1,5,0,0,0,0,0,0,0,0,8,0,0,0,0,0,21,0,0,5,1,1,1,1,1,1,0,],
[1,1,1,1,1,1,1,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,5,1,1,1,1,1,1,1,1,1,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleyStairs",t:1,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,0,0,0,0,0,0,0,0,0,0,],
[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,],
[0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"Cage",t:2,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,1,0,0,0,0,0,0,0,4,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,8,0,9,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,7,7,7,7,7,7,7,5,7,7,7,7,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"Catapult",t:3,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,1,0,1,1,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,1,0,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[13,13,13,13,13,13,13,13,13,13,13,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"VentsEavesdrop1",t:2,m:[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,],
[1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,],
[0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,],
[8,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,],
[5,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,4,],
[1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,7,1,],
[1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,],
[1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,],
[1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,],
[1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,],
[1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,],
[1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,],
[1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,18,0,0,1,1,1,1,1,0,1,0,1,1,],
[1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


// setTimeout(function(){LEVELS.add({v:0,name:"worldPan",t:3,m:[
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,4,0,4,0,0,1,0,0,0,0,0,],
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,1,0,1,0,1,0,1,6,1,0,0,0,0,],
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,1,6,1,6,1,6,1,0,0,0,0,0,],
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,6,6,1,6,6,1,0,0,0,0,0,0,],
// [0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,6,5,1,5,6,6,1,0,0,0,0,0,],
// [0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,5,1,1,1,0,0,0,0,0,0,],
// [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,6,6,1,0,0,0,0,0,0,0,],
// [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,1,6,1,6,1,0,0,0,0,0,0,],
// [0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,6,1,1,0,0,0,0,0,0,0,],
// [0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,6,1,1,0,0,0,0,0,0,0,],
// [0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,],
// [0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,2,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,13,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,],
// [0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,19,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,9,9,9,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,],
// [0,0,1,17,0,18,1,0,0,0,2,0,0,0,0,0,0,5,1,5,0,0,23,9,9,9,9,9,9,0,0,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,6,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,0,0,9,9,9,9,9,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,],
// [0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,22,0,6,1,6,0,9,9,9,9,9,9,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,],
// [0,13,13,9,9,13,13,13,13,13,13,13,13,13,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,13,13,0,0,0,0,0,0,0,0,0,0,0,0,13,9,9,9,9,9,9,9,9,9,9,9,9,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,],
// [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,13,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
// ]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"Drawbridge2",t:3,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,19,0,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[13,0,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"ThroneRoom",t:4,m:[
[0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,],
[0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,5,1,1,1,5,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,24,1,1,0,0,0,1,0,0,0,0,0,0,],
[0,0,4,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleyHallway",t:1,m:[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,],
[1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,],
[1,0,5,0,0,0,0,0,5,0,0,5,0,5,0,1,0,5,0,5,1,0,0,0,1,5,0,0,0,5,0,0,1,],
[1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,],
[1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,],
[0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleySpikeFake",t:1,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,2,2,2,0,2,2,2,2,],
[1,1,1,1,1,1,1,5,0,0,0,0,0,0,0,0,0,0,5,1,1,1,1,1,5,1,1,1,1,1,1,5,],
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"Core",t:4,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,8,0,0,0,22,5,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"WakeUp",t:3,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,],
[0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,],
[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,],
[0,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,6,6,5,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,],
[0,6,6,6,0,6,8,0,22,0,13,13,13,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,],
[13,13,13,13,13,13,13,13,13,13,9,9,9,9,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"Drones",t:4,m:[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,23,4,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,],
[1,0,0,7,7,7,7,0,0,0,7,7,7,7,0,0,0,0,1,1,7,7,7,7,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,1,1,1,],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,4,0,23,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,],
[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,23,0,0,0,0,0,0,0,0,1,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,5,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,5,1,1,1,1,1,1,1,1,0,0,5,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,23,0,0,0,7,7,7,0,0,0,23,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleyCongrats",t:1,m:[
[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,],
[0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,],
[0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,],
[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,],
[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,],
[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,],
[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,],
[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,],
[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleyAttack",t:1,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,18,0,0,0,0,0,0,0,0,0,0,18,0,18,0,0,0,0,0,0,0,1,5,1,],
[0,0,0,0,0,0,0,0,5,1,1,1,5,0,0,0,0,0,5,1,1,1,5,0,0,0,0,0,0,0,1,0,],
[8,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"TowerFall",t:3,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,],
[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,5,1,1,1,1,1,],
[0,0,0,0,0,0,6,5,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,6,6,6,6,6,6,],
[0,0,0,0,0,0,6,6,0,6,0,22,0,0,0,0,0,0,0,0,0,0,0,0,6,0,6,6,6,6,6,6,],
[13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,1,1,1,1,1,1,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1,1,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1,1,],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"BootPickup",t:1,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,4,0,0,1,0,0,0,0,0,0,0,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,4,0,0,0,17,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,1,5,1,1,1,1,1,1,5,1,1,1,5,1,1,1,1,1,1,5,1,1,1,1,5,1,1,1,5,],
[1,1,1,1,1,0,0,0,0,5,1,1,1,1,1,1,1,5,0,0,0,0,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
]})},0);


setTimeout(function(){LEVELS.add({v:0,name:"CurleyDoubleJump",t:1,m:[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,17,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,4,0,4,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,4,0,0,0,4,0,0,0,0,0,0,],
[0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,],
[0,0,0,0,0,4,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,],
[0,0,0,0,0,4,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,],
[0,0,0,0,4,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,],
[8,0,0,4,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,],
[5,1,1,5,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,],
[1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,],
[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,],
]})},0);


class PortalEntity {
  constructor(x,y) {
    this.x=x;this.y=y;
    this.drawable = new ImageDrawable(IMAGES.portal, 0,0,50,50);
    this.rotation = 0;
    this.strength = 0;
    this.timer = 60;
    this.active = false;
    this.strength2=0;
    this.scale = 0.1;
  }
  update() {
    this.scale += (1-this.scale)/20;
    this.rotation += Math.PI/20;
    if(!this.active)return;
    var player = this.scene.specialActors.kwak;
    if(this.timer-->0) {
      player.vx -= 1;
      player.vy -= 1;
      return;
    }
    var cj = this.scene.specialActors.cheeseburgerJohnson;
    cj.mx = -1;
    this.strength += 0.05;
    // player.vx += 1;
    // player.model.moving = true;
    if(this.step2) {
      this.strength2 += 0.05;
      player.vx = (this.x-player.x)/100*this.strength2;
      player.vy += (this.y-player.y)/200*this.strength2;
    }
    cj.vx += (this.x-cj.x)/200*this.strength;
    cj.vy += (this.y-cj.y)/500*this.strength;
    if(cj.x>this.x) {
      cj.shouldDelete =true;
    }
  }
  setScene(scene) {
    scene.specialActors.portalEntity = this;
    this.scene=scene;
  }
  draw() {
    canvas.save();
    canvas.translate(this.x,this.y);
    canvas.rotate(this.rotation);
    canvas.scale(this.scale,this.scale);
    this.drawable.draw();
    canvas.restore();
  }
}

class Platformer {
  constructor(x,y,w,h,color) {
    this.x=x;this.y=y;this.w=w;this.h=h;
    this.vx=0;
    this.vy=0;
    this.grav = 0.4;
    this.jumpStrength = 10;
    this.jumpCount = 0;
    this.numJumps = 2;
    this.dx=1;
    this.dy=1;
    this.speed = 5;
    this.grounded = false;
    this.terminalVelocity = 20;
    this.crouching = false;
    this.canUnJump = false;
    this.wallColliding = false;
    this.mx = 0;
    this.wallSlide = true;
    this.wallJumps = true;
    this.wallCollidingWith = null;
    this.standingOn = null;
    this.canAttack = true;
    this.initModel(w,h,color);
    this.health = 30;
    this.maxHealth = 30;
    this.invul = 0;
    this.heal = 0.05;
    this.color = color;
    this.knockBack = 1;
    this.hitSound = SOUNDS.hit;
  }
  lightDraw(ctx,cx,cy) {
    var x = this.x+cx;
    var y = this.y+cy;
    var grd = ctx.createRadialGradient(x,y,10,x,y,100);
    grd.addColorStop(0,"#ffffffff");
    grd.addColorStop(1,"#00000000");
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,CE.width,CE.height);
  }
  getHit(other) {
    if(this.invul>0)return;
    var dx = other.x-this.x;
    this.vx -= dx/4*this.knockBack;
    this.vy -= 5*this.knockBack;
    this.health -= 10;
    this.invul = 20;
    this.hitSound.play();
    if(this.health<0) {
      this.die();
    }
  }
  collide(other) {
    if(this.model.attacking) {
      other.getHit(this);
      this.model.wallCollide();
      this.jumpCount = 0;
    } else {
      this.getHit(other);
    }
  }
  initModel(w,h,color) {
    this.model = new PlatformerModel(w,h,color||'red', this);
  }
  getInputs(){}
  attack() {
    if(this.canAttack)
    this.model.attack();
  }
  crouch() {
    if(!this.grounded) {
      this.vy +=10;
    }
  }
  update() {
    if(this.health<0) {
      this.die();
    }
    if(this.invul>0) {
      this.invul--;
    } else {
      if(this.health<this.maxHealth) {
        this.health += this.heal;
      }
    }
    this.getInputs();
    var grav = this.grav;
    // if(this.wallColliding&&this.vy>0) {
    //   grav *= this.wallSlide;
    // }
    this.vy += grav;
    if(this.wallSlide&&this.wallColliding&&this.vy>0&&!this.crouching) {
      this.vy *=0.8;
    }
    if(this.vy>this.terminalVelocity)this.vy = this.terminalVelocity;
    if(this.model.moveLocked) {
      this.mx = 0;
    }
    var friction = 1/2;
    if(this.crouching&&this.grounded) {
      this.mx = 0;
      friction = 1/5;
    }
    // this.vx += (this.mx*this.speed-this.vx)*friction;
    this.vx = linearMove(this.vx, this.mx*this.speed, friction);
    // if(this.vx) {
    //   this.dx=this.mx>0?1:-1;
    // }
    if(this.mx) {
      this.dx=this.mx>0?1:-1;
      this.model.moving = true;
    } else {
      this.model.moving = false;
    }
    if(this.vy)this.dy=this.vy>0?1:-1;
    var dx = this.vx==0?this.dx:this.vx>0?1:-1;
    var dw = dx*this.w/2;
    var dh = this.dy*this.h/2;
    this.wallCollidingWith=this.scene.collides(this.x+dw+this.vx,this.y,this)||
      this.scene.collides(this.x+dw+this.vx,this.y+this.h/2-1,this)||
      this.scene.collides(this.x+dw+this.vx,this.y-this.h/2+1,this);
    if(this.wallCollidingWith&&this.scene.wallCollideWith(this.wallCollidingWith,this)) {
        // var tx = this.wallCollidingWith.x;
        var tx = Math.floor((this.x+dw+this.vx)/this.scene.level.cellWidth);
        var mx = (tx+0.5)*this.scene.level.cellWidth;
        this.x = mx - dx * (this.w/2+this.scene.level.cellWidth/2-1);
        this.vx = 0;
        if(this.wallJumps) {
          this.jumpCount = 0;
        }
        if(!this.wallColliding) {
          this.model.wallCollide();
          this.wallColliding = true;
        }
      // this.x=(Math.floor((this.x+dw+this.vx)/this.scene.level.cellWidth)+0.5)*this.scene.level.cellWidth-(dw+this.scene.level.cellWidth/2);        
    } else {
      this.x += this.vx;
      this.wallColliding=false;
    }
    this.standingOn = this.scene.collides(this.x,this.y+dh+this.vy,this)||
    this.scene.collides(this.x+this.w/2-2,this.y+dh+this.vy,this)||
    this.scene.collides(this.x-this.w/2+2,this.y+dh+this.vy,this);
    this.ceilingCollide =false;
    if(this.standingOn&&this.scene.standOn(this.standingOn,this)) {
      if(this.standingOn == 2) {
        this.die();
      }
      if(!this.grounded) {
        this.model.land();
      }
      var ty = this.standingOn.y;
      // var ty = Math.floor((this.y+dh+this.vy)/this.scene.level.cellHeight);
      var my = (ty+0.5)*this.scene.level.cellHeight;
      this.y = my - this.dy * (this.h/2+this.scene.level.cellHeight/2);
      // this.y=Math.floor((this.y+dh+this.vy)/this.scene.level.cellHeight)*this.scene.level.cellHeight-(dh+1);

      if(this.vy>0) {
        this.grounded = true;
        this.jumpCount = 0;
        this.vy = 0;
      } else {
        this.vy *= 0.9;
        this.ceilingCollide = true;
      }
    } else {
      this.y += this.vy;
      this.grounded = false;
      if(this.jumpCount==0&&(this.vy>2||this.vy<0))this.jumpCount = 1;
    }
   
    
    this.model.grounded = this.grounded;
    this.model.wallColliding = this.wallColliding;
    this.model.ceilingCollide = this.ceilingCollide;
    this.model.crouching = this.crouching;
    this.model.update();
  }
  canJump() {
    return this.jumpCount < this.numJumps;
  }
  onJump() {}
  onDoubleJump() {}
  jump() {
    if(!this.canJump())return;
    if(this.model.attacking)return;
    if(this.wallColliding&&this.wallJumps) {
      // this.vx = -this.dx*5;
    }
    this.canUnJump = true;
    this.vy = -this.jumpStrength;
    this.model.jump();
    this.jumpCount ++;
    if(this.jumpCount>1) {
      this.model.doubleJump();
      this.onDoubleJump();
    }else {
      this.onJump();
    }
    this.grounded = false;
  }
  unjump() {
    if(!this.canUnJump)return;
    if(this.grounded)return;
    if(this.vy>0) return;
    this.canUnJump = false;
    this.vy = this.vy/2;
  }
  draw() {
    this.model.draw(this.x,this.y);
    if(this.health<this.maxHealth-1) {
      canvas.fillStyle = "black";
      canvas.fillRect(this.x-32,this.y-62,64,14);
      canvas.fillStyle = "green";
      canvas.fillRect(this.x-30,this.y-60,60*this.health/this.maxHealth,10);
    }
    // canvas.fillStyle = 'red';
    // canvas.fillRect(this.x-this.w/2,this.y-this.h/2,this.w,this.h);
  }
  die() {
    this.shouldDelete = true;
    var g = 0.2;
    var x = this.x;
    var y = this.y;
    for(var i=0;i<9;i++) {
      var vx = (Math.random()-0.5)*4;
      var vy = (Math.random()-0.5)*4-2;
      this.scene.addEntity(new Particle(x,y,10,10,'black',vx,vy,40,g));
    }
  }
}

class Curley extends Platformer {
  constructor(x,y) {
    super(x,y,40,40,'black');
    this.grav = 0;
    this.speed = 0;
  }
  update() {
    var target = this.scene.player;
    if(target) {
      var targetX = target.x+200;
      var targetY = target.y-200;
      // this.mx=targetX>this.x?1:-1;
      this.mx=-1;
      var targetVx = (targetX-this.x)/10;
      var targetVy = (targetY-this.y)/10;
      this.vx += (targetVx - this.vx)/10;
      this.vy += (targetVy - this.vy)/50 + Math.cos(frameCount*Math.PI/40)/20;
    }
    super.update();
  }
  initModel(w,h,color) {
    this.model = new CurleyModel(this);
  }
  setScene(scene) {
    this.scene = scene;
    scene.specialActors.curley = this;
  }
}

class SirDanathon extends Platformer {
  constructor(x,y) {
    super(x,y,20,80,"#03a");
  }
  setScene(scene) {
    this.scene=scene;
    scene.specialActors.sirDanathon = this;
  }
  initModel() {
    this.model = new SirDanathonModel(this);
  }
}

class NPC extends Platformer {
  constructor(x,y,model) {
    super(x,y,20,40,"white");
    this.mmodel = model;
    this.initModel(2000,0,this.color);
    this.mx = -1;
    this.jumpStrength=9;
  }
  initModel(w,h,color) {
    if(this.mmodel) {
      this.model = new this.mmodel(w,h,color,this);
    }
  }
  update() {
    super.update();
    if(this.wallColliding) {
      this.mx = -this.mx;
      if(this.grounded)
        this.jump();
    }
  }
}

class Sunflower extends Platformer {
  constructor(x,y,dies) {
    super(x,y,40,40,'red');
    this.evil = Math.random()>.7;
    this.life = 500;
    this.maxHealth = 
    this.health = 15;
    this.dies = dies;
  }
  initModel() {
    this.model = new SunFlowerModel(this);
  }
  getInputs() {
    if(this.dies)
      if(this.life--<=0)this.die();
    if(!this.evil)return;
    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;
    var ds = Math.abs(dx)+Math.abs(dy);
    if(ds<100) {
      this.model.becomeEvil();
    }
    if(ds<50&&this.invul<=0) {
      player.collide(this);
    }
  }
}

class LightSouce {
  constructor(x,y,color){
    this.r = 400;
    var grd = canvas.createRadialGradient(0,0,0,0,-100,this.r);
    grd.addColorStop(0,color);
    grd.addColorStop(1,"#00000000");
    this.color = grd;
    this.x = x;
    this.y = y;
  }
  update(){}
  draw(){
    canvas.save();
    canvas.globalAlpha=0.1;
    canvas.translate(this.x,this.y);
    canvas.beginPath();
    canvas.fillStyle = this.color;
    canvas.arc(0,0,this.r,0,Math.PI*2);
    canvas.fill();
    canvas.restore();
  }
  lightDraw(ctx,cx,cy) {
    ctx.save();
    ctx.translate(this.x+cx,this.y+cy);
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(0,0,this.r*1.5,0,Math.PI*2);
    ctx.fill();
    ctx.restore();
  }
}

class Pickup {
  constructor(x,y) {
    this.x=x;
    this.y=y;
    this.dy = 0;
  }
  update() {
    this.dy = Math.cos(frameCount*Math.PI/20)*5;
    if(!this.scene)return;
    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;
    var ds = Math.abs(dx)+Math.abs(dy);
    if(ds<20) {
      this.pickup(player);
    }
  }
  pickup() {
    SOUNDS.hit.play();
    this.shouldDelete = true;
  }
  draw() {
    canvas.save();
    canvas.translate(this.x,this.y+this.dy);
    if(this.drawable)this.drawable.draw();
    canvas.restore();
  }
}

class Boots extends Pickup {
  constructor(x,y) {
    super(x,y);
    this.drawable = new ImageDrawable(IMAGES.Boot, 0,0,20);
  }
  update() {
    this.dy = Math.cos(frameCount*Math.PI/20)*5;
    if(!this.scene)return;
    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    if(dx>0) {
      this.pickup(player);
    }
  }
  pickup(player) {
    player.addShoes();
    super.pickup();
  }
}

class Player extends Platformer {
  constructor(x,y) {
    super(x,y,20,40,'darkgray');
    // this.canAttack = false;
    this.outlineColor = "black";
    window.parent.player = this;
  }
  addShoes() {
    this.model.addShoes();
    this.canAttack = true;
  }
  initModel() {
    this.model = new PlayerModel(this);
  }
  onJump() {
    SOUNDS.jump.play();
  }
  onDoubleJump() {
    SOUNDS.jump2.play();
  }
  
  setScene(scene) {
    scene.specialActors.kwak = this;
    this.scene=scene;
  }
  getInputs() {
    this.model.outlineColor = this.outlineColor;
    if(this.inputBlocked)return;
    // if(this.scene.dialogueController.simpleDialogue.text&&!this.scene.dialogueController.current.done) {
      // this.mx = 0;return;
    // }
    var axes = getAxes();
    this.mx = axes.inputX;
    var axesDown = getAxesDown();
    if(axesDown.inputY<0) {
      this.jump();
    }
    if(axesDown.inputY>0) {
      this.crouch();
    }
    if(axes.inputY >= 0) {
      this.unjump();
    }
    this.crouching = axes.inputY > 0;
    if(getButtonDown(Buttons.B)) {
      this.attack();
    }
    if(keys[82]) {
      this.die();
    }
  }
  die() {
    if(this.shouldDelete)return;
    super.die();
    SOUNDS.blowImpact.play();
    setTimeout(e=>
      this.scene.respawn(), 1000);
  }
}

class Chomper extends Platformer {
  constructor(x,y) {
    super(x,y,50,50,"brown");
    // this.speed = 1;
    // this.mx = -1;
    this.jumpStrength = 6;
    // this.wallJumps = false;
    // this.wallSlide = false;
    this.speed = 1;
    this.mx = -1;
    this.heal = 0.01;
    this.hitSound = SOUNDS.enemyHit;
  }
  die() {
    super.die();
    this.scene.enemyCount--;
  }
  // getHit(other) {
  //   super.getHit(other);
  //   SOUNDS.enemyHit.play();
  // }
  getInputs() {
    if(this.grounded&&!this.scene.collides(this.x+this.dx*10,this.y+this.h/2+10)) {
      this.mx = -this.mx;
    }
    if(this.grounded&&this.wallColliding) {
      this.mx = -this.mx;
    }
    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;
    var ds = Math.abs(dx)+Math.abs(dy);
    if(ds<50&&this.invul<=0) {
      player.collide(this);
    }
  }
  initModel(w,h,color) {
    this.model = new ChomperModel(w,h,color,this);
  }
  setScene(scene) {
    this.scene=scene;
    scene.enemyCount ++;
  }
}

class FakeSpikeTrigger {
  constructor(x,y) {
    this.x=x;this.y=y;
    
  }
  update() {
    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;
    var ds = Math.abs(dx)+Math.abs(dy);
    if(ds<20&&!this.scene.fakinit) {
      this.scene.fakinit = true;
      this.scene.dialogueController.add(GetDialogueData(this.scene,"CurleyFakeSpikeFound"));
    }
  }
}

class Psykei extends Platformer {
  constructor(x,y) {
    super(x,y,20,80,"#0a0");
  }
  setScene(scene) {
    this.scene=scene;
    scene.specialActors.psykei = this;
  }
  initModel() {
    this.model = new PsykeiModel(this);
  }
}

class Boss extends Psykei {
  constructor(x,y) {
    super(x,y);
    this.health = 100;
    this.grav = 0;
    this.scaleX = 1.5;
    this.scaleY = 1.5;
  }
  getInputs() {
    var targetX = this.scene.level.width/2 + Math.cos(frameCount*Math.PI/80)*100;
    var targetY = this.scene.level.height/2 + Math.sin(frameCount*Math.PI/80)*100;
    var targetVx = (targetX-this.x)/10;
    var targetVy = (targetY-this.y)/10;
    this.vx += (targetVx - this.vx)/5;
    this.vy += (targetVy - this.vy)/10 + Math.cos(frameCount*Math.PI/40)/20;

    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;
    var ds = Math.abs(dx)+Math.abs(dy);
    if(ds<50&&this.invul<=0) {
      player.collide(this);
    }
    // var player = this.scene.player;
    // if(!player)return;
    // var dx = player.x - this.x;

  }
}


class Drone extends Platformer{
  constructor(x,y) {
    super(x,y,50,50,"brown");
    this.speed = 1;
    this.grav = 0.1;
    this.shootTime = 60*2;
    this.shootTimer = 0;
    this.heal = 0.01;
    // this.offset = Math.random()*this.shootTime
  }
  getHit(other) {
    super.getHit(other) 
    this.shootTimer =0;
  }
  setScene(scene) {
    this.scene=scene;
    scene.enemyCount ++;
  }
  die() {
    super.die();
    this.scene.enemyCount--;
  }
  getInputs() {
    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;
    var ds = Math.abs(dx)+Math.abs(dy);
    if(ds<50&&this.invul<=0) {
      player.collide(this);
    }
    this.dx = dx>0?1:-1;
    // this.vy += Math.cos(frameCount*Math.PI/10)*.1;
    this.vy += ((player.y - 50 - this.y)/50-this.vy)/10

    if(Math.abs(dx) < 500) {
      this.shootTimer++;
      if(this.shootTimer >= this.shootTime) {
        this.shootTimer = 0;
        this.scene.addEntity(new LaserBeam(this.x,this.y,this.dx*5, 100));
        SOUNDS.laser.play();
      }
    }
  }
  initModel() {
    this.model = new DroneModel(this);
  }
}

class CheeseburgerJohnson extends Platformer {
  constructor(x,y) {
    super(x,y,20,40,"red");
  }
  initModel(w,h,c) {
    this.model = new CheeseburgerJohnsonModel(this);
  }
  setScene(scene) {
    scene.specialActors.cheeseburgerJohnson = this;
    this.scene=scene;
  }
}

class Jabroski extends Platformer {
  constructor(x,y) {
    super(x,y,20,40,"#03a");
    this.isLounging = true;
  }
  setScene(scene) {
    this.scene=scene;
    scene.specialActors.jabroski = this;
  }
  initModel() {
    this.model = new JabroskiModel(this);
  }
}

class LaserBeam {
  constructor(x,y,vx, life) {
    this.w = 20;
    this.h = 8; 
    this.x=x;this.y=y;this.vx=vx;
    this.life=life;
  }
  update() {
    this.x += this.vx;
    this.life --;
    if(this.life<=0) {
      this.shouldDelete = true;
    }
    var player = this.scene.player;
    if(!player)return;
    var dx = Math.abs(player.x-this.x);
    var dy = Math.abs(player.y-this.y);
    if(dx<5+player.w/2 && dy<2+player.h/2) {
      player.getHit(this);
      this.shouldDelete = true;
    }
  }
  draw() {
    canvas.fillStyle = 'red';
    canvas.fillRect(this.x-this.w/2,this.y-this.h/2,this.w,this.h);
  }
}

class Particle {
  constructor(x,y,w,h,color,vx,vy,life,grav) {
    this.x=x;this.y=y;this.color=color;
    this.w=w;this.h=h;
    this.vx=vx;
    this.vy=vy;
    this.grav=grav||0;
    this.life=life;
  }
  update() {
    this.vy += this.grav;
    this.x+=this.vx;
    this.y+=this.vy;
    this.life--;
    if(this.life<=0) {
      this.shouldDelete = true;
    }
  }
  draw() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x-this.w/2,this.y-this.h/2,this.w,this.h);
  }
}

class Knight extends Platformer {
  constructor(x,y) {
    super(x,y,20,80,"brown");
    // color = "#0af";
    this.speed = 1;
    this.mx = -1;
    this.jumpStrength = 5;
    this.wallJumps = false;
    this.wallSlide = false;
    this.attackTimer = 0;
    this.attackSpeed = 80;
    this.hitSound = SOUNDS.enemyHit2;
  }
  setScene(scene) {
    this.scene=scene;
    scene.specialActors.knight = this;
  }
  getInputs() {
    if(this.grounded&&!this.scene.collides(this.x+this.dx*10,this.y+this.h/2+10)) {
      this.mx = -this.mx;
    }
    if(this.grounded&&this.wallColliding) {
      this.mx = -this.mx;
    }
    // if(this.wallColliding) {
    //   this.jump();
    // }
    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;
    var ds = Math.abs(dx)+Math.abs(dy)/2;
    var range = 50;
    var ddx = dx>0?1:-1;
    if(this.model.attacking) {
      range = 75;
    }
    if(ds<300) {
      this.attackTimer--
      if(this.attackTimer <=0) {
        this.attack();
        this.vx = ddx * 10;
        this.vy = -5;
        this.attackTimer = this.attackSpeed;
      }
    }
    if(ds<range&&this.invul<=0) {
      if(this.model.attacking) {
        player.getHit(this);
      } else {
        player.collide(this);
      }
    }
  }
  getHit(other) {
    super.getHit(other);
    this.attackTimer = this.attackSpeed;
  }
  initModel(w,h,color) {
    this.model = new StickModel(w,h,color, this);
  }
}

class GraySpike extends Platformer {
  constructor(x,y) {
    super(x,y,40,80,"#444");
    this.speed = 3;
    this.mx = 1;
    this.maxHealth =
    this.health = 120;
    this.knockBack = 0.1;
    this.isBossin = false;
    this.lightDraw = null;
    this.wallJumps = false;
    this.grav = 0.3;
  }
  getHit(other) {
    var dx = other.x-this.x;
    super.getHit(other);
    var dx = dx>0?1:-1;
    other.vx += 20*dx;
  }
  setScene(scene) {
    this.scene= scene;
    this.scene.specialActors.darkGraySpike = this;
    this.scene.enemyCount++;
  }
  die() {
    super.die();
    this.scene.enemyCount--;
  }
  initModel() {
    this.model = new DarkGraySpikeModel(this);
  }
  update() {
    super.update();
    if(this.isBossin) {
      // this.getInputs = this.getInputs1;
      // this.isBossin = false;
      this.getInputs1();
      this.scene.ambient = 'rgba(255,255,255,0.5)';

    }
  }
  getInputs1() {
    // if(this.grounded&&!this.scene.collides(this.x+this.dx*10,this.y+this.h/2+10)) {
    //   this.mx = -this.mx;
    // }
    if(this.grounded&&this.wallColliding) {
      this.mx = -this.mx;
    }

    if(frameCount%40==0) {
      this.scene.addEntity(new Sunflower(this.x,this.y, true));
      SOUNDS.pop.play();
    }

    var player = this.scene.player;
    if(!player)return;
    var dx = Math.abs(player.x-this.x);
    var dy = Math.abs(player.y-this.y);
    var ds = dx+dy;
    if(this.vy>0) {
      this.jump();
    }

    if(ds<100&&this.invul<=0) {
      player.collide(this);
    }
  }
}

