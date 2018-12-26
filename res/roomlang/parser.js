function floorDoc() {
  this.fileName = "";
  this.commands = [];
  
  this.load = function(fileName) {
    this.fileName = fileName;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "res/rooms/basement.floor", true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        var allText = rawFile.responseText;
        this.commands = allText.split("\n");
      }
    }
    rawFile.send();
  }
  
  this.createRoom = function(room) {
    var result = [];
    for(var i = 0; i < this.commands.length; i++) {
      if(this.commands[i][0] === "[") {
        var temp = this.commands[i].replace(/[\[\]]+/g, "");
        room.name = temp;
        continue;
      }
      result = this.commands[i].split(" ");
    }
  } 
  for(var i = 0; i < result.length; i++) {
    switch(result[i]) {
      case "tile":
        switch(result[i + 1]) {
          case 0:
            tiles.push(new Rock(room.pos.x + (74 + (result[i + 2] * 23.2)), room.pos.y + (46 + (result[i + 3] * 23.2))));
            break;
        }
        break;
    }
  }
}

var doc = new floorDoc();
doc.load("gdgfd.gfdgfd");
