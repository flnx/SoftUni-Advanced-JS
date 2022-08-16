function biggerHalf(arr) {
  const sorted = arr.sort((a, b) => a - b);
  const sortedLength = Math.ceil(sorted.length / 2);
  return sorted.slice(-sortedLength);
}

const result = biggerHalf([3, 19, 14, 7, 2, 19, 6]);
console.log(result);
