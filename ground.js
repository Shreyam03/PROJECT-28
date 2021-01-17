class Ground{
   constructor(){
    this.body=Bodies.rectangle(400,670,800,20,{isStatic:true});
    this.width=800;
    this.height=20;
    World.add(world,this.body);
   }
   display(){
    var pos=this.body.position;
    rect(pos.x,pos.y,this.width,this.height);
   }
}