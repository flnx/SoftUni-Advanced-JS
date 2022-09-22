function calculator(n1) {
  let num1Elem;
  let num2Elem;
  let resultElem;
  
  function init(select1, select2, resSelect) {
    num1Elem = document.querySelector(select1);
    num2Elem = document.querySelector(select2);
    resultElem = document.querySelector(resSelect);
  }

  function subtract() {
    resultElem.value = Number(num1Elem.value) - Number(num2Elem.value);
  }

  function add() {
    resultElem.value = Number(num1Elem.value) + Number(num2Elem.value);
  }

  return {
    init,
    add,
    subtract,
  };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
