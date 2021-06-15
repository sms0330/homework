const topLeftCorner = '┏';
const topRightCorner = '┓';
const bottomLeftCorner = '┗';
const bottomRightCorner = '┛';
const verticalLine = '┃';
const line = '━';

let tableWidth = 0;
let longest;
let arr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > tableWidth) {
    tableWidth = arr[i].length;
    longest = arr[i];
  }
}

function drawLine(number) {
  return line.repeat(number);
}

function drawTopBorder(number) {
  return topLeftCorner + line.repeat(number) + topRightCorner;
}

function drawMiddleBorder(number) {
  return verticalLine + line.repeat(number) + verticalLine;
}

function drawBottomBorder(number) {
  return bottomLeftCorner + line.repeat(number) + bottomRightCorner;
}

function drawBarsAround(name) {
  return `"${verticalLine}${name}${verticalLine}"`;
}

//find longest string in array which will be max-width of box

console.log(drawTopBorder(10));
//console.log(drawLine(10));
console.log(drawMiddleBorder(10));
//console.log(drawLine(10));
console.log(drawMiddleBorder(10));
console.log(drawBottomBorder(10));
console.log(drawBarsAround('  My name is Dan  '));
