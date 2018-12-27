var TearFlags = {
  SPECTRAL: 0,
  PIERCING: 1,
  POISON: 2
};

var tearImage = new Image();
tearImage.src = "res/gfx/tears.png";

function Tear(x, y, velx, vely, damage, range, speed, tearFlags) {
  this.pos = new Vector(x, y);
  this.vel = new Vector(velx, vely);
  this.damage = damage;
  this.range = range;
  this.speed = speed;
  this.tearFlags = tearFlags;
  this.sprite = new Frame(tearImage, 64, 0, 32, 32, 0);
  
  this.update = function() {
    this.pos.x += this.vel.x * this.speed;
    this.pos.y += this.vel.y * this.speed;
    this.range -= 0.25;
  }
  
  this.draw = function() {
    this.sprite.draw(this.pos.x, this.pos.y - (this.range / 10));
  }
}

var script = document.createElement("script");
script.src = "Player.js";
document.body.appendChild(script);
