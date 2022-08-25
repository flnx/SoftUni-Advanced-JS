function evenPositionElement(arr) {
  const result = arr.filter((a, i) => i % 2 === 0);
  console.log(result.join(' '));
}
evenPositionElement(['20', '30', '40', '50', '60']);
