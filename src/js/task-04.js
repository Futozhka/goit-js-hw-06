let counterValue = 0;
const valueSpan = document.querySelector('#value');


function updateCounter(value) {
  valueSpan.textContent = value;
}

updateCounter(counterValue); 


const buttons = document.querySelectorAll('button[data-action]');
buttons.forEach(button => {
  button.addEventListener('click', event => {
    const action = event.target.dataset.action;

    if (action === 'decrement') {
      counterValue -= 1;
    } else if (action === 'increment') {
      counterValue += 1; 
    }

    updateCounter(counterValue);
  });
});
