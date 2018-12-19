var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var keys = [];
var frames = 0;
var s = "menu"
var floor = new Floor();
floor.load();
var cam = new Vector(0, 0);
var currentRoom = new Vector(0, 0);
var camVel = new Vector(0, 0);

c.scale(2, 2);
function draw() {
  frames++;
  if(s === "menu") {
    c.imageSmoothingEnabled = false;
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    if(camVel.x < 0) {
      cam.x-= 10;
      camVel.x += 10;
    }
    if(camVel.x> 0) {
      cam.x += 10;
      camVel.x -= 10;
    }
    if(Math.abs(camVel.x) < 10) {
      cam.x += camVel.x;
      camVel.x = 0;
    }
    if(camVel.y < 0) {
      cam.y -= 10;
      camVel.y += 10;
    }
    if(camVel.y > 0) {
      cam.y += 10;
      camVel.y -= 10;
    }
    if(Math.abs(camVel.y) < 10) {
      cam.y += camVel.y;
      camVel.y = 0;
    }
    c.save();
    c.translate(-cam.x, -cam.y);
    for(var i = 0; i < floor.rooms.length; i++) {
      var room = floor.rooms[i];
      if(floor.rooms[i].pos.x == currentRoom.x &&
         floor.rooms[i].pos.y == currentRoom.y) {
        room.draw();
        room.update(player);
        for(var j = 0; j < room.tiles.length; j++)
        {
          room.tiles[j].draw();
          room.tiles[j].update(player);
        }
        if(player.pos.x < room.pos.x) 
        {
          camVel.x = -466;
          currentRoom.x -= 466;
        }
        if(player.pos.y < room.pos.y) 
        {
          camVel.y = -310;
          currentRoom.y -= 310;
        }
        if(player.pos.y > room.pos.y + 310) 
        {
          camVel.y = -310;
          currentRoom.y -= 310;
        }
        if(player.pos.x > room.pos.x + 466) 
        {
          camVel.x = 466;
          currentRoom.x += 466;
        }
      }
    }
    player.update();
    player.draw();
    c.restore();
  }
  requestAnimationFrame(draw);
}

addEventListener("keydown", function(e) { keys[e.keyCode] = true; })
addEventListener("keyup", function(e) { keys[e.keyCode] = false; })
requestAnimationFrame(draw);
