var color1,color2,color3;
var colors;
function setup(){

    var cnv = createCanvas(800,600);
    cnv.parent("Diamonds");

    background(255,248,220);
    color1=color('black');
    colors=[color('black'),color('aquamarine')]
    // draw a diamond
    drawDiamonds();
}

function drawDiamonds(){
    c=0;
    var x=0;
    var y=0;
for(var i=0; i<10; i++ ){
// drawDiamond(x,y, color1);
     drawDiamond(x,y, colors[c]);
    c++;
    if(c>=colors.length){
        c=0;
    }

    x+=100;
}
}

function drawDiamond(startX,startY,fillColor){

    // drawing of first diamond
    fill(fillColor);
    noStroke();
    triangle(30,75,60,20,90,75);




    rect(29,75,61,25);




    triangle(30,100,60,140,90,100);

//    //drawing of second diamond
//    fill(127,255,212);
//    noStroke();
//    triangle(110,75,140,20,170,75);
//
//    fill(127,255,212);
//    noStroke();
//    rect(109,75,61,25);
//
//    fill(127,255,212);
//    noStroke();
//    triangle(110,100,140,140,170,100);
//
//    //drawing of third diamond
//
//    fill(255,20,147);
//    noStroke();
//    triangle(190,75,220,20,250,75);
//
//    fill(255,20,147);
//    noStroke();
//    rect(189,75,61,25);
//
//    fill(255,20,147);
//    noStroke();
//    triangle(190,100,220,140,250,100);







}
