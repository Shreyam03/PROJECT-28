class Chain{
    constructor(BodyA,B){
      this.chain = Constraint.create({bodyA:BodyA,pointB:B,length:10,stiffness:1.0});
      World.add(world,this.chain);
    }
    fly(){
      this.chain.bodyA=null;
    }
}