function biggestElement(arr) {
  let myNum = Number.MIN_SAFE_INTEGER;
  for (const el of arr) {
    const currentNum = Math.max(...el);
    if (myNum < currentNum) {
      myNum = currentNum;
    }
  }
  console.log(myNum);
}
biggestElement([
  [20, 50, 10],

  [8, 33, 145],
]);
