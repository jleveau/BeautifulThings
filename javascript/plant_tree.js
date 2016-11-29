/*
angle  : 25°
*/

function PlantTree(word, root, len, angle, width){
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
        console.log(this.len);
        for (var i = 0; i < this.word.length; i++){
            var letter = this.word.charAt(i);
            switch(letter){
                case "F" :
                    drawForward(this.len, this.width);
                    break;
                case "-" :
                    turn(this.angle);
                    break;
                case "+" :
                    turn(-this.angle);
                    break;
                case "X" :
                    break;
                case "[" :
                    savePosition();
                    break;
                case "]" :
                    returnToPreviousPosition();
                    break;
                default:
                    break;
            }
        }
        this.len = this.len/2;
    };
}