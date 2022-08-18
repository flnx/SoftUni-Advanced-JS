function extractIncreasingSubsequenceFromArray(arr) {
  let biggestNum = arr[0];
  let nums = [biggestNum];

  for (let i = 1; i < arr.length; i++) {
    if (biggestNum <= arr[i]) {
      biggestNum = arr[i];
      nums.push(biggestNum);
    }
  }
  return nums;
}

// output: [1, 3, 8, 10, 12, 24]
// output: [20]
extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);
