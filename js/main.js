//global variables
  var myArray = []; // create blank array


//Bubble Constructor
function Bubble(){
    //create x and y properties (variables)
    this.x = random(width);
    this.y = random(height);
    this.r = 20; //r is for radius which is 1/2 of the width of the circle.
    this.bubbleSize = this.r;//width and height are twice the radius


    //method: draw the bubble
    this.drawBubble = function(){
    ellipse(this.x,this.y,this.bubbleSize,this.bubbleSize);
    }
}// end of Bubble

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");


    //add stuff to the array with a loop

    for(var i =0; i <10; i++){

        //add Bubbles to the array
        myArray[i] = new Bubble();
        myArray[i].drawBubble();
    }



}//end setup

//list for mouse presses with the built-in p5 mousePressed method
function mousePressed(){
    //check that this is working
    console.log("mouse Pressed");

    //loop through myArray and check if mouse is in each Bubble
    //console.log(myArray);

    for( var i =0; i< myArray.length; i++){

    }

}//end of mousePressed
