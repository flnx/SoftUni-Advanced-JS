function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);
  let tableElements = document.querySelectorAll('#container, tbody tr');
  let userInput = document.getElementById('searchField');

  function onClick() {
    for (let el of tableElements) {
      el.classList.remove('select');
      if (el.textContent.includes(userInput.value) && userInput.value !== '') {
        el.classList.add('select');
      }
    }
    userInput.value = '';
  }
}
