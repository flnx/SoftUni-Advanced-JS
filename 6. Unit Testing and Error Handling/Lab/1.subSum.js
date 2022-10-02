function subSum(arr, start, end) {
  if (!Array.isArray(arr)) {
    return NaN;
  }

  let startIndex = Math.max(start, 0);
  let endIndex = Math.min(end, arr.length - 1);

  const sum = arr.map(Number)
    .slice(startIndex, endIndex + 1)
    .reduce((acc, x) => acc + x, 0)

    return sum;
}

let result = subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1); // 3.3000000000000003
let result2 = subSum([10, 20, 30, 40, 50, 60], 3, 300); // 150
let result3 = subSum([10, 'twenty', 30, 40], 0, 2); // NaN
let result4 = subSum([], 1, 2); // 0 
let result5 = subSum('text', 0, 2); // NaN

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
