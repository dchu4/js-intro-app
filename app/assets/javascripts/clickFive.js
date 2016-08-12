var number = 0;

var jackhammer = function(box){
  number++;
  if(number === 1){
    box.style["background-color"] = "blue";
  }
  else if(number === 2){
    box.style["background-color"] = "red";
  }
  else if(number === 3){
    box.style["background-color"] = "green";
  }
  else if(number === 4){
    box.style["background-color"] = "yellow";
  }
  else if(number === 5){
    box.style["background-color"] = "black";
  }
}