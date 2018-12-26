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
        var string = document.createElement("h1");
        string.innerHTML = this.commands[0];
        string.style.color = "white";
        document.body.appendChild(string);
      }
    }
    rawFile.send();
  }
  
  this.createRoom = function() {
    
  }
}

var doc = new floorDoc();
doc.load("gdgfd.gfdgfd");
