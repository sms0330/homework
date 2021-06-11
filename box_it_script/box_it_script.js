// input array
const args = process.argv;
let a = args[2];
let b = args[3];
let c = args[4];
let arr;

if (a === undefined && b === undefined && c === undefined) {
  arr = [''];
} else if (c === undefined && b === undefined) {
  arr = [a];
} else if (c === undefined) {
  arr = [a, b];
} else {
  arr = [a, b, c];
}

// column widths
const colMax = Math.max(...arr.map(i => i.length));
const col2Max = 0;
const tableWidth = colMax + col2Max + 2;

// line separator
const line = '━'.repeat(tableWidth);

// formatting function
function output(item, end) {
  // calculate padding
  const pad = colMax - item.length;
  const formattedItem = `┃${item}${' '.repeat(pad)}${' '.repeat(col2Max)}┃`;

  // output
  console.log(line);
  console.log(formattedItem);
  if (end) console.log(line);
}

// iterate array
for (let i = 1; i <= arr.length; i++) {
  output(arr[i - 1], i == arr.length);
}
