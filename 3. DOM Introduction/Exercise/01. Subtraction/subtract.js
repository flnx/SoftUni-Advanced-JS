function subtract() {
  const numOneElement = document.getElementById('firstNumber');
  const numTwoElement = document.getElementById('secondNumber');

  const firstNum = Number(numOneElement.value);
  const secondNum = Number(numTwoElement.value);

  const sum = firstNum - secondNum;

  const result = document.getElementById('result');
  const p = document.createElement('p');
  p.textContent = sum;
  result.appendChild(p);
}
