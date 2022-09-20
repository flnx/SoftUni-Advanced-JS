function getFibonator() {
  let prev = 0;    // 1 2 3 5 8 
  let curr = 1;    // 1 3 5 8 13
  let next = 0;   // 2 5 8 13 21

  return function () {
    next = prev + curr // 1
    prev = curr;
    curr = next;  
    
    return prev;
  };
}

// 1 1 2 3 5 8 13

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
