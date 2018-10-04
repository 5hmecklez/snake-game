/* global spaceSize, checkIfBackwards*/
class Snake {
	constructor(up, left, down, right) {
		this.head = createVector(0, 0);
		this.tail = [];

		this.speed = createVector(1, 0);
		this.speedToSet = createVector(1, 0);
		this.speeds = [
			[up, createVector(0, -1)], //speed for up
			[left, createVector(-1, 0)], //speed for left
			[down, createVector(0, 1)], //speed for down
			[right, createVector(1, 0)] //speed for right
		];

		this.alive = true;
	}
	show() {
		fill(113, 216, 93);
		rect(this.head.x, this.head.y, spaceSize, spaceSize); //draw the head
		if (this.tail.length != 0) { //if there is a tail
			for (let i = 0; i < this.tail.length; i++) { //for every tail piece
				rect(this.tail[i].x, this.tail[i].y, spaceSize, spaceSize); //draw the piece
			}
		}
	}
	checkCollision(food) {
		//check if snake is hitting itself
		for (let i = 0; i < this.tail.length; i++) { //for every tail piece
			if (this.head.x == this.tail[i].x && this.head.y == this.tail[i].y) {
				this.tail.splice(i, this.tail.length - i); //splice every piece after the one that intersects
				break;
			}
		}
		//check if snake ate food
		if (this.head.x == food.location.x && this.head.y == food.location.y) {
			food.randLocation(this.head, this.tail); //maybe change this so the snake doesn't reference another object
			//maybe return a value, such as 'food'

			this.grow();
		}
		if ((this.head.x < 0) || (this.head.x >= width) || (this.head.y < 0) || (this.head.y >= height)) {
			this.alive = false;
		}
	}
	updatePos() {
		for (let i = this.tail.length - 1; i > 0; i--) { //IMPORTANT: iterate backwards through the tail
			this.tail[i].x = this.tail[i - 1].x; //set the last piece equal to the second to last piece, and so on
			this.tail[i].y = this.tail[i - 1].y; //set the last piece equal to the second to last piece, and so on
		}
		//at this point, this.tail[0] == this.tail[1]
		if (this.tail.length != 0) { //if there is a tail (so we don't add to the array)
			this.tail[0].x = this.head.x; //set the first piece of the tail equal to the head
			this.tail[0].y = this.head.y; //set the first piece of the tail equal to the head
		}
		this.head.x += this.speed.x * spaceSize; //update the head
		this.head.y += this.speed.y * spaceSize; //update the head
	}
	grow() {
		let last = createVector(undefined, undefined); //last will be the last piece of the snake (could be the head)
		if (this.tail.length != 0) {
			last = this.tail[this.tail.length - 1]; //this would be an error and return undefined without the if statement
		} else {
			last = this.head;
		}
		this.tail.push(createVector(last.x, last.y)); //add a piece to the end of the snake on top of the last piece
	}

	checkInput(key) {
		for (let i = 0; i < 4; i++) { //iterate through speeds[]
			if (key == this.speeds[i][0]) { //if the key pressed was the first value of the particular speeds[i] that we are on
				if (!(checkIfBackwards(this.speeds[i][1]))) { //if the second value (the speed) is not backwards
					this.speedToSet = this.speeds[i][1]; //set it equal to the speedToSet
				}
				break; //only happens if the speed[i][0] is the pressed key but backwards, so we stop the loop and don't check any other keys
			}
		}
	}
}