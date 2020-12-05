class Particle {
    constructor(x, y) {
        var options = {
            isStatic:false,
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x, this.y,5, options)
        World.add(world, this.body);
        this.radius=50;
        this.color=color(random(255,0),random(255,0),random(255,0));
    }
    display() {
        var pos = this.body.position;
        fill(this.color);
        push()
        translate(pos.x, pos.y);
        ellipseMode(RADIUS)
        ellipse(0, 0,5);
        pop()
    }
}