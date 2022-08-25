function rotateArray(arr, rotator) {
  for (let i = 0; i < rotator; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);

// output: 3 4 1 2
// output: Orange Coconut Apple Banana