class Rubber {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
      this.x =x;
      this.y=y;
      this.r=r;
       
      
      World.add(world, this.body);
    }
    display(){
    

      push();
      
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("blac");
      fill("blue");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  