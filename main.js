Webcam.set({
    width:360, 
    height:300,
    image_format:'png',
    png_quality:90
});
webcam=document.getElementById("webcam");
Webcam.attach('#webcam');
function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    })
}
console.log("ml5 version: " , ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/C6NvPoY7e/model.json', modelLoaded);
function modelLoaded(){
    console.log(modelLoaded);
}