let sa = -90; // Start Angle
let ea = 270; // End Angle
let sl = 60; // Second Length
let ml = 50; // Minute Length
let hl = 40; // Hour Length
let clockHandWidth = 7; // Clock Hand Width

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  let hr = hour();
  let min = minute();
  let sec = second();
  min = min + sec / 60
  hr = hr + min / 60

  let x = width / 2;
  let y = height / 2;
  noFill();
  strokeWeight(10);

  // Seconds Bar
  stroke(150, 100, 255);
  let secondAngle = map(sec, 0, 60, sa, ea);
  arc(x, y, 280, 280, sa, secondAngle);

  // Minutes Bar
  stroke(100, 255, 150);
  let minuteAngle = map(min, 0, 60, sa, ea);
  arc(x, y, 250, 250, sa, minuteAngle);

  // Hours Bar
  stroke(255, 100, 150);
  let hourAngle = map(hr % 12, 0, 12, sa, ea);
  arc(x, y, 220, 220, sa, hourAngle);


  // Clock Hands
  strokeWeight(clockHandWidth);
  translate(x, y);

  // Second Hand
  push();

  stroke(150, 100, 255);
  rotate(secondAngle + (sa / 2));
  line(0, 0, sl, sl)

  pop();


  // Minute Hand
  push();
  stroke(100, 255, 150);
  rotate(minuteAngle + (sa / 2));
  line(0, 0, ml, ml)

  pop();


  // Hour Hand
  push();
  stroke(255, 100, 150);
  rotate(hourAngle + (sa / 2));
  line(0, 0, hl, hl)

  pop();

  stroke(255);
  strokeWeight(clockHandWidth + 10);
  point(0, 0)

}
