


const inpColor = document.getElementById('color');
const inpRow = document.getElementById('row');
const inpCol = document.getElementById('col');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');

console.log(inpColor);

inpColor.addEventListener("input", (e) => {
  console.log(e);
  console.log(e.target.value);
});