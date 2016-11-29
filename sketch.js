
var DIM_X = 1200;
var DIM_Y = 800;

var button_plant_tree;
var button_serpinski;
var button_pythagoras;
var button_dragon_curves;
var button_fluffy_tree;


var canvas;
var interpretor;
var tree;

var n;

function keyPressed() {
    if (keyCode === ENTER && interpretor) {
       // tree_word.next();
        interpretor.next();
        tree.setWord(interpretor.word);
        n++;
        redraw();
    }
}

function printTextPleaseClick() {
    fill(255);
    textSize(16);
    text("Select a System L", 20, 20);
}

function printTextDraw() {
    fill(255);
    textSize(16);
    text("Press Enter to grow", 20, 20);
}

select_plant_tree = function(){
    n=1;
    interpretor = new Interpretor(rules_plant_tree);
    tree = new PlantTree(interpretor.word, {x : DIM_X/3, y : DIM_Y}, 300, radians(25), 0.5);
    redraw();
};

select_serpinski_triangle = function(){
    n=1;
    interpretor = new Interpretor(rules_sierpinski_triangle);
    tree = new Sierpinski(interpretor.word, {x : 2*DIM_X/3, y : DIM_Y}, 800, radians(120), 0.5);
    redraw();
};

select_pythagoras_tree = function(){
    n=1;
    interpretor = new Interpretor(rules_pythagoras);
    tree = new Pythagoras(interpretor.word, {x : DIM_X/2, y : DIM_Y}, 800, radians(45), 0.5);
    redraw();
};

select_dragon_curves = function(){
    n=1;
    interpretor = new Interpretor(rules_dragon_curves);
    tree = new DragonCurves(interpretor.word, {x : DIM_X/2, y : DIM_Y/2}, 500, radians(90), 0.5);
    redraw();
};

select_fluffy_tree = function(){
    n=1;
    interpretor = new Interpretor(rules_fluffy_tree);
    tree = new FluffyTree(interpretor.word, {x : DIM_X/2, y : DIM_Y}, 250, radians(25), 0.5);
    redraw();
};

function setup(){
    noLoop();

    button_plant_tree = createButton('Plant tree');
    button_plant_tree.position(20, 10);
    button_plant_tree.mousePressed(select_plant_tree);

    button_serpinski = createButton('Serpinski triangles');
    button_serpinski.position(120, 10);
    button_serpinski.mousePressed(select_serpinski_triangle);

    button_pythagoras = createButton('Pythagoras tree');
    button_pythagoras.position(280, 10);
    button_pythagoras.mousePressed(select_pythagoras_tree);


    button_dragon_curves = createButton('Dragon Curves');
    button_dragon_curves.position(420, 10);
    button_dragon_curves.mousePressed(select_dragon_curves);

    button_fluffy_tree = createButton('Fluffy Tree');
    button_fluffy_tree.position(550, 10);
    button_fluffy_tree.mousePressed(select_fluffy_tree);


    canvas = createCanvas(DIM_X, DIM_Y);
    canvas.position(50,50);

}

function draw(){
    resetMatrix();
    background(51);

    if (tree){
        printTextDraw();
        tree.draw();
    }
    else {
        printTextPleaseClick();
    }
}
