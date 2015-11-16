// This are the global varaiables.
var startColors;
var myDiamonds = [];
var cIndex = 0;
var lineIndex = 0;

function setup() {
    //create the canvas size.
    var cnv = createCanvas(1200, 850);
    cnv.parent("Diamonds");

    background('gainsboro');

// setting  arrays of colors for the diamond.

    startColors = [
   [color('black'), color('aquamarine'), color('pink'), color('blue'), color('violet'), color('red'), color('orange'), color('darkgreen'), color('darkorchid'), color('deeppink')],
    [color(255, 205, 0), color(253, 49, 0), color(57, 85, 47)],
    [color(168, 0, 84), color(137, 132, 33), color(24, 24, 96)],
    [color(32, 72, 204), color(204, 255, 143), color(178, 81, 55)],
    [color(250, 128, 167), color(255, 191, 53), color(24, 24, 96)],
    [color(104, 255, 250), color(204, 31, 19), color(255, 186, 168)],
    [color(255, 104, 225), color(136, 255, 104), color(70, 178, 41)],
    [color(12, 12, 232), color(132, 255, 190), color(35, 255, 57)],
    [color(225, 197, 220), color(47, 78, 232), color(255, 163, 65)],
    [color(178, 27, 72), color(255, 244, 103), color(255, 65, 121)],
    [color(144, 64, 178), color(255, 206, 203), color(143, 255, 203)],
    [color(19, 90, 204), color(255, 236, 104), color(167, 204, 63)],
    ];
    // draw a diamond

    drawDiamonds(startColors[cIndex]);
} // end of setup.

function drawDiamonds(colors) {
    var altRow = true;
    var c = 0;
    var x = 50;
    var y = 60;

    //Setting the for loop.
    for (var i = 0; i < 100; i++) {
        // drawDiamond(x,y, color1);
        drawDiamond(x, y, colors[c]);

        //creating an object for myDiamonds, so each diamond can work separately.
        myDiamonds[i] = {
            x: x,
            y: y
        };

        x += 100; // adding 100 to x each time.
        c++;

     if (c >= colors.length) {
            c = 0;
        }// end of if statement.

    if (x > width) {
            y += 140;

            if (altRow) {
                x = 0;
                altRow = false;
            } else {
                x = 50;
                altRow = true;

            } //end of else satement.
        } //end of second if statement.
    } // End of for loop.

} // End of  drawDiamonds

function drawDiamond(startX1, startY1, fillColor) {

    // drawing diamond
    fill(fillColor);
    noStroke();
    triangle(startX1, startY1, startX1 + 31, startY1 - 50, startX1 + 61, startY1);
    rect(startX1, startY1, 61, 30);
    triangle(startX1, startY1 + 30, startX1 + 31, startY1 + 80, startX1 + 61, startY1 + 30);


} //End of function drawDiamond.



// create a mouse pressed function for the diamonds to interract differently.
function mousePressed() {
    var d;

    for (var i = 0; i < myDiamonds.length; i++) {
        d = dist(mouseX, mouseY, myDiamonds[i].x + 35, myDiamonds[i].y + 25);
        if (d < 60) {


//check if lineindex is less than length of myDiamonds.

            if (lineIndex <= myDiamonds.length - 1) {
                          lineIndex++;
                stroke('black');
                line(myDiamonds[i].x + 5, myDiamonds[i].y + 15, myDiamonds[i + 1].x + 5, myDiamonds[i + 1].y + 15);

            } //end of if statement

//check if cindex is greater than length of startColors
            cIndex++;
            if (cIndex >= startColors.length) {
                cIndex = 0;

            }// end of if statement.

// call drawDiamonds

            drawDiamonds(startColors[cIndex]);



        }// enf of if statement

    }// end of loop
} //end mousePressed
