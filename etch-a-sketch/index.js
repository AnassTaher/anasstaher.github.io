
const inputs = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');
let rows = document.getElementById('rows').value;
let columns = document.getElementById('columns').value;
let color = document.getElementById('color').value;
let backgroundColor = "white";
let mouseDown = false;




const handleItem = (e) => {
  if (e.type === 'mouseover' && !mouseDown) return;
  console.log(e);
  console.log(color);
  e.target.style.backgroundColor = color;
};

const drawGrid = () => {
  const grid = document.getElementById('grid');
  for(let i = 0; i < rows * columns; i++) {
    const item = document.createElement('div');
    item.classList.add('grid-item');
    item.addEventListener('mousedown', handleItem);
    item.addEventListener('mouseover', handleItem);
    grid.appendChild(item);
  }
  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
};

const handleInput = (e) => {
  if(e.target.value === "") return;
  const val = e.target.value;

  switch(e.target.id){
    case "rows":
      rows = val;
      break;
    case "columns":
      columns = val;
      break;
    case "color":
      color = val; 
      return;
    default:
      break;
  }
  clearGrid();
  drawGrid();
};

const handleButton = (e) => {

  if(e.target.id === "clear") {
    clearGrid();
    drawGrid();
  } else if(e.target.id === "eraser"){
    console.log("eraser");
    (color === backgroundColor) ? color = document.getElementById('color').value : color = backgroundColor;
  }

};


drawGrid();

Array.prototype.forEach.call(inputs, child => {
  child.addEventListener("input", handleInput);
});

Array.prototype.forEach.call(buttons, child => {
  child.addEventListener("click", handleButton);
});

const clearGrid = () => (document.getElementById('grid').innerHTML = "");
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);




