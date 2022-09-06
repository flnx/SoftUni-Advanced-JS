function solve() {
  const userInput = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  let result = '';
  let output = document.getElementById('result');

  if (convention === 'Camel Case') {
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i].includes(' ')) {
        result += userInput[i + 1].toUpperCase();
        i++;
      } else {
        result += userInput[i].toLowerCase();
      }
    }
  } else if (convention === 'Pascal Case') {
    result = userInput[0].toUpperCase();
    for (let i = 1; i < userInput.length; i++) {
      if (userInput[i].includes(' ')) {
        result += userInput[i + 1].toUpperCase();
        i++;
      } else {
        result += userInput[i].toLowerCase();
      }
    }
  } else {
    result = 'Error!';
  }
  output.textContent = result;
}
