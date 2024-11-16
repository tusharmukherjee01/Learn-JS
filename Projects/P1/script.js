const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.color = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.color = e.target.id ;
    }
    if (e.target.id === 'white') {
      body.style.color = e.target.id ;
    }
    if (e.target.id === 'yellow') {
      body.style.color = e.target.id ;
    }
  });
});
