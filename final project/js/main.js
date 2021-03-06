//creating  global variables. 
var mic;
var mysound;
var playbutton;
var stopbutton;
var r;
var r2;
var r3;

var songPlaying;
var colorIndex;



// create the setup function.
function setup() {
    createCanvas(1200, 800);
    frameRate(30);
    
    //creating variables for each spiral.
    r = new spiral(300);
    r2 = new spiral(-150);
    r3 = new spiral(-100);
   
     colorIndex = color(random(255), random(255),random(255));

    songPlaying = false;

    // creating a callback for the json file.
    loadJSON('js/data/sample.json', jsonLoaded);

   //get audio from an input.
    mic = new p5.AudioIn();
    mic.start();
    
}// end of setup.

function soundLoaded() {
    console.log('soundLoaded');
    showButton();

    if (songPlaying) {
        mysound.play();
    }

} //end of soundLoaded.

//create a  callback function 
function jsonLoaded(data) {
    sounds = data.soundFiles;
    cursound = 0;     
    mysound = loadSound(sounds[cursound], soundLoaded);

} //end of function jsonLoaded.

//This function checks to see if mysound is playing.
function checkSound() {

   console.log('songPlaying', songPlaying);
    if (songPlaying) {
         console.log('isPlaying', mysound.isPlaying());
         if (mysound.isPlaying()) {
              //        mysound();
   
           } else {
               console.log('in false');
               cursound += 1;
               console.log(cursound);
               if(cursound >sounds.length){
                   cursound =0;
               }
              mysound = loadSound(sounds[cursound], soundLoaded);
               songPlaying = false;
         }
       }
} // end of checkSound.

//create a function for the play and stop buttons.
function showButton() {


    // play button
    playbutton = createButton('Play');
    playbutton.position(105, 105);
    playbutton.mousePressed(playsound);

    // stop button
    stopbutton = createButton('Stop');
    stopbutton.position(175, 105);
    stopbutton.mousePressed(stopsound);
    
} //end of showButton function.


function draw() {
    background(255, 0, 255);
    r.draw();
    r.move();

    r2.draw();
    r2.move();

    r3.draw();
    r3.move();

    
    
    checkSound();

    //measure the volume by using getLevel.
    micLevel = mic.getLevel();
}

function spiral(xpos) {
    //create variables using objects.
    this.xpos = width / 2;
    this.xpos = 0;
    this.ypos = height / 2;
    this.x = xpos;
    this.y = 0;
    this.xspeed = 1;
    this.spinspeed = 0.1;



    this.move = function () {
        //xpos = xpos + xspeed + y;
        this.x = this.x + this.xspeed + this.y;
        if (this.x > width - 100) {
            this.x = -120;
        }
        if (this.x < -120) {
            this.x = width - 100;
            
        }

    }
    
   
 

    
    this.draw = function () {
        push();
        translate(this.x, this.y);
        this.spinspeed += 0.0002;
        noStroke();
        fill(colorIndex);
        translate(width / 2, height / 2);
        for (var i = 0; i < 300; i++) {
            rotate(this.spinspeed);
            ellipse(i, 0, 10, 10);
        }


        noStroke();
        fill(255, 211, 242);
        for (var i = 0; i < 300; i++) {
            rotate(this.spinspeed);
            ellipse(i, 0, 10, 10);
        }


        noStroke();
        fill(252, 252, 191);
        for (var i = 0; i < 300; i++) {
            rotate(this.spinspeed);
            ellipse(i, 0, 10, 10);
        }
        pop();
    } // end of draw function.
} // end of function spiral.

//playsound function checks to see if mysound is playing.
function playsound() {
    if (mysound.isPlaying() == false) {
        mysound.play();
        songPlaying = true;
    }
}// end of playsound.

//playsound function checks to see if mysound is paused..
function stopsound() {
    if (mysound.isPlaying() == true) {
        mysound.pause();
        songPlaying = false;
    }
} // end of stopsound.