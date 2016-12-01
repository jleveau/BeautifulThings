/**
 * Created by Julien on 01/12/2016.
 */
function Box(x, y, seed_x, seed_y, vector_len, mag){
    this.x = x;
    this.y = y;
    this.vector_len = vector_len;
    this.seed_x = seed_x;
    this.seed_y = seed_y;
    this.vector = null;
    this.mag = mag;

    this.next = function(seed_z){
        this.vector = p5.Vector.fromAngle(noise(this.seed_x,this.seed_y, seed_z)  * 2 * TWO_PI);
        this.vector.setMag(random(mag));
        return this.vector;
    };

    this.draw = function(){
        push();
        translate(x,y);
        rotate(this.vector.heading());
        line(0 ,0 , this.vector_len, 0);
        pop()
    }
}