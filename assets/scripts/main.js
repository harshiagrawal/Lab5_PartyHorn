// main.js

// TODO

var inputNum  = document.getElementById("volume-number")
inputNum.onclick = function() {sliderVolume()};

function sliderVolume(){
  document.getElementById("volume-slider").value = inputNum;
}

