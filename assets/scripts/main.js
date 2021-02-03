// main.js

// TODO

var inputNum  = document.getElementById("volume-number")
inputNum.oninput = function() {sliderVolume()};
console.log(inputNum.value)

function sliderVolume(){
  var inp = inputNum.value
  document.getElementById("volume-slider").value = inputNum.value;
  if (inp >= 67){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
  }
  if (inp < 67 && inp >= 34){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
  }
  if (inp < 34 && inp >= 1){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
  }
  if (inp == 0){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    document.getElementById("horn-btn").disabled = true;
  }

  document.getElementById("horn-sound").volume = (inp/100);
}

var inputNum2 = document.getElementById("volume-slider")
inputNum2.oninput = function() {numberVolume()};

function numberVolume(){
  var inp2 = inputNum2.value
  document.getElementById("volume-number").value = inputNum2.value;
  if (inp2 >= 67){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
  }
  if (inp2 < 67 && inp2 >= 34){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
  }
  if (inp2 < 34 && inp2 >= 1){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
  }
  if (inp2 == 0){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    document.getElementById("horn-btn").disabled = true;
  }

  document.getElementById("horn-sound").volume = (inp2/100);
}


var element = document.getElementsByName("radio-sound");
document.getElementById("audio-selection").onchange = function() {chooseRadio()};{}


// document.getElementById("horn-sound").addEventListener("click", function(event){
//   event.preventDefault()
// });

function chooseRadio(){
  for (i = 0; i < element.length; i++){
    if (element[i].checked){
      // this gets the first letter of the type of horn
      var type = (element[i].id)[6];
      if (type == "a"){
        document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
      }
      else if (type == "c"){
        document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/car.svg";
      }
      else{
        document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
      }
    }
  }
}

document.getElementById("honk-btn").addEventListener('click', honkButton);

function honkButton(e){
  e.preventDefault();
  var sound = document.getElementById("horn-sound");
  sound.play();
}





