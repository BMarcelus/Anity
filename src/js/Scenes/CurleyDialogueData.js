
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
      talkSound: SOUNDS.johnsonTalk,
      obj: game.specialActors.knight,
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
          {set: {inputBlocked: true}, entity:'kwak'},
          {person: CHARACTERS.Kwak, particles: {num: 10, color: "gray"}},
          {waitFor: 1},
{set: {passedOut: true}, entity: 'kwak'},
{waitFor: 120},
{text: "Urg", person: CHARACTERS.Kwak, doNotTarget:true},
{text: "You have emerged in Pocket Dimension **46721-C", person: CHARACTERS.Computer, doNotTarget:true},
{text: "It has a chaotic inverted linkality with a Developmental section of the Tube-R Sector", person: CHARACTERS.Computer, doNotTarget:true},
{doA: 'jump', set: {passedOut: false}, entity: 'kwak'},
{waitFor: 4},
{doA: 'unjump', entity: 'kwak'},
{waitFor: 20},
{set :{inputBlocked: false}, entity: 'kwak'},
{text: "Crap I gotta find Johnson", person: CHARACTERS.Kwak, doNotTarget:true},
{text: "Use WASD or ARROW KEYS to move", person: CHARACTERS.Computer, doNotTarget:true},

        ]
      case "CurleyStairs":
        return [
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
{set: {inputBlocked: true, mx:0}, entity: 'kwak', screenShake: 3, sound: SOUNDS.oneCrash},
{waitFor:40},
{text: "Hey what are you doing! Those spikes are dangerous!", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Make sure to take the training seriously. If you did that in the real world. You would totally die", person: CHARACTERS.Curley, doNotTarget:true},
{set: {inputBlocked: false, mx:0}, entity: 'kwak'},
      ];
    case "CurleyAttack":
      return [
{text: "Press K or X to do a Boot Blask Kick", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Be careful of these chompers, these cute little guys will bite your head off!", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Defeat all the chompers to continue using K or X", person: CHARACTERS.Curley, doNotTarget: true},
{waitForEnemyClear: 1},
{waitFor: 20},
{nextLevel:1, sound: SOUNDS.ding},
      ]
    case "CurleyCongrats":
      return [
      {waitFor:1},
      {setCondition: {pxG: 1084}, conditionTarget: "JohnsonVents"},
{text: "Anyways, Congrats! You have completed your introduction", person: CHARACTERS.Curley, doNotTarget:true},
{text: "Sit tight while we prepare your certification.", person: CHARACTERS.Curley, doNotTarget:true},
{text: "After that you can wait in a super long line while we read all of your names out one by one", person: CHARACTERS.Curley, doNotTarget:true},
{text: "But there's nowhere else to go anywas, its not like you can wall jump out of here or anything", person: CHARACTERS.Curley, doNotTarget:true},
      ]
    case "JohnsonVents" :
      return [
        {set: {mx: 1, speed: 5}, entity: "cheeseburgerJohnson"},
        {text: "Johnson!", person: CHARACTERS.Kwak, doNotTarget:true},
      ];
    case "VentsEntrance":
      return [
    {set: {mx: 1}, entity: "cheeseburgerJohnson"},
{musicStop: 1, text: "Johnson, where are you?", person: CHARACTERS.Kwak, doNotTarget:true},
{text: "[from below] Hm. Theres something in the vents", person: CHARACTERS.Psykei, doNotTarget:true},
{set: {mx: 0, outlineColor: "#d71876"}, entity: "cheeseburgerJohnson"},
{waitFor: 60, screenShake: 3, sound: SOUNDS.oneCrash},
{waitFor: 60, screenShake: 7, sound: SOUNDS.oneCrash},
{set: {y: 2000}, entity: "cheeseburgerJohnson"},
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
        {set: {inputBlocked: true, crouching: true}, entity: 'kwak'},
{text: "My Leige, I found This lurking around the vents", person: CHARACTERS.Psykei, doNotTarget:true},
{text: "Looking closely at it through my psyche powers,", person: CHARACTERS.Psykei, doNotTarget:true},
{text: "I can tell that it has a very strange, foreign presence kindof", person: CHARACTERS.Psykei, doNotTarget:true},
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
{text: "Oh, Yes my leige, intruders, of course", person: CHARACTERS.Psykei, doNotTarget:false},
{set: {dx:-1}, entity: 'psykei'},
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
{sound: SOUNDS.burr},
{set: {speed: 0, outlineColor: "#d71876", inputBlocked: true,}, entity: "kwak"},
{set: {dx:-1, inputUpdate:function(){this.jump()}}, entity: "cheeseburgerJohnson"},
{waitFor: 10},
{text: "Another intruder in the vents it seems", person: CHARACTERS.Psykei},
{text: "Nib!", person: CHARACTERS.Johnson, doNotTarget: true},
{waitFor:30, set: {mx:-1}, entity: "psykei"},
{waitFor: 30, set: {mx:0}, entity: "psykei"},
{text: "What are you doing to me? Why cant I move?", person: CHARACTERS.Kwak},
{text: "Show me your secrets, Intruder", person: CHARACTERS.Psykei, sound: SOUNDS.portalNoise},
{sound: SOUNDS.burr},
{text: "ARG", person: CHARACTERS.Kwak, sound: SOUNDS.evilFlower},
{text: "A source of magic yourself it seems. Yet you are not an Anity user", person: CHARACTERS.Psykei},
{text: "I'll be taking your little friend with me back to HQ", person: CHARACTERS.Psykei},
{text: "And as for you, outsider,", person: CHARACTERS.Psykei},
{sound: SOUNDS.stringRaise},
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
  {musicStop:1,set: {vx: -30,speed:0,inputBlocked: true,}, entity: "kwak", target: CHARACTERS.Kwak.obj, sound: SOUNDS.glassBreak},
  {waitFor: 1},
  {set: {passedOut: true}, entity: 'kwak' },
  {waitFor: 180},
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
{fadeIn: 99, set: {mx: 0,speed: 5, passedOut: false, inputBlocked: true}, entity: 'kwak'},
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
  {text: "New guy? what does he look like?", person: CHARACTERS.Kwak},
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
        {text: "Weird. doesn't sound like something he would do.", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "I can have the drones fly you over the river to the keep.", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "Once you're there, find Sir Danathon. He can catapult you the rest of the way", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "And hey if you are going up against magic users, you're gonna need a mark of protection", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "You can find GraySpike near the HQ, and he can help you out", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "And here, take these letters to GraySpike and Sir Danathon when you see them will you?", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "I haven't seen em in a while", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "Will do. Thanks boss, you've been a huge help", person: CHARACTERS.Kwak},
        {text: "...Hey, This Psykei, his face look like a giant P?", person: CHARACTERS.Kwak},
        {text: "Yeah thats him", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "Are his eyes usually red?", person: CHARACTERS.Kwak},
        {text: "Uh no... why? whats going on", person: CHARACTERS.Jabroski, sound: SOUNDS.chewing},
        {text: "... its nothing. I'm probably just overthinking it", person: CHARACTERS.Kwak},
        {text: "But if it is who I think it is... This place might be in a lot of trouble", person: CHARACTERS.Kwak},
        {fadeToBlack: 100},
        {nextLevel:1},
      ]
    case "Drawbridge":
      return [
        {waitFor: 1},        
        {set: {inputBlocked: true, mx:0}, entity: 'kwak'},
        {set: {mx: 0}, person: CHARACTERS.Knight},
        {fadeIn: 100, musicStop:1},
        {text: "Hey whats up, just giving the new updates from Anity", person: CHARACTERS.Psykei},
        {text: "A crazy powerful dark wizard has been spotted in the kingdom. He is known to be colluding with the Anreals.", person: CHARACTERS.Psykei},
        {text: "This gray humanoid blob must be stopped at all costs.", person: CHARACTERS.Psykei},
        {text: "yeah so thats it", person: CHARACTERS.Psykei},
        {text: "Yes sir, understood sir. The goon, sir, aprehend him, sir.", person: CHARACTERS.Knight},
        {waitFor: 30, target: CHARACTERS.Kwak.obj},
        // {set: {shouldDelete:true}, entity: 'psykei'},
        {set: {inputBlocked: false}, entity: 'kwak'},
        {music: SOUNDS.daniSong},
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
        {musicStop: true,},
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
        case "AnityEntrance" :
          return [
            {set: {inputBlocked: true, mx: 0}, entity: 'kwak'},
            {set: {dx: -1}, entity: 'psykei'},
            {waitFor: 20},
            {target: CHARACTERS.Psykei.obj},
            {waitFor: 100},
            {target: CHARACTERS.Kwak.obj},
            {waitFor: 10},
            {set: {mx: 1}, entity: 'kwak'},
            {setCondition: {pxG: 1030}, conditionTarget: "nextLevel"},
          ]
        case "nextLevel" :
          return [
            {set: {mx: 0}, entity: 'kwak'},
            {fadeToBlack: 40},
            {nextLevel: 1}
          ];
        case "Lair":
          return [
            {music: SOUNDS.creepySong},
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
        {sound: SOUNDS.burr},
        {text: "I bet you're thinking... its time for a boss fight, right?", person: CHARACTERS.Psykei},
        {sound: SOUNDS.burr},        
        {text: "I'm afraid that won't be necessary", person: CHARACTERS.Psykei},
        {sound: SOUNDS.burr},        
        {text: "I found your secrets, Outsider", person: CHARACTERS.Psykei},
        {text: "I've discovered what all this is about. This world has seemed off from the beginning", person: CHARACTERS.Psykei,set: {fourthwall: true}, entity: 'psykei'},
        {text: "Forced obscure referrences, weird plot devices that don't really make any sense.", person: CHARACTERS.Psykei,set: {fourthwall: true}, entity: 'psykei'},
        {text: "Characters so awkwardly mixed from realy life and original content that they lack real purpose and direction", person: CHARACTERS.Psykei,set: {fourthwall: true}, entity: 'psykei'},
        {text: "What? What are you talking about?", person: CHARACTERS.Kwak,set: {fourthwall: true}, entity: 'psykei'},
        {sound: SOUNDS.burr},
        {text: "Silence!", person: CHARACTERS.Psykei, screenShake: 3, sound: SOUNDS.oneCrash},
        {musicStop: true, fourthWall: 1},        
        {sound: SOUNDS.burr},
        {text: "The Game is a Liar", person: CHARACTERS.Psykei, slow: true},
        {text: "What? What is that supposed to mean?", person: CHARACTERS.Kwak},
        {fourthWall: 2},        
        {sound: SOUNDS.stringRaise},
        {text: "This game was not made in Unity", person: CHARACTERS.Psykei,set: {fourthwall: true}, entity: 'psykei'},
        {fourthWall: 3, sound:SOUNDS.pop},   
        {waitFor: 50},     
        {text: "Lying about your game engine. A strange thing to keep from your players.", person: CHARACTERS.Psykei,set: {fourthwall: false}, entity: 'psykei'},
        {sound: SOUNDS.burr},
        {text: "What did you use!?", person: CHARACTERS.Psykei, screenShake: 4},
        {text: "Nothing...", person: CHARACTERS.Kwak},
        {sound: SOUNDS.burr},
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
        {text: "I... I...", person: CHARACTERS.Kwak},
        // {text: "I wanted to be accepted. To have a following. Like they do.", person: CHARACTERS.Kwak},
        {text: "You Idiot", person: CHARACTERS.Psykei, screenShake: 3, sound: SOUNDS.oneCrash},
        {text: "Do you know what Anity means?", person: CHARACTERS.Psykei},
        {text: "What? Anity isn't a real word", person: CHARACTERS.Kwak},
        {text: "Not according to Urban dictionary", person: CHARACTERS.Psykei},
        {text: "A way to sort into groups", person: CHARACTERS.Psykei},
        {text: "this isn't about winning. This is about you feeling insecure. about fitting in", person: CHARACTERS.Psykei},
        {text: "Well, say goodbye to your chances now. No boss fight. No climatic ending", person: CHARACTERS.Psykei},
        {sound: SOUNDS.burr},
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
          {waitFor: 20},
          {set: {dx: -1}, entity: 'kwak'},
          {waitFor: 80},
          {set: {dx: 1}, entity: 'kwak'},
          {waitFor: 80},
          {set: {mx: 1, speed: 1}, entity: 'kwak'},
          {waitFor: 80},
          {set: {mx: 0, speed: 5}, entity: 'kwak'},
          {waitFor: 80},
          {pausesOnClickOff: false},
          {text: "Well...", person: CHARACTERS.Kwak},
          {text: "...I guess thats it", person: CHARACTERS.Kwak},
          {text: "Theres nothing left of the game", person: CHARACTERS.Kwak},
          {text: "You'll just have to quit...", person: CHARACTERS.Kwak},
          {text: "But, Hey.", person: CHARACTERS.Kwak},
          {text: "People don't really care that much about what engine you use.", person: CHARACTERS.Kwak},
          {text: "Javascript is fine!", person: CHARACTERS.Kwak},
          {text: "You can even run code in the console while the game is running", person: CHARACTERS.Kwak},
          {text: "I could just say player.x += 100, and boom teleportation", person: CHARACTERS.Kwak},
          {text: "...", person: CHARACTERS.Kwak},
          {text: "hey", person: CHARACTERS.Kwak},
          {text: "wait a minute", person: CHARACTERS.Kwak},
          {text: "You!", person: CHARACTERS.Kwak},
          {text: "You can get us out of here!", person: CHARACTERS.Kwak},
          {text: "Open the console! do you know how to do that?", person: CHARACTERS.Kwak},
          {text: "I think its cmd-option-J or ctrl-shift-J", person: CHARACTERS.Kwak},
          {text: "If that doesn't work then just google open console for your web browser", person: CHARACTERS.Kwak},
          {text: "Then you can type in comands", person: CHARACTERS.Kwak},
          {text: "All you have to do is teleport me past the cage!", person: CHARACTERS.Kwak},
          {text: '"player.x += 100" should work', person: CHARACTERS.Kwak},
          {text: 'Open the console and type "player.x += 100"', person: CHARACTERS.Kwak,persist: true},
        ]
        case "Teleported":
          return [
            {doA: 'jump', entity: 'kwak'},
            {waitFor: 10},
            {doA: 'unjump', entity: 'kwak'},
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
            {music: SOUNDS.victorySong},
            {text: "Thanks For Playing!", persist: true},
            {waitForEnemyClear:1},
          ]
      default:
        return null;
    }
  }