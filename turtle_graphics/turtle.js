class Turtle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = 'east';
    this.position = [[this.x, this.y]];
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

const t1 = new Turtle(2, 3);
console.log(t1);

const t2 = new Turtle(0, 0).forward(3);
console.log(t2);

const t3 = new Turtle(0, 0).forward(3).right().forward(2);
console.log(t3);

const t4 = new Turtle(0, 4).forward(3).left().forward(3);
console.log(t4);
