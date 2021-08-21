const makeKeyboard = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    alphabet.split('').forEach(letter => {
      $('.container')
        .children()
        .append(
          `<div class="col-sm-1 letter m-3 bg-white border border-black item1">${letter}</div>`,
        );
    });
  };
  
makeKeyboard();

const letters = ['STRANGER', 'JAVASCRIPT', 'REACT', 'NODE', 'RUBY', 'RAILS', 'EXPRESS', 'POSTGRESQL', 'WEBPACK', 'GITHUB', 'VSCODE', 'CODECORE']
const letter = letters[Math.ceil(Math.random() * letters.length - 1)];
const letterArr = letter.split('');
let wrongCount = 0;

function delay(ms) {
  return new Promise (resolve => setTimeout(resolve, ms));
}

async function gameOver () {
  alert('Better luck next time...');
  audio = new Audio('assets/lose.mp3');
  audio.play();
  await delay(4000);
  location.reload();
};

async function checkWin () {
  let winCount = 0;
  $('.answerletter').each(function (index) {
    if ($(this).css('display') === 'flex') {
      winCount++;
    }
  });
  if (winCount === letterArr.length) {
    alert('Congratulations! You win!');
    audio = new Audio('assets/win.mp3');
    audio.play();
    await delay(4000);
    location.reload();
  } 
};

$('.hangman_img').attr('src', 'assets/gallows.jpg');

$('.letter').on('click', event => {
  const { currentTarget } = event;
  $(currentTarget).removeClass('bg-white').addClass('bg-danger');
  
  let answer = currentTarget.innerHTML;

  if (letterArr.includes(answer)) {
    $(`.answerletter:contains(${answer})`).css('display', 'flex');
  } else {
    wrongCount++;
      if (wrongCount === 6) {
      $('.hangman_img').attr('src', 'assets/gallows+head+torso+2leg+2arm.jpg');
        gameOver();
      } else if (wrongCount === 5) {
      $('.hangman_img').attr('src', 'assets/gallows+head+torso+2leg+arm.jpg');
      } else if (wrongCount === 4) {
      $('.hangman_img').attr('src', 'assets/gallows+head+torso+2leg.jpg');
      } else if (wrongCount === 3) {
      $('.hangman_img').attr('src', 'assets/gallows+head+torso+leg.jpg');
      } else if (wrongCount === 2) {
      $('.hangman_img').attr('src', 'assets/gallows+head+torso.jpg');
      } else if (wrongCount === 1) {
      $('.hangman_img').attr('src', 'assets/gallows+head.jpg');
      }
  } checkWin();
}); 

letterArr.forEach(answer => {
  $(`<div class="answerletterbox col-sm-1 border-bottom"><text class="answerletter"> ${answer}</text></div>`,
  ).appendTo('.answer');
});