// ------------ solution 1 ------------ //

function colorize() {
  const tableRows = document.querySelectorAll('tr');

  for (let i = 1; i < tableRows.length; i += 2) {
    tableRows[i].style.backgroundColor = 'teal';
  }
}

// ------------ solution 2 ------------ //

function colorize() {
  const tableRows = document.querySelectorAll('tr:nth-child(2n)');

  for (let i = 0; i < tableRows.length; i++) {
    tableRows[i].style.backgroundColor = 'teal';
  }
}
