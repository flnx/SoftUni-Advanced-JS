function processOddPositions(arr) {
  const filtered = arr.filter((x, i) => i % 2 !== 0);
  const result = filtered
    .map((a) => a * 2)
    .reverse()
    .join(' ');
  console.log(result);
}
processOddPositions([10, 15, 20, 25]);
