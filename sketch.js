sides = -1
rolledNum = -1
function setup() {
  createCanvas(windowWidth, windowHeight);
  numInput = createInput("6");
  numInput.center()
  numInput.position(windowWidth/2, windowHeight/2);
  button = createButton('submit');
  button.position(numInput.x + numInput.width, numInput.y);
  button.mousePressed(validate)
  createP("Mitchell G  2020")
  
}
function draw() {
  background(220);
  textSize(.05*windowWidth)
  textAlign(LEFT)
  text("P5 Dice Roller",windowWidth*.01,windowHeight*.1)
  textSize(42)
  textAlign(CENTER)
  text("Enter The number of Sides:", windowWidth/2, windowHeight/2-20)
  if(rolledNum > 0){
    text("You rolled: " + rolledNum, windowWidth/2, windowHeight/2+60)
    
  }
 
}

function validate() {
  var test = int(numInput.value())
  print(test)
  if (!isNaN(test)){
    if (test > 1){
        sides = int(test)
        roll(sides)
    }
  } else {
     sides = 6
    roll(sides)
  }
}

function roll(sides){
  rolledNum = int(random(1, sides+1))
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  repositionObjects();
}

function repositionObjects() {

 numInput.position(windowWidth/2, windowHeight/2);
 button.position(numInput.x + numInput.width, numInput.y);
}