let expenses = []
const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');

buttonNode.addEventListener('click', function(){
  const expense = parseInt(inputNode.value);
  if (inputNode.value === '') {
    console.log ('Пустая строка')
  }
  
  console.log(inputNode.value)

  expenses.push(expense);

  console.log(expenses);

  inputNode.value = "";
  
});




