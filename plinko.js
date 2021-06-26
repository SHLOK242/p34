class Plinko{

    constructor(x,y){

        this.body=Bodies.circle(x,y,10,{isStatic:true})
        World.add(world,this.body)
    }

    display(){

        push ()
        fill ("white")
        ellipseMode(CENTER)
        ellipse(this.body.poition.x,this.body.position.y,10,10)
        pop ()
    }
}