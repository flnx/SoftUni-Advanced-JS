function calc() {
    const firstNum = document.getElementById('num1').value;
    const secondNum = document.getElementById('num2').value;
    let sum = document.getElementById('sum')

    sum.value = Number(firstNum) + Number(secondNum);
}
