let img;
var drag
var scl = 0
var hrzM = 0
var vrtM = 0
var sclSz = 20
var zoom = 0;
var zMin = 0;
var zMax = 3200;
var sensativity = 1;
var dx = 0
var dy = 0
var startX

function preload() {
  imgP = loadImage('Convo_Phone copy.png');
  imgC = loadImage('Conversation2.jpg');
}

function setup() { 
  // let cnv = createCanvas(1080/2, 1920/2);
  // cnv.position(windowWidth/2-cnv.width/2,0,'fixed')
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(17,17,17);
  push();
  translate((windowWidth/2)-(imgP.width/4),0)
  fill(0)
  noStroke();
  rect(5,5,(imgP.width/2)-10,(imgP.height/2)-10)
  image(imgC, 83, 570-zoom, imgC.width/2, imgC.height/2)
  image(imgP, 0, 0, imgP.width/2, imgP.height/2)
  pop();
  fill(17,17,17)
  noStroke();
  rect(0,1920/2-5,windowWidth,1920)
  
 
}

function mouseDragged() {
  dx += mouseX-pmouseX;
  dy += mouseY-pmouseY;
}

function mouseWheel(event) {
  zoom += sensativity * event.delta;
  zoom = constrain(zoom, zMin, zMax);
  //uncomment to block page scrolling
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}