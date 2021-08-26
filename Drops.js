class createDrops{
    constructor(x, y){
        var options = {
            'friction': 0.1,
            'restitution': 0.1
        } 
        this.body = Bodies.circle(x, y, 4, options);
        this.radius = 4;
        World.add(world, this.body)
    }


    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x: random(500), y: random(500)})
        }
    }


    display(){
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}