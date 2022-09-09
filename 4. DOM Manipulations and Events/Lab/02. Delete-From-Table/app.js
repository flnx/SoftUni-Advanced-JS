function deleteByEmail() {
  const value = document.querySelector('input[type=text]').value;
  const tableRows = document.querySelectorAll('table td:nth-child(2)');

  let isFound = false;
  for (let element of tableRows) {
    if (element.textContent == value) {
      element.parentElement.remove();
      isFound = true;
    }
  }
  const result = document.getElementById('result');

  if (isFound) {
    result.textContent = 'Deleted.';
  } else {
    result.textContent = 'Not found.';
  }
}
