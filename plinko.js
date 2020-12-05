class Plinko {
    constructor(x, y) {
        var options = {
            isStatic:true,
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x, this.y,10, options)
        World.add(world, this.body);
        this.radius=50;
    }
    display() {
        var pos = this.body.position;
        fill("purple");
        push()
        translate(pos.x, pos.y);
        ellipseMode(RADIUS)
        ellipse(0, 0,10);
        pop()
    }
}