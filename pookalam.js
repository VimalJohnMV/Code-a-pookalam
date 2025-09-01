let config = {
  circleCount: 4,
  circleRadii: [280, 250, 180, 150],
  petalCount: 12,
  petalRadius: 14,
  petalDistance: 180,
  petalColor: '#e91e63',
  swastikaColor: '#ffffff'
};

function setup() {
  createCanvas(700, 700);
  noLoop();
  drawPookalam();
  attachListeners();
}

function draw() {
  // empty: we use drawPookalam() directly
}

function drawPookalam() {
  background(0);
  
  // Draw circles using a predefined color array
  let circleColors = ['yellow', 'red', 'blue', 'orange', 'purple', 'cyan', 'magenta', 'lime', 'pink', 'gold'];
  for (let i = 0; i < config.circleCount; i++) {
      let r = config.circleRadii[i % config.circleRadii.length];
      fill(circleColors[i % circleColors.length]);
      ellipse(width / 2, height / 2, r * 2, r * 2);
  }

  // Draw the main petal layer
  let petalCount = config.petalCount;
  let petalRadius = config.petalRadius;
  let petalDistance = config.petalDistance;

  for (let i = 0; i < petalCount; i++) {
    let angle = radians(i * (360 / petalCount));
    let x = width / 2 + cos(angle) * petalDistance;
    let y = height / 2 + sin(angle) * petalDistance;

    push();
    translate(x, y);
    rotate(angle + HALF_PI);
    drawPetal(petalRadius * 5, petalRadius * 2.5, config.petalColor);
    pop();
  }

  // Swastika in center
  drawSwastika(width / 2, height / 2, 120);
}

function drawPetal(petalLength, petalWidth, petalColor) {
  fill(petalColor);
  noStroke();
  beginShape();
  vertex(0, 0); // Base of the petal
  
  // Left curve
  bezierVertex(-petalWidth * 0.4, -petalLength * 0.2, 
               -petalWidth * 0.8, -petalLength * 0.8, 
               0, -petalLength); 

  // Right curve
  bezierVertex(petalWidth * 0.8, -petalLength * 0.8, 
               petalWidth * 0.4, -petalLength * 0.2, 
               0, 0);

  endShape(CLOSE);
}

function drawSwastika(cx, cy, size) {
  stroke(config.swastikaColor);
  noFill();
  strokeWeight(4);

  let armLength = size / 2;
  let bendLength = size / 4;

  push();
  translate(cx, cy);

  for (let i = 0; i < 4; i++) {
    push();
    rotate(HALF_PI * i);
    // Main arm
    line(0, 0, armLength, 0);
    // The two small bends
    line(armLength, 0, armLength, bendLength);
    line(armLength, 0, armLength, -bendLength);
    pop();
  }
  pop();
}

function attachListeners() {
  document.querySelectorAll('#controls input').forEach(el => {
    el.addEventListener('input', updateConfig);
  });
}

function updateConfig() {
  config.circleCount = int(document.getElementById('circleCount').value);
  config.circleRadii = document.getElementById('circleRadii').value
    .split(',')
    .map(x => int(x.trim()))
    .filter(x => !isNaN(x));
  config.petalCount = int(document.getElementById('petalCount').value);
  config.petalRadius = int(document.getElementById('petalRadius').value);
  config.petalDistance = int(document.getElementById('petalDistance').value);
  config.petalColor = document.getElementById('petalColor').value;
  config.swastikaColor = document.getElementById('swastikaColor').value;

  drawPookalam(); // redraw with new config
}