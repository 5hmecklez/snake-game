/* global spaceSize */

class Food {

	constructor() {
		this.x = Math.floor(random(0, width / spaceSize)) * spaceSize;
		this.y = Math.floor(random(0, height / spaceSize)) * spaceSize;
	}

	randLocation() {
		this.foodX = Math.floor(random(0, width / spaceSize)) * spaceSize;
		this.foodY = Math.floor(random(0, height / spaceSize)) * spaceSize;
		print(this.foodX, this.foodY);
	}

	show() {
		fill(100, 200, 255);
		rect(this.foodX, this.foodY, spaceSize, spaceSize);
	}

}