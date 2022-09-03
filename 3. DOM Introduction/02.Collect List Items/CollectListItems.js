function extractText() {
  const listElements = Array.from(document.querySelectorAll('li'));
  const result = listElements.map(item => item.textContent).join('\n');

  document.getElementById('result').value = result;
}