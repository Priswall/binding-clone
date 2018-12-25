function Floor() {
  this.id = 0;
  this.rooms = [];
  this.curse = 0;
  
  this.load = function() {
    this.rooms.push(new Room(0, 0));
    this.rooms.push(new Room(466, 0));
    for(var i = 0; i < this.rooms.length; i++) {
      this.rooms[i].load();
      for(var j = 0; j < this.rooms.length; j++) {
        if(this.rooms[j].pos.x == this.rooms[i].pos.x + 466) {
          this.rooms[i].hasRightDoor = true;
        }
        if(this.rooms[j].pos.x == this.rooms[i].pos.x - 466) {
          this.rooms[i].hasLeftDoor = true;
        }
        if(this.rooms[j].pos.y == this.rooms[i].pos.y + 310) {
          this.rooms[i].hasBottomDoor = true;
        }
        if(this.rooms[j].pos.y == this.rooms[i].pos.y - 310) {
          this.rooms[i].hasTopDoor = true;
        }
      }
    }
  }
}

var script = document.createElement("script");
script.src = "draw.js";
document.body.appendChild(script);
