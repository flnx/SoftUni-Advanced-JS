(function arrayExtension() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  Array.prototype.skip = function (n) {
    return this.slice(n);
  };

  Array.prototype.take = function (n) {
    return this.slice(0, n);
  };

  Array.prototype.sum = function () {
    return this.reduce((acc, c) => acc + c);
  };

  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
})()

const test1 = [1, 2, 3, 4, 5];

const myArr = [1, 2, 3, 4, 5];
console.log(myArr.last()); // 5
console.log(myArr.skip(1)); // [2, 3, 4, 5]
console.log(myArr.take(1)); // [1]
console.log(myArr.sum(1)); // 15
console.log(myArr.average(1)); // 3
