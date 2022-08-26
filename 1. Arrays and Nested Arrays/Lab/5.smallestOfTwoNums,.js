function smallestOfTwoNums(arr) {
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted.slice(0, 2));
}
smallestOfTwoNums([30, 15, 50, 5]);

// output: [ 5, 15 ]