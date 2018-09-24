/* global spaceSize */

class Food {

	constructor() {
		this.x = Math.round(random(0, width / spaceSize - 1)) * spaceSize;
		this.y = Math.round(random(0, height / spaceSize - 1)) * spaceSize;
	}

	randLocation() {
		this.foodX = Math.round(random(0, width / spaceSize - 1)) * spaceSize;
		this.foodY = Math.round(random(0, height / spaceSize - 1)) * spaceSize;
		print(this.foodX, this.foodY);
	}

	show() {
		fill(100, 200, 255);
		rect(this.foodX, this.foodY, spaceSize, spaceSize);
	}

}