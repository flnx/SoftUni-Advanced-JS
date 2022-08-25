function printAnArrayWithAGivenDelimeter(arr, separator) {
  const result = [];
  
  arr.forEach((a) => result.push(a));
  console.log(result.join(separator));
}
printAnArrayWithAGivenDelimeter(['One', 'Two', 'Three', 'Four', 'Five'], '-');

// output One-Two-Three-Four-Five