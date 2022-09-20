function add(n) {
  const inner = (input) => {
    n += input;
    return inner;
  };

  inner.toString = function () {
    return n;
  };

  return inner;
}

// output
console.log(add(1).toString()); // 1
console.log(add(1)(6)(7).toString()); // 4

`--- Arrow Function ---`;

const add2 = (a) => {
  const inner2 = (b) => {
    a += b;
    return inner2;
  };

  inner2.toString = () => a;
  return inner2;
};

console.log(add2(1).toString()); // 1
console.log(add2(1)(6)(7).toString()); // 4
