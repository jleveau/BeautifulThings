/**
 * Created by Julien on 29/11/2016.
 */
/*
 angle  : 25°
 */

function Pythagoras(word, root, len, angle, width){
    this.word = word;
    this.root = root;
    this.len = len;
    this.angle = angle;
    this.width = width;

    this.setWord = function(word){
        this.word = word;
    };

    this.draw = function(){
        translate(this.root.x,this.root.y);
        for (var i = 0; i < this.word.length; i++){
            var letter = this.word.charAt(i);
            switch(letter){
                case "0" :
                    drawForward(this.len, this.width);
                    drawLeaf(20);
                    break;
                case "1" :
                    drawForward(this.len, this.width);
                    break;
                case "[" :
                    savePosition();
                    turn(this.angle);
                    break;
                case "]" :
                    returnToPreviousPosition();
                    turn(-this.angle);
                    break;
                default:
                    break;
            }
        }
        this.len = this.len/2;
    };
}