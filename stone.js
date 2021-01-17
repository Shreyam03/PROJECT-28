class Stone{
    constructor()
    {
     var options={
         isStatic:false,
         restitution:0,
         friction:1,
         density:1.2
     }
     this.body=Bodies.circle(200,600,15,options);
     this.radius=15;
     this.image=loadImage("stone.png");
     World.add(world,this.body);
    }
    display()
    {
     var pos=this.body.position;
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,60,60);

    }
}