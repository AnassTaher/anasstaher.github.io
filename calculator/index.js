
// get elemetns with the html property data-property
const operators = document.querySelectorAll('[data-op]');
const numbers = document.querySelectorAll('[data-num]');
const display = document.getElementById('display');
const equal = document.querySelector('[data-eq]');
let operations = [];
let input = "";


const handleNumber = (number) => {
  if(input.length >= 9) return;
  console.log(number.dataset.num);
  input += number.dataset.num;
  display.innerText = input;
};

// add event listener to all operators:
operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
      console.log(e.target.dataset.op);
  });
});

// add event listener to all numbers:
numbers.forEach((number) => {
  number.addEventListener('click', (e) => handleNumber(e.target));
});



