function Room(x, y) {
  this.pos = new Vector(x, y);
  this.id = random(0, 0);
  this.name = "No room loaded!";
  this.tiles = [];
  this.baseEntities = [];
  this.activeEntities = [];
  this.hasTopDoor = false;
  this.hasBottomDoor = false;
  this.hasLeftDoor = false;
  this.hasRightDoor = false;
  this.background = undefined;
  
  this.load = function() {
    this.background = document.createElement("canvas");
    this.background.width = 466;
    this.background.height = 310;
    var temp = this.background.getContext("2d");
    temp.drawImage(burningBasementBackground, 0, random(0, 1) * 156, 233, 155, 0, 0, 233, 155);
    
    temp.translate(466, 0);
    temp.scale(-1, 1);
    temp.drawImage(burningBasementBackground, 0, random(0, 1) * 156, 233, 155, 0, 0, 233, 155);    
    temp.resetTransform();
    
    temp.translate(0, 310);
    temp.scale(1, -1);
    temp.drawImage(burningBasementBackground, 0, random(0, 1) * 156, 233, 155, 0, 0, 233, 155);    
    temp.resetTransform();
    
    temp.translate(466, 310);
    temp.scale(-1, -1);
    temp.drawImage(burningBasementBackground, 0, random(0, 1) * 156, 233, 155, 0, 0, 233, 155);
    
    doc.createRoom(this);
    
    for(var i = 0; i < this.tiles.length; i++) {
      for(var j = 0; j < this.tiles.length; j++) {
        var a = this.tiles[i];
        var b = this.tiles[j];
        if(b.pos.y === a.pos.y - 23.2 &&
           b.pos.x === a.pos.x) {
             a.neighbors[1] = b;
           }
        if(b.pos.y === a.pos.y + 23.2 &&
           b.pos.x === a.pos.x) {
             a.neighbors[6] = b;
           }
        if(b.pos.x === a.pos.x - 28.3 &&
           b.pos.y === a.pos.y) {
             a.neighbors[3] = b;
           }
        if(b.pos.x === a.pos.x + 28.3 &&
           b.pos.y === a.pos.y) {
             a.neighbors[4] = b;
           }
      }
      for(var j = 0; j < this.tiles[i].neighbors.length; j++) {
        var tile = this.tiles[i];
        var neighbors = this.tiles[i].neighbors;
        if(neighbors[6] !== undefined &&
           !tile.hasSprite &&
           !neighbors[6].hasSprite &&
           random(0, 6) > 4) {
             tile.rect = new Rect(0, 160, 32, 64);
             neighbors[6].rect = new Rect(0, 0, 0, 0);
             tile.sprite.offSet = new Vector(0, 9);
             tile.hasSprite = true;
             neighbors[6].hasSprite = true;
        }
        if(neighbors[4] !== undefined &&
           !tile.hasSprite &&
           !neighbors[4].hasSprite &&
           random(0, 6) > 4) {
             tile.rect = new Rect(0, 224, 64, 32);
             neighbors[4].rect = new Rect(0, 0, 0, 0);
             tile.sprite.offSet = new Vector(2, 0);
             tile.hasSprite = true;
             neighbors[4].hasSprite = true;
        }
      }
    }
  }
  
  this.update = function(entity) {
    if(entity instanceof Player) {
      if(!this.hasLeftDoor) {
        if(entity.pos.x + 8 < this.pos.x + 52) {
          entity.pos.x = this.pos.x + 44;
          entity.vel.x = 0;
        }
      }
      if(!this.hasRightDoor) {
        if(entity.pos.x + 24 > this.pos.x + 414) {
          entity.pos.x = this.pos.x + 390;
          entity.vel.x = 0;
        }
      }
      if(!this.hasTopDoor) {
        if(entity.pos.y + 20 < this.pos.y + 42) {
          entity.pos.y = this.pos.y + 22;
          entity.vel.y = 0;
        }
      }
      if(!this.hasBottomDoor) {
        if(entity.pos.y + 38 > this.pos.y + 258) {
          entity.pos.y = this.pos.y + 220;
          entity.vel.y = 0;
        }
      }
    }
  }
  
  this.draw = function() {
    c.drawImage(this.background, this.pos.x, this.pos.y);
    c.fillStyle = "white";
    c.font = "25px Arial";
    c.fillText(this.name, this.pos.x + 233, this.pos.y + 10);
  }
}

var script = document.createElement("script");
script.src = "Floor.js";
document.body.appendChild(script);
