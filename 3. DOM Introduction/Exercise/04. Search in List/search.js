function search() {
  let userInput = document.getElementById('searchText').value;
  let towns = document.querySelectorAll('#towns li');
  let matchesOutput = document.getElementById('result');
  let matches = 0;

  for (let town of towns) {
    if (town.textContent.includes(userInput) && userInput !== '') {
      matches++;
      town.style.textDecoration = 'underline';
      town.style.fontWeight = 'bold';
    } else {
      town.style.textDecoration = 'none';
      town.style.fontWeight = 'normal';
    }
  }
  matchesOutput.textContent = `${matches} matches found`;
}
