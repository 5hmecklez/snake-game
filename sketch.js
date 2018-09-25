/* global Food, Snake */

//TODO: Draw food on top of snake

let spaceSize = 25;
let food;
let snake;
let updateStagger = 0;

function setup() {
	createCanvas(500, 500);
	frameRate(30);
	background(0);
	stroke(255);
	food = new Food();
	snake = new Snake();
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
	snake.show();
	food.show();
	if (updateStagger == 10) {
		snake.updatePos();
		snake.checkCollision();

		updateStagger = 0;
	} else {
		updateStagger++;
	}
	print('Length: ' + (snake.tail.length + 1));
}

function keyTyped() {
	if (key == 'w') {
		snake.xspeed = 0;
		snake.yspeed = -1;
	} else if (key == 'a') {
		snake.xspeed = -1;
		snake.yspeed = 0;
	} else if (key == 's') {
		snake.xspeed = 0;
		snake.yspeed = 1;
	} else if (key == 'd') {
		snake.xspeed = 1;
		snake.yspeed = 0;
	}
}

function mousePressed() {
	food.randLocation();
	snake.grow();
}