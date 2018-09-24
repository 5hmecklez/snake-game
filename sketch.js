/* global Food */

let spaceSize = 25;
let food;

function setup() {
	createCanvas(500, 500);
	background(0);
	stroke(255);
	food = new Food();
	food.randLocation();
}

function drawGridLines() {
	for (let i = 0; i < width; i = i + spaceSize) {
		line(i, 0, i, width);
	}

	for (let i = 0; i < height; i = i + spaceSize) {
		line(0, i, height, i);
	}
}

function draw() {
	background(0);
	drawGridLines();
	food.show();
}

function mousePressed() {
	food.randLocation();
}