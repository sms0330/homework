let arr = [];
if (!process.argv[2]) {
  arr = [''];
} else {
  for (let i = 2; i < process.argv.length; i++) {
    arr.push(process.argv[i]);
  }
}

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
// column widths
let colMax = Math.max(...arr.map(i => i.length));
let col2Max = 0;
const tableWidth = colMax + col2Max;
// formatting function
function boxIt(item, end, start) {
  // calculate padding
  let pad = colMax - item.length;
  let boxItem = `┃${item}${' '.repeat(pad)}${' '.repeat(col2Max)}┃`;
  // output
  if (start) {
    console.log(drawTopBorder(tableWidth));
  }
  console.log(boxItem);
  if (end) {
    console.log(drawBottomBorder(tableWidth));
  } else {
    console.log(drawMiddleBorder(tableWidth));
  }
  // if (end) console.log(drawBottomBorder(tableWidth));
}
// iterate array
for (let i = 1; i <= arr.length; i++) {
  boxIt(arr[i - 1], i == arr.length, i === 1);
}
