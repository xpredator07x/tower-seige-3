class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.3,
          'friction':1.0,
          'density':1.0
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
    this.visibility=255;
     World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      if(this.body.speed<3){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        pop();
      }
    }

    Score(){
      if(this.visibility<0&& this.visibility>-105 ){
        score++;

      }
    }
    
}

