var isaac = [];

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

  isaac = [
    [            //head
      [
        new Sprite(img, 0, 0, 28, 25),     //down
        new Sprite(img, 28, 0, 56, 25)
      ],
      [
        new Sprite(img, 0, 0, 84, 25),     //right
        new Sprite(img, 28, 0, 112, 25)
      ],
      [
        new Sprite(img, 0, 0, 140, 25),    //up
        new Sprite(img, 28, 0, 168, 25)
      ],
      [
        new Sprite(img, 0, 0, 196, 25),    //left
        new Sprite(img, 28, 0, 224, 25)
      ]
    ],
    [            //body vertical
      new Sprite(img, 0, 25, 18, 38),
      new Sprite(img, 18, 25, 18, 38),
      new Sprite(img, 36, 25, 18, 38),
      new Sprite(img, 54, 25, 18, 40),
      new Sprite(img, 72, 25, 18, 39),
      new Sprite(img, 90, 25, 18, 38),
      new Sprite(img, 108, 25, 18, 38),
      new Sprite(img, 126, 25, 18, 38),
      new Sprite(img, 144, 25, 18, 40),
      new Sprite(img, 162, 25, 180, 39),
    ]
  ];
  
  var game = document.createElement("script");
  game.src = "index.js";
  document.body.appendChild(game);

}

var issacSprite = new Image();
isaacSprite.onload = function() {
  initIsaac(this);
};
isaacSprite.src = "res/player.png";
