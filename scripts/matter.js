const { Engine, World, Bodies, Body } = Matter;

let engine;
let world;
let words = [];
let circles = [];
let ground, wallLeft, wallRight;
let wordsToDisplay = [
  "HTML5",
  "CSS3",
  "JAVA SCRIPT",
  "REACT.JS",
  "TAILWIND",
  "GSAP",
  "FIGMA",
];
let selectedShape = null;
let offsetX, offsetY;

function setup() {
  let canvasContainer = document.querySelector('.matter-canvas');
  let canvas = createCanvas(canvasContainer.clientWidth, canvasContainer.clientHeight);
  canvas.parent(canvasContainer);

  // Set the background of the p5.js canvas to transparent
  canvas.background(255, 255, 255, 0); // Transparent background

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(width / 2, height - 20, width, 10, { isStatic: true });
  wallLeft = Bodies.rectangle(0, height / 2, 10, height, { isStatic: true });
  wallRight = Bodies.rectangle(width, height / 2, 10, height, { isStatic: true });

  World.add(world, [ground, wallLeft, wallRight]);

  for (let i = 0; i < wordsToDisplay.length; i++) {
    let word = new Word(random(width), random(height), wordsToDisplay[i]);
    words.push(word);
  }

  let mediumCircle1 = new Circle(width * 0.2, height * 0.3, 30, color("#FFA726")); // Light Orange
  let mediumCircle2 = new Circle(width * 0.7, height * 0.5, 30, color("#81C784")); // Light Yellow
  let largeCircle = new Circle(width * 0.5, height * 0.7, 50, color("##FFA726")); // Sky Blue
  let largeCircle2 = new Circle(width * 0.5, height * 0.7, 50, color("#42A5F5")); // Sky Blue
  let smallCircle = new Circle(width * 0.8, height * 0.2, 20, color("#FFF176")); // Light Green
  let smallCircle2 = new Circle(width * 0.8, height * 0.2, 20, color("#81C784")); // Light Green

  circles.push(mediumCircle1, mediumCircle2, largeCircle,largeCircle2, smallCircle,smallCircle2);
}

function draw() {
  Engine.update(engine);

  // Clear the background of the p5.js canvas
  clear(); // Clear with transparent background

  for (let word of words) {
    word.show();
  }

  for (let circle of circles) {
    circle.show();
  }
}

class Word {
  constructor(x, y, word) {
    this.body = Bodies.rectangle(x, y, word.length * 15, 40);
    this.word = word;
    this.color = this.getColorForWord(word);
    World.add(world, this.body);
  }

  getColorForWord(word) {
    switch (word) {
      case "HTML5":
        return color("#FFA726"); // Light Orange
      case "CSS3":
        return color("#64B5F6"); // Light Blue
      case "JAVA SCRIPT":
        return color("#FFF176"); // Light Yellow
      case "REACT.JS":
        return color("#CFD8DC"); // Light Grey
      case "TAILWIND":
        return color("#42A5F5"); // Sky Blue
      case "GSAP":
        return color("#81C784"); // Light Green
      case "FIGMA":
        return color("#FFFFFF"); // White
      default:
        return color(255); // Default color (white)
    }
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(this.color);
    noStroke();
    let borderRadius = 10; // Adjust the radius as needed
  rect(0, 0, this.word.length * 20, 40, borderRadius);
    noStroke();
    fill("#0f0f0f");
    textSize(15);
    textAlign(CENTER, CENTER);
    text(this.word.toUpperCase(), 0, 0);
    pop();
  }

  isMouseOver() {
    let d = dist(mouseX, mouseY, this.body.position.x, this.body.position.y);
    return (d < 50);
  }

  isTouchOver() {
    let d = dist(touches[0].x, touches[0].y, this.body.position.x, this.body.position.y);
    return (d < 50);
  }
}

class Circle {
  constructor(x, y, radius, color) {
    this.body = Bodies.circle(x, y, radius);
    this.color = color;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill(this.color);
    noStroke();
    ellipse(0, 0, this.body.circleRadius * 2);
    pop();
  }

  isMouseOver() {
    let d = dist(mouseX, mouseY, this.body.position.x, this.body.position.y);
    return (d < this.body.circleRadius);
  }

  isTouchOver() {
    let d = dist(touches[0].x, touches[0].y, this.body.position.x, this.body.position.y);
    return (d < this.body.circleRadius);
  }
}

function mouseClicked() {
  handleMouseTouchAction('mouseClicked');
}

function mousePressed() {
  handleMouseTouchAction('mousePressed');
}

function mouseReleased() {
  handleMouseTouchAction('mouseReleased');
}

function mouseDragged() {
  handleMouseTouchAction('mouseDragged');
}

function touchStarted() {
  handleMouseTouchAction('touchStarted');
}

