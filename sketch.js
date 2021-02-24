var h , m , s
var hAngle , mAngle , sAngle



function setup() {
  createCanvas(500,500);
 angleMode(DEGREES);
}

function draw() {
  background("white")
  translate(250,250);

  rotate(-90);
  h = hour();
  m = minute();
  s = second();
  sAngle = map(s , 0 , 60 , 0 ,360)
  mAngle = map(m , 0 , 60 , 0 ,360)
  hAngle = map(h%12 , 0 , 12 , 0 , 360)
  stroke("yellow")
  fill("black")
  ellipse(0,0 , 350 , 350);
push();
rotate(sAngle)
stroke("red")
strokeWeight(5);
line(0,0,150,0);
pop();

push();
rotate(mAngle)
stroke("lime")
strokeWeight(7);
line(0,0,125,0);
pop();

push();
rotate(hAngle)
stroke("blue")
strokeWeight(10);
line(0,0,100,0);
pop();




  drawSprites();
}