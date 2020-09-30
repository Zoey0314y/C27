class Roof{
constructor(x,y,width,height){
    
    this.x = x;
    this.y = y;
    this.rectangle = rectangle;
    this.body = Bodies.rectangle(this.x,this.y,this.width,whis.height,options);
    World.add(world,this.body);
  
  
    }
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    stroke ("pink");
    strokeWeight(20);
    fill("pink");
    rectangle(0,0,this.width,this.height);
    pop();
    
    }
  }