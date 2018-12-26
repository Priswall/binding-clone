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
        document.innerHTML = allText;
      }
    }
    rawFile.send();
  }
  
  this.createRoom = function() {
    
  }
}

var doc = new floorDoc();
doc.load("gdgfd.gfdgfd");
