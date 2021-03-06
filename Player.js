var baseStats = {
  DAMAGE: 3.5,
  SHOTSPEED: 2,
  RANGE: 23.75,
  RELOAD: 7.5,
  SPEED: 2
};

function Player() {
  this.pos = new Vector(217, 122);
  this.vel = new Vector(0, 0);
  this.size = new Vector(32, 20);
  this.acc = 0.2;
  this.maxSpeed = baseStats.SPEED;
  this.walkDown = new Animation();
  this.walkDown.loop = true;
  this.walkRight = new Animation();
  this.walkRight.loop = true;
  this.headDown = new Animation();
  this.headUp = new Animation();
  this.headLeft = new Animation();
  this.headRight = new Animation();
  this.bodySprite = undefined;
  this.headSprite = undefined;
  this.tearFlags = [];
  this.tears = [];
  this.damage = baseStats.DAMAGE;
  this.range = baseStats.RANGE;
  this.shotSpeed = baseStats.SHOTSPEED;
  this.reload = baseStats.RELOAD;
  this.cooldown = this.reload;
  
  this.update = function() {
    this.walkDown.isPlaying = true;
    this.walkRight.isPlaying = true;
    this.bodySprite = this.walkDown.frames[0];
    this.headSprite = this.headDown.frames[0];
    
    if(keys[87] && !keys[83]) {
      this.vel.y -= this.acc;
      this.walkDown.play();
      this.bodySprite = this.walkDown.frames[(this.walkDown.frames.length - 1) - this.walkDown.currentFrame];
      this.headSprite = this.headUp.frames[0];
    }
    if(keys[83] && !keys[87]) {
      this.vel.y += this.acc;
      this.walkDown.play();
      this.bodySprite = this.walkDown.frames[this.walkDown.currentFrame];
      this.headSprite = this.headDown.frames[0];
    }
    if(keys[65] && !keys[68]) {
      this.vel.x -= this.acc;
      this.walkRight.play();
      this.bodySprite = this.walkRight.frames[this.walkRight.currentFrame];
      this.headSprite = this.headLeft.frames[0];
    }
    if(keys[68] && !keys[65]) {
      this.vel.x += this.acc;
      this.walkRight.play();
      this.bodySprite = this.walkRight.frames[this.walkRight.currentFrame];
      this.headSprite = this.headRight.frames[0];
    }
    
    if(!keys[87] && !keys[83]) {
      if(this.vel.y > 0) this.vel.y -= this.acc;
      else if(this.vel.y < 0) this.vel.y += this.acc;
      if(Math.abs(this.vel.y) < this.acc) this.vel.y = 0;
    }
    if(!keys[65] && !keys[68]) {
      if(this.vel.x > 0) this.vel.x -= this.acc;
      else if(this.vel.x < 0) this.vel.x += this.acc;
      if(Math.abs(this.vel.x) < this.acc) this.vel.x = 0;
    }
    
    if(this.vel.x < -this.maxSpeed) this.vel.x = -this.maxSpeed;
    if(this.vel.x > this.maxSpeed) this.vel.x = this.maxSpeed;
    if(this.vel.y < -this.maxSpeed) this.vel.y = -this.maxSpeed;
    if(this.vel.y > this.maxSpeed) this.vel.y = this.maxSpeed;
    
    if(keys[37]) {
      this.headSprite = this.headLeft.frames[1];
      if(this.cooldown > this.reload / 4)
        this.headSprite = this.headLeft.frames[0];
      if(this.cooldown === this.reload) {
        this.tears.push(new Tear(this.pos.x, this.pos.y, -1, 0, this.damage, this.range, this.shotSpeed, this.tearFlags));
        this.cooldown = 0;
      }
    }
    else if(keys[38]) {
      this.headSprite = this.headUp.frames[1];
      if(this.cooldown > this.reload / 4)
        this.headSprite = this.headUp.frames[0];
      if(this.cooldown === this.reload) {
        this.tears.push(new Tear(this.pos.x, this.pos.y, 0, -1, this.damage, this.range, this.shotSpeed, this.tearFlags));
        this.cooldown = 0;
      }
    }
    else if(keys[39]) {
      this.headSprite = this.headRight.frames[1];
      if(this.cooldown > this.reload / 4)
        this.headSprite = this.headRight.frames[0];
      if(this.cooldown === this.reload) {
        this.tears.push(new Tear(this.pos.x, this.pos.y, 1, 0, this.damage, this.range, this.shotSpeed, this.tearFlags));
        this.cooldown = 0;
      }
    }
    else if(keys[40]) {
      this.headSprite = this.headDown.frames[1];
      if(this.cooldown > this.reload / 4)
        this.headSprite = this.headDown.frames[0];
      if(this.cooldown === this.reload) {
        this.tears.push(new Tear(this.pos.x, this.pos.y, 0, 1, this.damage, this.range, this.shotSpeed, this.tearFlags));
        this.cooldown = 0;
      }
    }
    
    if(this.cooldown < this.reload) {
      this.cooldown += 0.3;
      if(this.cooldown > this.reload) this.cooldown = this.reload;
    }
    
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    
    for(var i = 0; i < this.tears.length;) {
      this.tears[i].update();
      if(this.tears[i].range <= 0) this.tears.splice(i, 1);
      else i++;
    }
  }
  
  this.draw = function() {
    if(keys[65]) {
      c.save();
      c.translate(this.pos.x + 24, this.pos.y + 20);
      c.scale(-1, 1);
      this.bodySprite.draw(-8, -9);
      c.restore();
    } 
    else this.bodySprite.draw(this.pos.x, this.pos.y + 11);
    
    if(keys[37]) {
      this.bodySprite.draw(this.pos.x, this.pos.y + 11);
      c.save();
      c.translate(this.pos.x + 24, this.pos.y + 20);
      c.scale(-1, 1);
      this.headSprite.draw(-8, -20);
      c.restore();
    } 
    else this.headSprite.draw(this.pos.x, this.pos.y);
    
    for(var i = 0; i < this.tears.length; i++) {
      this.tears[i].draw();
    }
  };
}

var script = document.createElement("script");
script.src = "Rock.js";
document.body.appendChild(script);
