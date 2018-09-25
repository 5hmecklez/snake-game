/* global spaceSize */

class Food {

	constructor() {
		this.location = createVector(undefined, undefined);
		this.location.x = Math.floor(random(0, width / spaceSize)) * spaceSize;
		this.location.y = Math.floor(random(0, height / spaceSize)) * spaceSize;
	}

	randLocation() {
		this.location.x = Math.floor(random(0, width / spaceSize)) * spaceSize;
		this.location.y = Math.floor(random(0, height / spaceSize)) * spaceSize;
		print(this.location.x, this.location.y);
	}

	show() {
		fill(100, 200, 255);
		rect(this.location.x, this.location.y, spaceSize, spaceSize);
	}

}