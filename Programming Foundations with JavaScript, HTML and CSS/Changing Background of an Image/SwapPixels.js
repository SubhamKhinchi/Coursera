//Swap Red and Green pixels
function swapRedGreen(pixel){
    var x = pixel.getRed();
    pixel.setRed(pixel.getGreen());
    pixel.setGreen(x);
}
for(var pixel of myimage.values()){
    swapRedGreen(pixel);
}
print(myimage);