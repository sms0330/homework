class Turtle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = 'east';
    this.position = [[this.x, this.y]];
    this.stuckedPosition = [];
  }

  forward(steps) {
    for (let i = 0; i < steps; i++) {
      if (this.direction === 'east') {
        this.position.push([++this.x, this.y]);
      } else if (this.direction === 'west') {
        this.position.push([--this.x, this.y]);
      } else if (this.direction === 'north') {
        this.position.push([this.x, --this.y]);
      } else if (this.direction === 'south') {
        this.position.push([this.x, ++this.y]);
      }
    }
    return this;
  }

  right() {
    if (this.direction === 'east') {
      this.direction = 'south';
    } else if (this.direction === 'west') {
      this.direction = 'north';
    } else if (this.direction === 'south') {
      this.direction = 'west';
    } else {
      this.direction = 'east';
    }
    return this;
  }

  left() {
    if (this.direction === 'east') {
      this.direction = 'north';
    } else if (this.direction === 'west') {
      this.direction = 'south';
    } else if (this.direction === 'south') {
      this.direction = 'east';
    } else {
      this.direction = 'west';
    }
    return this;
  }

  allPoints() {
    return this.position;
  }
}
