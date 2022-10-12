(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    return !this.startsWith(str) ? str + this.toString() : this.toString();
  };

  String.prototype.ensureEnd = function (str) {
    return !this.endsWith(str) ? this.toString() + str : this.toString();
  };

  String.prototype.isEmpty = function () {
    return this.length <= 0 ? true : false;
  };

  String.prototype.truncate = function (n) {
    if (this.length <= n) {
      return this.toString();
    }

    if (n <= 3) {
      return '.'.repeat(n);
    }

    let result = this.substring(0, n - 2);
    let index = result.lastIndexOf(' ');

    if (index) {
      result = result.substring(0, index) + '...';
    } else {
      result = result.substring(0, n - 3) + '...';
    }
    return result;
  };

  String.format = function (str, ...params) {
    params.forEach((x, i) => str = str.replace(`{${i}}`, x));
    return str;
  };
})();

let str = 'my string';
str = str.ensureStart('my'); // 'my string'       // 'my' already present
str = str.ensureStart('hello '); // 'hello my string'
str = str.truncate(16); // 'hello my string' // length is 15
str = str.truncate(14); // 'hello my...'     // length is 11
str = str.truncate(8); // 'hello...'
str = str.truncate(4); // '...'
str = str.truncate(2); // '..'
str = String.format('The {0} {1} fox', 'quick', 'brown'); // 'The quick brown fox'
str = String.format('jumps {0} {1}', 'dog'); // 'jumps dog {1}'   // no parameter at 1