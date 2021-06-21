const topLeftCorner = '┏';
const topRightCorner = '┓';
const bottomLeftCorner = '┗';
const bottomRightCorner = '┛';
const verticalLine = '┃';
const line = '━';

function drawLine(number) {
  return line.repeat(number);
}

function drawTopBorder(number) {
  return topLeftCorner + line.repeat(number) + topRightCorner;
}

function drawMiddleBorder(number) {
  if (number === 0) {
    return verticalLine + line.repeat(number + 1) + verticalLine;
  }
  return verticalLine + line.repeat(number) + verticalLine;
}

function drawBottomBorder(number) {
  return bottomLeftCorner + line.repeat(number) + bottomRightCorner;
}

function drawBarsAround(name) {
  return `"${verticalLine}${name}${verticalLine}"`;
}

//find longest string in array which will be max-width of box

console.log(drawLine(4));
console.log(drawLine(8));
console.log(drawTopBorder(4));
console.log(drawTopBorder(0));
console.log(`\n`);
console.log(drawMiddleBorder(8));
console.log(`\n`);
console.log(drawMiddleBorder(0));
console.log(`\n`);
console.log(drawBottomBorder(2));
console.log(drawBarsAround('  My name is Dan  '));
