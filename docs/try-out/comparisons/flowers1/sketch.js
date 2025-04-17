// flowers1: show progress report using flowers with more or less petals
// NOTE:  this was built using code from  https://editor.p5js.org/rhymeandreason/sketches/NI74eacDH

// Flower Visualization settings
// NOTE: I'm using a bunch of variables to make it easier to understand what the code is doing
var startX = 150;   
var flowerSpacing = 200;  // Amount of spacing between each flower
var flowerY = 200;
var petalSize = 25;
var stemHeight = 100;
var petalStart = 20;
var leafSize = 30;
var leafWidth = leafSize/2
var scoreY = 330;
var nameY = 400;

// The data 
var goals = [
  { name: 'Communicate', score: 3},
  { name: 'Support', score: 1},
  { name: 'Sustain', score: 3},
  { name: 'Grow', score: 3},
  { name: 'Transform', score: 2}
];
var quarter = 'Q2';
var maxScore = 3;
  

function setup() {
  createCanvas(1100, 1100);
  colorMode(HSB, 100);
  noLoop();   // Only draw the dataviz once
}


function draw() {
  background(220);

  // Display the report title
  fill(51);
  textSize(36);
  text(quarter + " Status Report", 50, 60);

  // For each goal, display the flower and labels 
  for (goal = 0; goal < goals.length; goal++) {

    createFlower(startX + goal * flowerSpacing, flowerY, goals[goal].score);

    // Display the name and score 
    textAlign(CENTER);
    fill(51);
    textSize(32);
    text(goals[goal].name,  startX + goal * flowerSpacing, nameY);
    textSize(12);
    text(goals[goal].score, startX + goal * flowerSpacing, scoreY);
  };

};


function createFlower(x, y, score) {
  // createFlower: creates a flower at a particular location with the number of petals depending on the score

  //draw the flower's stem
  stroke(45, 90, 90);
  fill(45, 90, 90);
  strokeWeight(3);
  line(x, y, x, y + stemHeight);
  
  //draw the stem's 2 leaves
  noStroke();
  ellipse(x + leafWidth, y + stemHeight/2, leafSize, leafWidth);
  ellipse(x - leafWidth, y + stemHeight/2, leafSize, leafWidth);

  //draw the flower's petals
  noStroke();
  fill(10, 100, 100);
  var lastPetal = TWO_PI / maxScore * score;                 // Given the score, calculates how many petals the flower should have
  for (var theta = 0; theta < lastPetal; theta += PI/3){    // Fun with trigonometry!
    var petalX = petalStart * cos(theta) + x;
    var petalY = petalStart * sin(theta) + y;
    ellipse(petalX, petalY, petalSize, petalSize);
  };

  //draw the flower's center
  fill(17, 100 ,100);
  ellipse(x, y, petalSize, petalSize);

};