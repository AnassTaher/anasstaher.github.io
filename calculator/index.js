
// get elemetns with the html property data-property
const operators = document.querySelectorAll('[data-op]');
const numbers = document.querySelectorAll('[data-num]');
const result = document.getElementById('result');
const equal = document.querySelector('[data-eq]');
const functions = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
};

const MAX_LEN_INPUT = 20;
let oper_stack = [];
let input = "";

console.log(functions["+"](1, 2));


const handleSubmit = (e) => {
  if (oper_stack.length < 3) return alert("not enough operators");
  const [a, op, b] = oper_stack;
  const result = functions[op](a, b);
  result.innerText = result;
}

const handleNumber = (number) => {
  if(input.length >= MAX_LEN_INPUT) return;
  console.log(number.dataset.num);
  input += number.dataset.num;
  result.innerText = input;
};

const handleOperator = (op) =>{
  if(input.length > 0) oper_stack.push(Number(input));
  if(oper_stack.length === 0 ) return alert("not enough numbers");


  oper_stack.push(op.dataset.op);
  input += " " + op.dataset.op + " ";
  result.innerText = input;
}

// add event listener to all operators:
operators.forEach((operator) => {
  operator.addEventListener('click', (e) => handleOperator(e.target));
});

// add event listener to all numbers:
numbers.forEach((number) => {
  number.addEventListener('click', (e) => handleNumber(e.target));
});

// add event listener to equal:
equal.addEventListener('click', (e) => handleSubmit(e.target)); 



