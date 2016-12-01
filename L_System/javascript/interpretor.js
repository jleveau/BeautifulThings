/**
 * Created by Julien on 29/11/2016.
 */

/*
 variables : F G
 constants : + −
 start  : F−G−G
 rules  : (F → F−G+F+G−F), (G → GG)
 */

function Interpretor(rules){
    this.rules = rules;

    this.word = this.rules.start;

    this.next = function(){
        var next_word = "";
        for (var i =0; i<this.word.length; i++){
            var letter = this.word.charAt(i);
            var found = false;
            for (rule of rules.list){
                if (letter === rule.key){
                    next_word = next_word.concat(rule.value);
                    found = true;
                    break;
                }
            }
            if(!found)
                next_word = next_word.concat(letter);
        }
        this.word = next_word;
    };
}