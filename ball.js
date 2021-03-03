class Ball 
{
  constructor(x,y,r) 
  {
    var ballfeatures = {
        restitution : 0.4
      } 
      this.ball = Bodies.circle (x,y,r,ballfeatures)
      World.add(world,this.ball)
      this.r = r

      this.image = loadImage("paper.png")
  }
  display ()
  {
    push ()
    translate (this.ball.position.x,this.ball.position.y) 
    rotate (this.ball.angle)
   imageMode(CENTER)
   image (this.image,0,0,50,50)
   pop ()
  }
}
