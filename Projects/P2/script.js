const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const basedOn = document.querySelector('#basedOn');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height...';
  }
  // results.innerHTML = height;
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid height...';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    

     if(bmi < 18.6){
      results.innerHTML = `<span>${bmi}</span>`;
      basedOn.innerHTML = `<span>You are Under Weight</span>`
    }
    else if(bmi > 24.9){
      results.innerHTML = `<span>${bmi}</span>`;
      basedOn.innerHTML = `<span>You are Over Weight</span>`
    }else{
      results.innerHTML = `<span>${bmi}</span>`;
      basedOn.innerHTML = `<span>You are in  Normal Range</span>`
    }
  }
});
