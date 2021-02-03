// main.js

// TODO

var inputNum  = document.getElementById("volume-number");
//inputNum.addEventListener("change", buttonDisable);
inputNum.oninput = function() {sliderVolume()};
//console.log(inputNum.value)

// function buttonDisable(e){
//   let volumeVal = parseInt(e.target.value);
//   document.getElementById("volume-slider").value = volumeVal.value;
//   if (volumeVal >= 67){
//     document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
//   }
//   if (volumeVal < 67 && volumeVal >= 34){
//     document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
//   }
//   if (volumeVal < 34 && volumeVal >= 1){
//     document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
//   }
//   if (volumeVal == 0){
//     document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
//   }
//   honkBtn.disabled = volumeVal === 0;
//   document.getElementById("horn-sound").volume = (volumeVal/100);
// }

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
    
  }

  document.getElementById("horn-sound").volume = (inp2/100);
}


var element = document.getElementsByName("radio-sound");
document.getElementById("audio-selection").onchange = function() {chooseRadio()};{}

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
  var volumeLevel = document.getElementById("volume-number");
  var butn2 = document.getElementById("honk-btn");
  if (volumeLevel == 0){
    butn2.disabled = true;
  }
  else{
    butn2.disabled =false;
    sound.play();
  }
  
}





