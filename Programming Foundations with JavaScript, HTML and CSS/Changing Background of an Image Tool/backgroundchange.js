var fgImage = null;
var bgImage = null;
var fgCanvas;
var bgCanvas;

function loadForegroundImage () {
  fgCanvas = document.getElementById ("fgcan");
  var fileinput = document.getElementById ("fgFile");
  fgImage = new SimpleImage (fileinput);
  fgImage.drawTo (fgCanvas);
}

function loadBackgroundImage () {
  bgCanvas = document.getElementById ("bgcan"); 
  var fileinput = document.getElementById ("bgFile");
  bgImage = new SimpleImage (fileinput);
  bgImage.drawTo (bgCanvas);
}
  
function doComposite() { 
  var output = new SimpleImage (fgImage.getWidth(),  fgImage.getHeight());
  var greenThreshold =240;
  fgCanvas = document.getElementById ("fgcan");
  for (var pixel of fgImage.values()){
	  var x = pixel.getX();
	  var y = pixel.getY();
    if (pixel.getGreen() > greenThreshold) {	  
      var bgPixel = bgImage.getPixel(x, y);
	    output.setPixel (x, y, bgPixel);
    }
    else {
    	output.setPixel (x,y, pixel);
    }
  }
  return output;
}
function doGreenscreen (){

  if (fgImage == null || ! fgImage.complete()){
    alert("Foreground image not loaded.");
  }
  if (bgImage == null || ! bgImage.complete()){
    alert("Background image not loaded.");
  }
  clearCanvas();
  var finalImage = doComposite (); 
  finalImage.drawTo(fgCanvas);
}
function doClear(){
  var context = fgCanvas.getContext ("2d");
  context.clearRect (0,0,fgCanvas.width,fgCanvas.height);
  var context2 = bgCanvas.getContext("2d");
  context2.clearRect (0,0,bgCanvas.width,bgCanvas.height);
}
function clearCanvas(){
	doClear ();
}