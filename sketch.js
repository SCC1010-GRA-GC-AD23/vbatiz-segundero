let grado = Math.PI/180
let rot = 0
let h = 0
let m = 0
let s = 0

function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800)
  frameRate(1)
}

function draw() {
  // put drawing code here
  background(255)
  //rect(100,100,200,200)
  
  translate(width/2,height/2)
  h = nf(hour(),2)
  m = nf(minute(),2)
  s = nf(second(),2)
  textAlign(CENTER,CENTER)
  textSize(32)
  push()
  rot = s * (6 * grado)
  rotate(rot)
  
  circle(0,0,200)
  strokeWeight(2)
  line(0,0,0,-100)
  pop()
  text(h+":"+m+":"+s,0,0)
  strokeWeight(1)
}
