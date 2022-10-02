function maxSequence(arr) {
  let result = [];
  let arrLength = arr.length;
  let maxCount = 0;

  for (let i = 0; i < arrLength; i++) {
    let currentResult = []; // added
    let count = 0;
    let elementToCompare = arr[i];

    for (let j = i; j < arrLength; j++) {
      let element = arr[j];

      if (element === elementToCompare) {
        count++;
        currentResult.push(element); // added
      } else {
        break;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      result = currentResult;
    }
  }
  console.log(result.join(' '));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
