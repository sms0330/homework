const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('\nWelcome to Todo CLI! \n--------------------');

let todoList = [];

function todoMenu() {
  rl.question('(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n>', response => {
    if (response === 'v') {
      if (todoList.length === 0) {
        console.log('\nList is empty...\n');
      } else {
        for (let todo of todoList) {
          if (todo.completed) {
            console.log(`${todoList.indexOf(todo)} [\u2713] ${todo.title}`);
          } else {
            console.log(`${todoList.indexOf(todo)} [] ${todo.title}`);
          }
        }
      }
      todoMenu();
    } 
    else if (response === 'n') {
      rl.question('\nWhat ? \n\n>', newTodo => {
        todoList.push({ completed: false, title: newTodo });
        todoMenu();
      });
    } 
    else if (response[0] === 'c') {
      if (!response[1]){
        todoMenu();
      }else {
        console.log(`\nCompleted : "${todoList[response[1]].title}"\n`);
        todoList[response[1]].completed = true;
        todoMenu();
      }
    } 
    else if (response[0] === 'd') {
      if (!response[1]){
        todoMenu();
      }else {
        console.log(`\nDeleted : "${todoList[response[1]].title}"\n`);
        todoList.pop(todoList[response[1]].title);
        todoMenu();
      }
    } 
    else if (response === 'q') {
      console.log('See you soon! 😄');
      rl.close();
    } 
    else {
      console.log('\nError, Enter only the commands in the menu\n');
      todoMenu();
    }
  });
}

todoMenu();
