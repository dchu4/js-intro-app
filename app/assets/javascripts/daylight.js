

var daylight = function(box_num) {

  if(box_num === 1){
    document.body.style.background = "yellow";
    var boxWithText = document.getElementById("textBox");
    boxWithText.innerHTML = "Morning";
  }
  else if(box_num === 2){
    document.body.style.background = "orange";
    var boxWithText = document.getElementById("textBox");
    boxWithText.innerHTML = "Afternoon";
  }
  else if(box_num === 3){
    document.body.style.background = "black";
    var boxWithText = document.getElementById("textBox");
    boxWithText.innerHTML = "Evening";
  }

}