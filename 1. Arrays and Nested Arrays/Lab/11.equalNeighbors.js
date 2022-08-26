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
    ['test', 'yes', 'yo', 'ho'],

    ['well', 'done', 'yo', '6'],

    ['not', 'done', 'yet', '5'],
  ])
);

// output: 2
