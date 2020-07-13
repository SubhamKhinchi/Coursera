function upload(){
  var imagecanvas = document.getElementById("can");
  var fileinput = document.getElementById("finput");
  var image = new SimpleImage(fileinput);
  image.drawTo(imagecanvas);
}


