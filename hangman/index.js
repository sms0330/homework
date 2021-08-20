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


