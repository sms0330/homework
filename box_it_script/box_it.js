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
function boxIt(arr) {
  const colMax = Math.max(...arr.map(i => i.length));
  const col2Max = 0;
  const tableWidth = colMax + col2Max;

  // formatting function
  function boxFormat(item, end) {
    // calculate padding
    const pad = colMax - item.length;
    const boxItem = `┃${item}${' '.repeat(pad)}${' '.repeat(col2Max)}┃`;

    // output
    console.log(drawTopBorder(tableWidth));
    console.log(boxItem);
    console.log(drawMiddleBorder(tableWidth));
    if (end === true) {
      console.log(drawBottomBorder(tableWidth));
    }
  }

  // iterate array
  for (let i = 1; i <= arr.length; i++) {
    boxFormat(arr[i - 1], i == arr.length);
  }
}

boxIt(['Jon Snow', 'Cersei Lannister', 'Daenerys Targaryen']);
boxIt(['Jon Snow', 'Cersei Lannister']);
boxIt(['Jon Snow']);
