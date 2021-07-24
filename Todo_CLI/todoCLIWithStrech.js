const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileName = process.argv[2];

let todoList = [];

if (fileName) {
  fs.readFile(fileName, { encoding: 'utf8' }, (err, data) => {
    if (data.length === 0) {
      console.log('\nList is empty...\n');
    } else {
      todoList = JSON.parse(data);
    }
  });
}

console.log('\nWelcome to Todo CLI! \n--------------------');

function todoMenu() {
  rl.question(
    '(v) View • (n) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit\n>',
    response => {
      if (response === 'v') {
        for (let todo of todoList) {
          if (todo.completed) {
            console.log(`${todoList.indexOf(todo)} [\u2713] ${todo.title}`);
          } else {
            console.log(`${todoList.indexOf(todo)} [] ${todo.title}`);
          }
        }
        todoMenu();
      } else if (response === 'n') {
        rl.question('\nWhat ? \n\n>', newTodo => {
          todoList.push({ completed: false, title: newTodo });
          todoMenu();
        });
      } else if (response[0] === 'c') {
        console.log(`\nCompleted : "${todoList[response[1]].title}"\n`);
        todoList[response[1]].completed = true;
        todoMenu();
      } else if (response[0] === 'd') {
        console.log(`\nDeleted : "${todoList[response[1]].title}"\n`);
        todoList.pop(todoList[response[1]].title);
        todoMenu();
      } else if (response === 's') {
        rl.question('\nWhere ? \n\n>', fileName => {
          fs.writeFile(fileName, JSON.stringify(todoList), err => {
            if (err) {
              console.log('Could not write to file');
              console.error(err);
              return;
            }
            console.log(`List saved to "${fileName}"`);
            todoMenu();
          });
        });
      } else if (response === 'q') {
        console.log('See you soon! 😄');
        rl.close();
      } else {
        console.log('\nError, Enter only the commands in the menu\n');
        todoMenu();
      }
    },
  );
}

todoMenu();
