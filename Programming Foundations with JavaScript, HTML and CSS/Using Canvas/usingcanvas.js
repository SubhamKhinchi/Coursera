function dolime(){
  var dd1 = document.getElementById("d1");
  dd1.className = "changeback";
}
function doyellow(){
  var dd1 = document.getElementById("d1");
  dd1.className = "changetowhite";
  
  var ctx = dd1.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(10,10,60,60);
  ctx.fillRect(90,10,60,60);
  
  ctx.fillStyle = "black";
  ctx.font = "30px Arial";
  ctx.fillText ("Hello", 10,100);
}