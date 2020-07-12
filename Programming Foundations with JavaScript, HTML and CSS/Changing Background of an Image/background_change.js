<script src="https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js" ></script>
var fgimage = new SimpleImage("drewRobert.png");
var bgimage = new SimpleImage("dinos.png");
var ansimage = new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
for(var pixel of fgimage.values()){
    if(pixel.getGreen()==255){
        var x = pixel.getX();
        var y = pixel.getY();
        ansimage.setPixel(x,y,bgimage.getPixel(x,y));
    }
    else{
        ansimage.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
}

print(ansimage);