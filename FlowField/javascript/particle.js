/**
 * Created by Julien on 01/12/2016.
 */

function Particle (x, y){
    this.pos = createVector(x,y);
    this.speed = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.max_speed = 4;
    this.previous_pos = this.pos.copy();

    this.resetPrevious = function(){
        this.previous_pos = this.pos.copy();
    };


    this.move = function(width, height) {
        this.speed.add(this.acceleration);
        this.speed.limit(this.max_speed);
        this.resetPrevious();
        this.pos.add(this.speed);
        this.acceleration.mult(0);

        if (this.pos.x < 0){
            this.pos.x = width;
            this.resetPrevious();
        }
        else if (this.pos.x > width){
            this.pos.x = 0;
            this.resetPrevious();
        }
        if (this.pos.y > height){
            this.pos.y = 0;
            this.resetPrevious();
        }
        else if (this.pos.y < 0){
            this.pos.y = height;
            this.resetPrevious();
        }
    };

    this.apply_force = function(delta){
        this.acceleration.add(delta);
    };

    this.draw = function(){
        line(this.pos.x, this.pos.y, this.previous_pos.x, this.previous_pos.y);
    };
}