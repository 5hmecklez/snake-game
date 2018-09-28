/* global Food, Snake */

//TODO: Draw food on top of snake

let spaceSize = 25;
let food;
let snake;
let updateStagger = 0;
let updateTime = 5;

function setup() {
	createCanvas(500, 500);
	frameRate(30);
	background(0);
	stroke(255);

	food = new Food();
	snake = new Snake();
	food.randLocation(snake.head, snake.tail);
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
	if (updateStagger == updateTime) {
		snake.speed = snake.speedToSet;
		snake.updatePos();
		snake.checkCollision();

		updateStagger = 0;
	} else {
		updateStagger++;
	}
	if (!snake.alive) {
		snake.head.x = 0;
		snake.head.y = 0;

		snake.speed.x = 1;
		snake.speed.y = 0;

		snake.tail = [];

		snake.alive = true;
	}
	//print('Length: ' + (snake.tail.length + 1));
}

function keyTyped() {
	let speedW = createVector(0, -1);
	let speedA = createVector(-1, 0);
	let speedS = createVector(0, 1);
	let speedD = createVector(1, 0);
	switch (key) {
	case 'w':
		if (checkIfBackwards(speedW)) {
			break;
		}
		snake.speedToSet = speedW;
		break;
	case 'a':
		if (checkIfBackwards(speedA)) {
			break;
		}
		snake.speedToSet = speedA;
		break;
	case 's':
		if (checkIfBackwards(speedS)) {
			break;
		}
		snake.speedToSet = speedS;
		break;
	case 'd':
		if (checkIfBackwards(speedD)) {
			break;
		}
		snake.speedToSet = speedD;
		break;
	}
}

function checkIfBackwards(desiredSpeed) {
	if ((snake.speed.x != desiredSpeed.x) && (snake.speed.y != desiredSpeed.y)) {
		return false;
	} else {
		return true;
	}
}


function mousePressed() {
	food.randLocation(snake.head, snake.tail);
	snake.grow();
}