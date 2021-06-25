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

  print() {
    let x = [];
    let y = [];
    let canvas = [];
    this.position.forEach(value => {
      x.push(value[0]);
      y.push(value[1]);
    });
    let width = Math.max(...x) + Math.abs(Math.min(...x)) + 2;
    let height = Math.max(...y) + Math.abs(Math.min(...y)) + 1;
    for (let i = 0; i < height; i++) {
      let tempArr = [];
      for (let j = 0; j < width; j++) {
        tempArr.push('□');
      }
      canvas.push(tempArr);
    }

    this.position.forEach(element => {
      canvas[element[1]][element[0]] = '#';
    });

    for (let i = 0; i < canvas.length; i++) {
      canvas[i] = canvas[i].join(' ');
    }
    console.log(canvas.join('\n'));
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

const flash = new Turtle(0, 0).forward(3).left().forward(3);
console.log(flash.allPoints());

new Turtle(0, 0)
.forward(5)
.right()
.forward(5)
.right()
.forward(5)
.right()
.forward(5)
.print()