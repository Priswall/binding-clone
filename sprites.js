var isaac = [
  [
    [],
    [],
    []
  ],
  [
    [],
    [],
    []
  ],
  [
    [],
    [],
    []
  ],
  [
    [],
    [],
    []
  ],
  [
    [],
    [],
    []
  ],
  [
    [],
    [],
    []
  ],
];

function Sprite(img, x, y, w, h) {

  this.img = img;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.draw = function(c, x, y, w, h) {
  
    c.drawImage(img, this.x, this.y, this.w, this.h, x, y, w, h);
  
  }

}

function initIsaac(img) {

  var game = document.createElement("script");
  game.src = "index.js";
  document.body.appendChild(game);

}

var issacSprite = new Image();
isaacSprite.onload = function() {
  initIsaac(this);
};
isaacSprite.src = "res/player.png";
