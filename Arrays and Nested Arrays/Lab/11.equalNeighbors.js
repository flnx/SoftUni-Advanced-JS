function equalNeighbors(arrs) {
  let pairs = 0;

  for (let i = 0; i < arrs.length; i++) {
    let currentArray = arrs[i];

    for (let c = 0; c < arrs[i].length; c++) {
      let currentElement = currentArray[c];
      if (currentElement === currentArray[c + 1]) {
        pairs++;
      }

      if (arrs[i + 1]) {
        let nextArray = arrs[i + 1];
        let nextElement = nextArray[c];
        if (currentElement === nextElement) {
          pairs++;
        }
      }
    }
  }
  return pairs;
}
console.log(
  equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2'],
  ])
);

console.log(`--------------`);

console.log(
  equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4'],
  ])
);

console.log(`--------------`);

console.log(
  equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],

    ['well', 'done', 'yo', '6'],

    ['not', 'done', 'yet', '5'],
  ])
);
