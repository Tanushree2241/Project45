class snow  {
    constructor (x,y) {
      var options = {
          "restitution" : 1,
          "friction" : 1,
          'density' : 1.0
      }
      this.r = 30;
      this.image = loadImage("snow4.png");
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world,this.body);
    }
  
    display() {
      var pos = this.body.position;
        
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(255,0,255);
      imageMode(CENTER);
      image( this.image,0,0, this.r , this.r);
      pop();
    }
  }