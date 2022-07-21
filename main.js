status="";
function setup(){
canvas=createCanvas(800, 500);
canvas.center();
video=createCapture(VIDEO);
video.hide()

}

function start(){
object_detector=ml5.objectDetector('cocossd', modelloaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
input_value=document.getElementById("input").value;


}

function modelloaded(){
console.log("model is loaded");
status=true;

}

function draw(){
image(video, 0, 0, 800, 500);
}
