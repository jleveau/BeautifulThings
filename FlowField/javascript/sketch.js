/**
 * Created by Julien on 01/12/2016.
 */

var canvas;
var DIM_X = 1600;
var DIM_Y = 800;

var flowfield;
var framerate_display;

function setup(){
    canvas = createCanvas(DIM_X,DIM_Y);
    flowfield = new FlowField(DIM_X,DIM_Y,10, 0.1, 0.01, 5000, 1);
   // framerate_display = createP(frameRate());
    background(255);
    stroke(0, 5);
    strokeWeight(1);

}

function draw(){
   // framerate_display.html(frameRate());
    flowfield.next();

    flowfield.draw();
}