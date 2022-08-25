function addAndRemoveElements(params) {
  const result = [1];

  for (let i = 1; i < params.length; i++) {
    if (params[i] === 'add') {
      result.push(i + 1);
    } else if (params[i] === 'remove') {
      result.pop();
    }
  }
  if (result.length < 1) {
    console.log('Empty');
  } else {
    console.log(result.join('\n'));
  }
}
addAndRemoveElements(['add', 'add', 'add', 'add']);
console.log(`---------------`);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);

// output  [1, 2, 3, 4]
// output [1, 4, 5]
