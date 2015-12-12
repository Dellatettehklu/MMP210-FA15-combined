var mic;
var mysound;
var playbutton;
var stopbutton;
var r;

//var rX, rY, rW, rH;
//var cX, cY, CS;
//var tX, tY, tS;

//var count = 0;


function preload(){
    mysound = loadSound('Smooth.mp3');
    
    
}

function setup() {
  createCanvas(1000, 600 );
    
    r = new spiral(300);
    
    //rX = width/3;
	//rY = height/4;
	//rW = 100;
	//rH = 100;
	
	//cX = width/2;
	//cY = height/4;
	cS = 100;
	
	//tX = 2*width/3;
	//tY = height/4;
	//tS = 100;

    

    
  // play button
  playbutton = createButton('Play');
  playbutton.position(55, 55);
  playbutton.mousePressed(playsound);
  
  // stop button
  stopbutton = createButton('Stop');
  stopbutton.position(105, 55);
  stopbutton.mousePressed(stopsound);
    
 mic = new p5.AudioIn();
  mic.start();
}

function draw()
{
  background(255,0,255);
  r.draw();
  r.move();
  
    micLevel = mic.getLevel();
}

function spiral() { 
    var xpos = width/2;
    var ypos = height/2;
    var xspeed = 2;
  
  this.move = function () {
    xpos = xpos + xspeed + y;
    if (xpos > width) {
      xpos = 0;
    }
    if (xpos < 0) {
      xpos = width;
    }
  }
  
  this.draw = function () {
noStroke();
fill(185, 244, 255);
translate(width/2, height/2);
for (var i = 0; i< 300; i++) {
rotate(0.1);
ellipse(i, 0, 10, 10);
}

      noStroke();
fill( 255, 211, 242);
for (var i = 0; i< 300; i++) {
rotate(0.1);
ellipse(i, 0, 10, 10);
}
      
noStroke();
fill( 252, 252, 191);
for (var i = 0; i< 300; i++) {
rotate(0.1);
ellipse(i, 0, 10, 10);
}
}
}
 
 function mouseDragged() 
{
  value = value + 5;
  if (value > 300) {
    value = 0;
}
}
function playsound() 
{
  if(mysound.isPlaying() == false) 
  {
    mysound.play();
  } 
}
 
function stopsound() 
{
  if(mysound.isPlaying() == true) 
  {
    mysound.pause();
  } 
}