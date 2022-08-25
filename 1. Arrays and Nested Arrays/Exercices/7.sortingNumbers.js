function sortingNumbers(params) {
  let ascendingSorted = params.sort((a, b) => a - b);

  let output = [];

  while (ascendingSorted.length > 0) {
    let smallestNum = ascendingSorted.shift() || '';
    let biggestNum = ascendingSorted.pop() || '';

    output.push(smallestNum, biggestNum);
  }
  return output = output.filter(a => Number(a));
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

// output: 
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
