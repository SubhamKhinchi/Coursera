var inputimage =null;
var imgcanvas;
var greyimage=null;
var redimage=null;
var rainbowImage=null;
function loadimage(){
    imgcanvas = document.getElementById ("can1");
    var fileinput = document.getElementById ("inputfile");
   inputimage = new SimpleImage (fileinput);
  greyimage = new SimpleImage(fileinput);
  redimage = new SimpleImage(fileinput);
  rainbowImage= new SimpleImage(fileinput);
    inputimage.drawTo (imgcanvas);
 }
function resetimage(){
  inputimage.drawTo(imgcanvas);
}
function greyfilter(){
  if(inputimage==null || !inputimage.complete()){
    alert("image not uploaded yet")
    return;
  }
  for(var pixel of greyimage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  greyimage.drawTo(imgcanvas);
}
function redfilter(){
  if(inputimage==null || !inputimage.complete()){
    alert("image not uploaded yet")
    return;
  }
  for(var pixel of redimage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen((2*avg)-255);
      pixel.setBlue((2*avg)-255);
    }
  }
  redimage.drawTo(imgcanvas);
}

function rainbowfilter(){
  if(inputimage==null || !inputimage.complete()){
    alert("image not uploaded yet")
    return;
  }
  for(var pixel of rainbowImage.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if(y < (rainbowImage.height / 7)){
      if(avg < 128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(2*avg - 255);
      pixel.setBlue(2*avg - 255);
    }
  }
    if(y >= (rainbowImage.height / 7) && y < 2*(rainbowImage.height / 7) ){
            if(avg < 128)
              {
                pixel.setRed(2*avg);
                pixel.setGreen(0.8*avg);
                pixel.setBlue(0);
              }
          else
            {
              pixel.setRed(255);
              pixel.setGreen(1.2*avg - 51);
              pixel.setBlue(2*avg - 255);
            }
        }
    if(y >= 2*(rainbowImage.height / 7) && y < 3*(rainbowImage.height / 7) )
        {
            if(avg < 128)
              {
                pixel.setRed(2*avg);
                pixel.setGreen(2*avg);
                pixel.setBlue(0);
              }
          else
            {
              pixel.setRed(255);
              pixel.setGreen(255);
              pixel.setBlue(2*avg - 255);
            }
        }
     if(y >= 3*(rainbowImage.height / 7) && y < 4*(rainbowImage.height / 7) )
        {
            if(avg < 128)
              {
                pixel.setRed(0);
                pixel.setGreen(2*avg);
                pixel.setBlue(0);
              }
          else
            {
              pixel.setRed(2*avg - 255);
              pixel.setGreen(255);
              pixel.setBlue(2*avg - 255);
            }
        }
     if(y >= 4*(rainbowImage.height / 7) && y < 5*(rainbowImage.height / 7) )
        {
            if(avg < 128)
              {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(2*avg);
              }
          else
            {
              pixel.setRed(2*avg - 255);
              pixel.setGreen(2*avg -255);
              pixel.setBlue(255);
            }
        }
     if(y >= 5*(rainbowImage.height / 7) && y < 6*(rainbowImage.height / 7) )
        {
            if(avg < 128)
              {
                pixel.setRed(0.8*avg);
                pixel.setGreen(0);
                pixel.setBlue(2*avg);
              }
          else
            {
              pixel.setRed(1.2*avg - 51);
              pixel.setGreen(2*avg -255);
              pixel.setBlue(255);
            }
        }
      if(y >= 6*(rainbowImage.height / 7) && y < 7*(rainbowImage.height / 7) )
        {
            if(avg < 128)
              {
                pixel.setRed(1.6*avg);
                pixel.setGreen(0);
                pixel.setBlue(1.6*avg);
              }
          else
            {
              pixel.setRed(0.4*avg + 153);
              pixel.setGreen(2*avg -255);
              pixel.setBlue(0.4*avg + 153);
            }
        }
    }
  rainbowImage.drawTo(imgcanvas);
}