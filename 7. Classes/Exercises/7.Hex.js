class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return '0x' + this.value.toString(16).toUpperCase();
  }
  plus(num) {
    return new Hex(this.value + Number(num));
  }

  minus(num) {
    return new Hex(this.value - Number(num));
  }

  parse(hex) {
    return parseInt(hex, 16);
  }
}

let FF = new Hex(255);
console.log(FF.toString()); // 0XFF
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString()); // 0xF
console.log(a.plus(b).toString() === '0xF'); // true
console.log(FF.parse('AAA')); // 2730