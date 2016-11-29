/**
 * Created by Julien on 29/11/2016.
 */

var rules_sierpinski_triangle = {
    start :  "F−G−G",
    list : [
         {key : "F",
          value : "F-G+F+G-F"},
         {key : "G",
             value : "GG"}
     ]
    };

var rules_plant_tree = {
    start :  "-X",
    list : [
        {key : "X",
            value : "F-[[X]+X]+F[+FX]-X"},
        {key : "F",
            value : "FF"}
    ]
};

var rules_pythagoras = {
    start :  "0",
    list : [
        {key : "0",
            value : "1[0]0"},
        {key : "1",
            value : "11"}
    ]
};

var rules_dragon_curves = {
    start :  "FX",
    list : [
        {key : "X",
            value : "X+YF+"},
        {key : "Y",
            value : "-FX-Y"}
    ]
};

var rules_fluffy_tree = {
    start :  "F",
    list : [
        {key : "F",
            value : "FF+[+F-F-F]-[-F+F+F]"}
    ]
};

