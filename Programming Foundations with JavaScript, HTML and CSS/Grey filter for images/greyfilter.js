var image;
function upload(){
  var imagecanvas1 = document.getElementById("can1");
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  image.drawTo(imagecanvas1);
}
function makegrey(){
  for(var pixel of image.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imagecanvas2 = document.getElementById("can2");
  image.drawTo(imagecanvas2);
}


