function negativePositiveNumbers(arr) {
  let result = [];

  for (let el of arr) {
    if (el < 0) {
      result.unshift(el);
    } else {
      result.push(el);
    }
  }
  console.log(result);
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);

// output 
// [ -2, 7, 8, 9 ]
// [ -1, -2, 3, 0 ]
