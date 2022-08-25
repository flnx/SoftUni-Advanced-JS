function printeEveryNthElementFromAnArray(params, step) {
  const arr = [];

  for (let i = 0; i < params.length; i += step) {
    arr.push(params[i]);
  }
  return arr;
}
printeEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);

// output 5
// output 31
// output 20
