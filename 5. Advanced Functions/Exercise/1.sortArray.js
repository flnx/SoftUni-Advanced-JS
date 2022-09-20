function sortArray(arr, str) {
  const sorting = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };

  // with ternary operator: arr.sort((a, b) => (str == 'asc' ? a - b : b - a));

  return arr.sort(sorting[str]);
}
sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');

// output:
`------------------`
// [ 6, 7, 8, 14, 17 ]
// [ 17, 14, 8, 7, 6 ]
