function pieceOfPie(arr, flavorOne, flavorTwo) {
  const startIndex = arr.indexOf(flavorOne);
  const endIndex = arr.indexOf(flavorTwo);

  const result = arr.slice(startIndex, endIndex + 1);
  return result;
}
const output = pieceOfPie(
  ['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],

  'Key Lime Pie',

  'Lemon Meringue Pie'
);

console.log(output);

// output: [ 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie' ]