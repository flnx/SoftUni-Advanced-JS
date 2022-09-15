// sol 1
function solution() {
  let result = '';

  const append = (txt) => (result += txt);
  const removeStart = (n) => (result = result.substring(n));
  const removeEnd = (n) => (result = result.substring(0, result.length - n));
  const print = () => console.log(result);

  return { append, removeStart, removeEnd, print };
}

// `------------`
//     sol 2
// `------------`

function solution() {
  let result = '';

  return {
    append: txt => result += txt,
    removeStart: n => result = result.substring(n),
    removeEnd: n => result = result.substring(0, result.length - n),
    print: () => console.log(result),
  };
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

// output: loa

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

// output: 34
