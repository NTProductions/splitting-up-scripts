// UI
var mainUI = (function () {
var window = new Window("palette", "", undefined);
window.orientation = "column";

var bOne = window.add("button", undefined, namesArray[0]);
var bTwo = window.add("button", undefined, namesArray[1]);
var bThree = window.add("button", undefined, namesArray[2]);

return window;
  })();

