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
    room.name = "Testing";
    for(var i = 0; i < this.commands.length; i++) {
      if(this.commands[i][0] === "[") {
        var temp = this.commands[i].replace(/[\[\]]+/g, "");
        room.name = temp;
      }
      room.name = this.commands[i][0];
      else if(this.commands[i] !== "\n")
        result.push(this.commands[i].split(" "));
    }
    for(var i = 0; i < result.length; i++) {
      switch(String(result[i])) {
        case "tile":
          switch(Number(result[i + 1])) {
            case 0:
              room.tiles.push(new Rock(room.pos.x + (74 + (Number(result[i + 2]) * 23.2)), room.pos.y + (46 + (Number(result[i + 3]) * 23.2))));
              break;
          }
          break;
      }
    }
  } 
}

var doc = new floorDoc();
doc.load("gdgfd.gfdgfd");
