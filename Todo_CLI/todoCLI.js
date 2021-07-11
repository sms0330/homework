const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('\nWelcome to Todo CLI! \n--------------------');

let todoList = ['Make a homework', 'Watch a movie'];

rl.question('(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n>', response => {
  if (response === 'v') {
    if (todoList.length === 0) {
      console.log('\nList is empty...\n');
    } else {
      console.log(todoList);
    }
  }
  else if (response === 'n') {

  } 
  else if (response[0] === 'c') {

  }
  else if (response[0] === 'd') {

  }
  else if (response === 'q') {
    console.log('See you soon! 😄');
    rl.close();
  }else {
      console.log(error.message)
  }
  
});
