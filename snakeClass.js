/* global spaceSize, food */
class Snake {
	constructor() {
		this.head = createVector(150, 0);
		this.tail = [];
		this.xspeed = 1;
		this.yspeed = 0;
	}
	show() {
		fill(113, 216, 93);
		rect(this.head.x, this.head.y, spaceSize, spaceSize);
		if (this.tail.length != 0) {
			for (let i = 0; i < this.tail.length; i++) {
				rect(this.tail[i].x, this.tail[i].y, spaceSize, spaceSize);
			}
		}
	}
	checkCollision() {
		//check if snake is hitting itself
		for (let i = 0; i < this.tail.length; i++) {
			if (this.head.x == this.tail[i].x && this.head.y == this.tail[i].y) {
				this.tail.splice(i, this.tail.length - i);
				break;
			}
		}
		//check if snake ate food
		if (this.head.x == food.location.x && this.head.y == food.location.y) {
			food.randLocation();
			this.grow();
		}
	}
	updatePos() {
		for (let i = this.tail.length - 1; i > 0; i--) {
			this.tail[i].x = this.tail[i - 1].x;
			this.tail[i].y = this.tail[i - 1].y;
		}
		if (this.tail.length != 0) {
			this.tail[0].x = this.head.x;
			this.tail[0].y = this.head.y;
		}
		this.head.x += this.xspeed * spaceSize;
		this.head.y += this.yspeed * spaceSize;
	}
	grow() {
		let last = createVector(undefined, undefined);
		if (this.tail.length != 0) {
			last = this.tail[this.tail.length - 1];
		} else {
			last = this.head;
		}
		this.tail.push(createVector(last.x, last.y));
	}
}