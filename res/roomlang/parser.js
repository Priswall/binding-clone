function floorDoc() {
  this.fileName = "";
  this.commands = [];
  this.roomlayouts = [];
  
  this.load = function(fileName) {
    this.fileName = fileName;
  }
  
  this.createRoom = function(room) {
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
                  var temp = new RoomLayout();
                  temp.name = "hello";
                  temp.tiles.push(new Rock(room.pos.x + (74 + (Number(result[i][2]) * 23.2)), room.pos.y + (46 + (Number(result[i][3]) * 23.2))));
                  console.log(temp);
                  break;
              }
              break;
          }
        }
      }
    }
    rawFile.send();
  } 
}

var doc = new floorDoc();
doc.load("res/rooms/basement.floor");
