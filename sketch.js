/* global Food, Snake */
//hi
let spaceSize = 25;
let food;
let snake;
let updateStagger = 0;
let updateTime = 3;

function setup() {
	createCanvas(500, 500);
	frameRate(30);
	background(0);
	stroke(255);

	food = new Food();
	snake = new Snake('w', 'a', 's', 'd');
	food.randLocation(snake.head, snake.tail);
}

function drawGridLines() {
	for (let i = 0; i < width; i += spaceSize) {
		line(i, 0, i, width);
	}

	for (let i = 0; i < height; i += spaceSize) {
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
		snake.checkCollision(food);

		if (!snake.alive) {
			snake.died();
		}

		updateStagger = 0;
	} else {
		updateStagger++;
	}
	//print('Length: ' + (snake.tail.length + 1));
}

function keyTyped() {
	snake.checkInput(key);
}

function checkIfBackwards(snakeSpeed, desiredSpeed) {
	return (snakeSpeed.x == desiredSpeed.x) || (snakeSpeed.y == desiredSpeed.y);
}

function mousePressed() {
	food.randLocation(snake.head, snake.tail);
	snake.grow();
}