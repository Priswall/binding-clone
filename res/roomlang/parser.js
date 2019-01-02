function floorDoc() {
  this.fileName = "";
  this.commands = [];
  this.roomlayouts = [];
  
  this.load = function(fileName) {
    this.fileName = fileName;
    var result = [];
    
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", this.fileName, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        var allText = String(rawFile.responseText);
        this.commands = allText.split("\n");
        for(var i = 0; i < this.commands.length; i++) {
          var temp = this.commands[0].replace(/[\[\]]+/g, "");
          room.name = String(temp);
          if(this.commands[i] !== "\n")
            result.push(this.commands[i].split(" "));
        }
        for(var i = 0; i < result.length; i++) {
          switch(String(result[i][0])) {
            case "tile":
              switch(Number(result[i][1])) {
                case 0:
                  this.roomlayouts[this.roomlayouts.length - 1].tiles.push(new Rock(room.pos.x + (74 + (Number(result[i][2]) * 23.2)), room.pos.y + (46 + (Number(result[i][3]) * 23.2))));
                  break;
              }
              break;
            default:
              console.log(this.roomlayouts[this.roomlayouts.length - 1]);
              this.roomlayouts.push(new RoomLayout());
              this.roomlayouts[this.roomlayouts.length - 1].name = result[i].join(" ");
              break;
          }
        }
      }
    }
    rawFile.send();
  }
  
  this.createRoom = function(room) {
  } 
}

var doc = new floorDoc();
doc.load("res/rooms/basement.floor");
