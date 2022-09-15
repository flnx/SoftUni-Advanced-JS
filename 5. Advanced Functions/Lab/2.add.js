function solution(x, y) {
  return (y) => x + y;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
console.log(add5(25));

// output 7, 8 ,30