function touchEnded() {
  handleMouseTouchAction('touchEnded');
}

function touchMoved() {
  handleMouseTouchAction('touchMoved');
}

function handleMouseTouchAction(actionType) {
  if (touches.length > 0) {
    // Touch events
    for (let word of words) {
      if (word.isTouchOver()) {
        handleShapeInteraction(word, actionType);
        return;
      }
    }

    for (let circle of circles) {
      if (circle.isTouchOver()) {
        handleShapeInteraction(circle, actionType);
        return;
      }
    }
  } else {
    // Mouse events
    for (let word of words) {
      if (word.isMouseOver()) {
        handleShapeInteraction(word, actionType);
        return;
      }
    }

    for (let circle of circles) {
      if (circle.isMouseOver()) {
        handleShapeInteraction(circle, actionType);
        return;
      }
    }
  }
}

function handleShapeInteraction(shape, actionType) {
  switch (actionType) {
    case 'mouseClicked':
      // Handle mouse click action
      break;
    case 'mousePressed':
      // Handle mouse press action
      selectedShape = shape;
      let pos = selectedShape.body.position;
      offsetX = mouseX - pos.x;
      offsetY = mouseY - pos.y;
      break;
    case 'mouseReleased':
      // Handle mouse release action
      selectedShape = null;
      break;
    case 'mouseDragged':
      // Handle mouse drag action
      if (selectedShape) {
        let newX = mouseX - offsetX;
        let newY = mouseY - offsetY;
        newX = constrain(newX, 0, width);
        newY = constrain(newY, 0, height);
        Body.setPosition(selectedShape.body, { x: newX, y: newY });
      }
      break;
    case 'touchStarted':
      // Handle touch start action
      selectedShape = shape;
      let posTouch = selectedShape.body.position;
      offsetX = touches[0].x - posTouch.x;
      offsetY = touches[0].y - posTouch.y;
      return false; // Prevent default
    case 'touchEnded':
      // Handle touch end action
      selectedShape = null;
      break;
    case 'touchMoved':
      // Handle touch move action
      if (selectedShape) {
        let newX = touches[0].x - offsetX;
        let newY = touches[0].y - offsetY;
        newX = constrain(newX, 0, width);
        newY = constrain(newY, 0, height);
        Body.setPosition(selectedShape.body, { x: newX, y: newY });
        return false; // Prevent default
      }
      break;
    default:
      break;
  }
}















/*
const { Engine, World, Bodies, Body } = Matter;

let engine;
let world;
let words = [];
let ground, wallLeft, wallRight;
let wordsToDisplay = [
  "HTML5",
  "CSS3",
  "JAVA SCRIPT",
  "REACT.JS",
  "TAILWIND",
  "GSAP",
  "FIGMA",
];

let selectedWord = null;
let offsetX, offsetY;

function setup() {
  createCanvas(windowWidth, windowHeight - 60);
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(width / 2, height - 20, width, 10, {
    isStatic: true,
  });
  wallLeft = Bodies.rectangle(0, height / 2, 10, height, {
    isStatic: true,
  });
  wallRight = Bodies.rectangle(width, height / 2, 10, height, {
    isStatic: true,
  });

  World.add(world, [ground, wallLeft, wallRight]);

  for (let i = 0; i < wordsToDisplay.length; i++) {
    let word = new Word(random(width), random(height), wordsToDisplay[i]);
    words.push(word);
  }
}

function draw() {
  background("#606060");
  Engine.update(engine);

  for (let word of words) {
    word.show();
  }
}

function mousePressed() {
  for (let word of words) {
    let d = dist(mouseX, mouseY, word.body.position.x, word.body.position.y);
    if (d < 50) {
      selectedWord = word;
      let pos = selectedWord.body.position;
      offsetX = mouseX - pos.x;
      offsetY = mouseY - pos.y;
      break;
    }
  }
}

function mouseReleased() {
  selectedWord = null;
}

function mouseDragged() {
  if (selectedWord) {
    let newX = mouseX - offsetX;
    let newY = mouseY - offsetY;

    // Constrain to canvas bounds
    newX = constrain(newX, 0, width);
    newY = constrain(newY, 0, height);

    Body.setPosition(selectedWord.body, { x: newX, y: newY });
  }
}

class Word {
  constructor(x, y, word) {
    this.body = Bodies.rectangle(x, y, word.length * 20, 40);
    this.word = word;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);

    // Draw the rectangle around the text
    rectMode(CENTER);
    fill(255);
    stroke("#0f0f0f");
    strokeWeight(3);
    rect(0, 0, this.word.length * 15, 40);

    // Draw the text
    noStroke();
    fill("#0f0f0f");
    textSize(15);
    textAlign(CENTER, CENTER);
    text(this.word.toUpperCase(), 0, 0);
    pop();
  }
}
*/
