function solve() {
  const inputField = document.querySelector('#exercise textarea');
  let resultDiv = document.getElementById('output');
  let sentences = inputField.value
  .split('.')
  .filter((x) => x.length > 1);

  while (sentences.length > 0) {
    const text = sentences.splice(0, 3);
    let p = document.createElement('p');
    p.textContent = text + '.';
    resultDiv.appendChild(p);
  }
}
