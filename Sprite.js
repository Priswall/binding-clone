var isaac = [];
var burningBasementBackground = new Image();
burningBasementBackground.src = "res/basement_backdrop.png";

function Frame(img, x, y, w, h, d) {
  this.img = img;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.duration = d;
  this.offSet = new Vector(0, 0);
  
  this.draw = function(x, y) {
    c.drawImage(img, this.x, this.y, this.w, this.h, x, y, this.w, this.h);
  }
}

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

function Rect(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

function random(low, high) {
  return Math.round(Math.random() * (high - low)) + low;
}

function Animation() {
  this.frames = [];
  this.currentFrame = 0;
  this.frame = 0;
  this.isFinished = false; 
  this.isPlaying = false;
  this.loop = false;

  this.load = function(f) {
    this.frames = f;
  }
  
  this.play = function() {
    if(this.isPlaying) {
      if(this.frame > this.frames[this.currentFrame].duration) {
        this.frame = 0;
        this.currentFrame++;
      }
      if(this.currentFrame > this.frames.length - 1) {
        if(this.loop) this.currentFrame = 0;
        else this.currentFrame = this.frames.length - 1
      }
      this.frame++;
    }
  }
}

function initIsaac(img) {
  isaac = [
    [            //head
      [
        new Frame(img, 0, 0, 32, 32, 4),     //down
        new Frame(img, 32, 0, 32, 32, 4)
      ],
      [
        new Frame(img, 64, 0, 32, 32, 4),     //right
        new Frame(img, 96, 0, 32, 32, 4)
      ],
      [
        new Frame(img, 128, 0, 32, 32, 4),    //up
        new Frame(img, 160, 0, 32, 32, 4)
      ],
      [
        new Frame(img, 64, 0, 32, 32, 4),    //left
        new Frame(img, 96, 0, 32, 32, 4)
      ]
    ],
    [
      [    //body down
        new Frame(img, 0, 32, 32, 32, 4),
        new Frame(img, 32, 32, 32, 32, 4),
        new Frame(img, 64, 32, 32, 32, 4),
        new Frame(img, 96, 32, 32, 32, 4),
        new Frame(img, 128, 32, 32, 32, 4),
        new Frame(img, 160, 32, 32, 32, 4),
        new Frame(img, 192, 32, 32, 32, 4),
        new Frame(img, 224, 32, 32, 32, 4),
        new Frame(img, 192, 0, 32, 32, 4),
        new Frame(img, 224, 0, 32, 32, 4)
      ],
      [    //body right
        new Frame(img, 0, 64, 32, 32, 4),
        new Frame(img, 32, 64, 32, 32, 4),
        new Frame(img, 64, 64, 32, 32, 4),
        new Frame(img, 96, 64, 32, 32, 4),
        new Frame(img, 128, 64, 32, 32, 4),
        new Frame(img, 160, 64, 32, 32, 4),
        new Frame(img, 192, 64, 32, 32, 4),
        new Frame(img, 224, 64, 32, 32, 4),
        new Frame(img, 0, 96, 32, 32, 4),
        new Frame(img, 32, 96, 32, 32, 4)
      ],
    ]
  ];
  requestAnimationFrame(draw);
}

var isaacSprite = new Image(224, 124);
isaacSprite.onload = function() {
  initIsaac(this);
  var script = document.createElement(script);
  script.src = "Player.js";
  document.body.appendChild(script);
};
isaacSprite.src = "res/isaac.png";
