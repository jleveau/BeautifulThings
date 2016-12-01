/**
 * Created by Julien on 01/12/2016.
 */

function FlowField(width, height, length, inc, time_inc, nb_particles, mag) {
    this.width = width;
    this.height = height;
    this.length = length;
    this.inc = inc;
    this.time_inc = time_inc;
    this.zoff = 0;
    this.particles = [];
    this.forces = [];

    {
        this.nb_box_row = floor(this.width / this.length);
        this.nb_box_column = floor(this.height / this.length);
        this.boxes = new Array(this.nb_box_row);
        for (var i =0; i<this.nb_box_row; ++i)
            this.boxes[i] = new Array(this.nb_box_column);

        for (i = 0; i< nb_particles; ++i){
            this.particles.push(new Particle(random(width),random(height)));
        }

        var xoff = 0;
        for (var x = 0; x < this.nb_box_row; ++x){
            var yoff = 0;
            for (var y = 0; y < this.nb_box_column; ++y){
                this.boxes[x][y] = new Box(x * this.length, y * this.length, xoff, yoff, this.length, mag);
                yoff += this.inc;
            }
            xoff += this.inc;
        }
    }

    this.next = function(){
        for (var x = 0; x < this.nb_box_row; ++x) {
            for (var y = 0; y < this.nb_box_column; ++y) {
                this.forces[x + y *this.nb_box_column] = this.boxes[x][y].next(this.zoff);
            }
        }
        this.zoff += this.time_inc;

        for (particle of this.particles){
            particle.apply_force(this.forces[floor(particle.pos.x/length) + floor(particle.pos.y/length) * this.nb_box_column]);
            particle.move(width, height);
        }
    };

    this.draw = function() {
        for (particle of this.particles){
            particle.draw();
        }
    }
}