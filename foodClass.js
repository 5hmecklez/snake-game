/* global spaceSize */

class Food {

	constructor() {
		this.location = createVector(undefined, undefined);
		this.maybeLocation = createVector(undefined, undefined);
	}
	chooseNewMaybe() {
		this.maybeLocation.x = Math.floor(random(0, width / spaceSize)) * spaceSize;
		this.maybeLocation.y = Math.floor(random(0, height / spaceSize)) * spaceSize;
	}
	randLocation(head, tail) {
		this.chooseNewMaybe();
		while ((this.maybeLocation.x == head.x) && (this.maybeLocation.y == head.y)) {
			this.chooseNewMaybe();
		}
		for (let i = 0; i < tail.length; i++) {
			while ((this.maybeLocation.x == tail[i].x) && (this.maybeLocation.y == tail[i].y)) {
				this.chooseNewMaybe();
				i = -1;
				break;
			}
		}
		this.location = this.maybeLocation;
	}

	show() {
		fill(100, 200, 255);
		rect(this.location.x, this.location.y, spaceSize, spaceSize);
	}

}