/**
 * Created by Julien on 29/11/2016.
 */
/*
 angle  : 25°
 */

function Sierpinski(word, root, len, angle, width){
    this.word = word;
    this.root = root;
    this.len = len;
    this.angle = angle;
    this.width = width;

    this.setWord = function(word){
        this.word = word;
    };

    this.draw = function(){
        this.n++;
        translate(this.root.x,this.root.y);
        for (var i = 0; i < this.word.length; i++){
            var letter = this.word.charAt(i);
            switch(letter){
                case "F" :
                    drawForward(this.len, this.width);
                    break;
                case "G" :
                    drawForward(this.len, this.width);
                    break;
                case "+" :
                    turn(this.angle);
                    break;
                case "-" :
                    turn(-this.angle);
                    break;
                default:
                    break;
            }
        }
        this.len = this.len/2;
    };
}