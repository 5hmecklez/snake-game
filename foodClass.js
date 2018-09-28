/* global spaceSize */

class Food {

	constructor() {
		this.location = createVector(undefined, undefined);
		this.maybeLocation = createVector(undefined, undefined);
	}
	chooseNewMaybe() { //choose a new maybeLocation
		this.maybeLocation.x = Math.floor(random(0, width / spaceSize)) * spaceSize;
		this.maybeLocation.y = Math.floor(random(0, height / spaceSize)) * spaceSize;
	}
	randLocation(head, tail) {
		this.chooseNewMaybe();
		for (let i = 0; i < tail.length; i++) {
			while (((this.maybeLocation.x == tail[i].x) && (this.maybeLocation.y == tail[i].y)) || //equal to a tail piece
				((this.maybeLocation.x == head.x) && (this.maybeLocation.y == head.y))) { //equal to the head (checks head every time, could be improved)
				this.chooseNewMaybe();
				i = -1; //reset the counter to start again (is -1 because 1 is added after this iteration finishes)
				break; //break out of the while loop and start again so we don't try to check tail[-1]
			}
		}
		this.location = this.maybeLocation; //maybeLocation is good so we set it equal to the location
	}

	show() {
		fill(100, 200, 255);
		rect(this.location.x, this.location.y, spaceSize, spaceSize);
	}
}