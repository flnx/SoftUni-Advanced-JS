function sumTable() {
  const tableRows = Array.from(document.querySelectorAll('tr'));
  const sliced = tableRows.slice(1, -1);

  const sum = sliced.reduce((acc, curr) => {
    return acc + Number(curr.lastElementChild.textContent);
  }, 0);

  document.getElementById('sum').textContent = sum;
}
