var drawForward = function(len, width){
    strokeWeight(width);
    stroke(220, 150);
    line(0, 0, 0, -len);
    translate(0, -len);
};

var turn = function (angle) {
    rotate(angle);
};

var savePosition = function () {
    push();
};

var returnToPreviousPosition = function () {
    pop();
};

var drawLeaf = function(radius){
    fill(0,255,0);
    ellipse(0,0,radius,radius);
};