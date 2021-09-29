function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
couch=ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded(){
  console.log("Model is loaded");
}
function draw(){
image(video,0,0,300,300);
couch.classify(video,gotResult);
}
function gotResult(error,results){
  if(error){
    console.log(error);
  }
  else{
    console.log(results);
    document.getElementById("eggg").innerHTML=results[0].label;
    document.getElementById("egg").innerHTML=results[0].confidence.toFixed(0);
  }
}



