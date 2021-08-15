class Platformer {
  constructor(x,y,w,h,color) {
    this.x=x;this.y=y;this.w=w;this.h=h;
    this.vx=0;
    this.vy=0;
    this.grav = 1;
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
    this.invulTime = 20;
    this.heal = 0.05;
    this.color = color||'black';
    this.knockBack = 1;
    this.getknockBack = 1;
    this.hitSound = SOUNDS.hit;
  }
  lightDraw(ctx,cx,cy,zoom) {
    // var dx = this.x+cx;
    // var dy = this.y+cy;
    // var x = cx+dx/zoom-cx;
    // var y = cy+dy/zoom-cy;
    var x = this.x+cx;
    var y = this.y+cy;
    var dx = x-CE.width/2;
    var dy = y-CE.height/2;
    x = CE.width/2+dx*zoom;
    y = CE.height/2+dy*zoom;
    var grd = ctx.createRadialGradient(x,y,10*zoom,x,y,100*zoom);
    grd.addColorStop(0,"#ffffffff");
    grd.addColorStop(1,"#00000000");
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,CE.width,CE.height);
  }
  getHit(other) {
    if(this.invul>0)return;
    var k = 1;
    if(other.knockBack) k = other.knockBack;
    k=k*this.getknockBack;
    var dx = other.x-this.x>0?1:-1;
    this.vx = -dx*k*10;
    this.vy = -5;
    this.health -= 10;
    this.invul = this.invulTime;
    if(this.health<0) {
      this.hitSound.play(-0.1);
      SOUNDS.hitSoundthing.play(-0.5);
      this.die();
    } else {
      this.hitSound.play();
    SOUNDS.hitSoundthing.play();
      for(var i=0;i<7;i++) {
        var vx = (Math.random()-0.5)*2+this.vx/5;
        var vy = (Math.random()-0.5)*2;
        this.scene.addEntity(new Particle(this.x+this.vx,this.y,10,10,this.color,vx,vy,40,0));
      }
    }
  }
  collide(other) {
    if(this.model.attacking) {
      this.vx = 0;
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
    var grav = this.grav * 0.4;
    // if(this.wallColliding&&this.vy>0) {
    //   grav *= this.wallSlide;
    // }
    this.vy += grav;
    if(this.wallSlide&&this.wallColliding&&this.vy>0&&!this.crouching) {
      this.vy *=0.8;
    }
    if(this.vy>this.terminalVelocity)this.vy = this.terminalVelocity;
    var tvx = 44;
    if(this.vx>tvx)this.vx = tvx;
    if(this.vx<-tvx)this.vx = -tvx;
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
      this.vx = -this.dx*4;
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
      var vy = (Math.random()-0.5)*4-5;
      this.scene.addEntity(new Particle(x,y,15,15,this.color,vx,vy,40,g));
    }
  }
}