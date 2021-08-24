class Particles {
    constructor(x, y, radius) {

        var options = {
            restitution: 1

        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, this.radius, options);
        // this.color = "red"
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
        
        
        
    }
    
    display() {
        var par = this.body.position;
        var angle = this.body.angle;
        console.log(par);

        push();
        translate(par.x, par.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();



    }

}