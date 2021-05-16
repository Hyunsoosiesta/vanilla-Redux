const plus = document.querySelector('.add');
const minus = document.querySelector('.minus')
const number = document.querySelector('.number')

let count = 0;

const updateText = () => {
  number.textContent = count;
}

const handleAdd = () => {
  console.log('add')
  count++
  updateText()
}

const handleMinus = () => {
  console.log('minus')
  count--
  updateText()

}

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
