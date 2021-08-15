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
    canvas.fillStyle = "white";
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
    if(getButtonDown(Buttons.cheatForward)&&DEV) {
      this.driver.setScene(new this.next());
      return;      
    }
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