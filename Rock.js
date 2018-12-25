function Rock(x, y) {
  this.pos = new Vector(x, y);
  this.img = new Image();
  this.img.src = "res/rocks.png";
  this.rect = new Rect(0, 0, 32, 32);
  this.sprite = new Frame(this.img, this.rect.x, this.rect.y, this.rect.w, this.rect.h, 0);
  this.hasSprite = false;
  this.neighbors = [];

  this.update = function(entity) {
    if(!entity.canFly) {
      if(entity instanceof Player) {
        if(entity.pos.x + 22 > this.pos.x &&
           entity.pos.x + 22 < this.pos.x + 10 &&
           entity.pos.y + 30 > this.pos.y &&
           entity.pos.y + 20 < this.pos.y + 17) {
             entity.pos.x = this.pos.x - 22;
             entity.vel.x = 0;
        }
        if(entity.pos.x > this.pos.x + 12 &&
           entity.pos.x < this.pos.x + 20 &&
           entity.pos.y + 30 > this.pos.y &&
           entity.pos.y + 20 < this.pos.y + 17) {
             entity.pos.x = this.pos.x + 20;
             entity.vel.x = 0;
        }
        if(entity.pos.y + 32 > this.pos.y &&
           entity.pos.y + 32 < this.pos.y + 10 &&
           entity.pos.x + 16 > this.pos.x &&
           entity.pos.x + 16 < this.pos.x + 32) {
             entity.pos.y = this.pos.y - 32;
             entity.vel.y = 0;
        }
        if(entity.pos.y + 22 > this.pos.y + 12 &&
           entity.pos.y + 22 < this.pos.y + 22 &&
           entity.pos.x + 16 > this.pos.x &&
           entity.pos.x + 16 < this.pos.x + 32) {
             entity.pos.y = this.pos.y;
             entity.vel.y = 0;
        }
      }
    }
  }

  this.draw = function() {
    c.save();
    c.translate(this.pos.x, this.pos.y);
    c.scale(1.08, 1.08);
    c.drawImage(this.sprite.img, this.rect.x, this.rect.y, this.rect.w, this.rect.h, -this.sprite.offSet.x, -this.sprite.offSet.y, this.rect.w, this.rect.h);
    c.restore();
  }
}

var script = document.createElement("script");
script.src = "Room.js";
document.body.appendChild(script);
