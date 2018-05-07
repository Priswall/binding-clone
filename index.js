var cc = document.createElement("canvas");
cc.width = window.innerWidth;
cc.height = window.innerHeight;
cc.id = "canvas";
document.body.appendChild(cc);

var canavs = document.getElementById("canvas");
var c = canvas.getContext("2d");
var keys = [];
var s = "menu"

function draw() {

  if(s === "menu") {
  
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.drawImage(isaacSprite, 0, 0);
  
  }

  requestAnimationFrame(draw);

}

requestAnimationFrame(draw);
addEventListener("keydown", function(e) {

  keys[e.keyCode] = true;

})
addEventListener("keyup", function(e) {

  keys[e.keyCode] = false;

})
