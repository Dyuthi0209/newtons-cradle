class Bob{
  constructor(x, y,radius) {
      var options = {
          'isStatic': false,
          'restitution':1.1,
          'friction':1,
          'density':5,
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      //this.height = width;
     // this.width = height;
     this.radius = radius;
      World.add(world, this.body);
    } 
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255, 8, 86);
      ellipse( 0, 0,this.radius,this.radius );
      pop();
     
    }
}