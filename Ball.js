class ball{

    constructor(x,y,r){
      var options={
       resitution:0.3,
       isStatic:false,
       friction:0.5,
       density:1.2
      }
      this.r = r
      this.body = Bodies.circle(x,y,this.r,options);
      this.paperG = loadImage("paper.png");
    World.add(world,this.body)
    }
  
  
     display(){
     var position = this.body.position
     push()
     translate(position.x,position.y);
     fill(0, 255, 255);
     strokeWeight(5);
     imageMode(RADIUS);
     image(this.paperG,0,0,this.r,this.r);
    pop()
     }
  
  }
  
  
  