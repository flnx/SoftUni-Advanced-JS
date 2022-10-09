class Textbox {
  constructor(selector, regex) {
    this._value = '';
    this._elements = document.querySelectorAll(selector);
    this._invalidSymbols = regex;

    Array.from(this.elements).forEach((el) =>
      el.addEventListener('change', () => (this.value = el.value))
    );
  }

  get value() {
    return this._value
  }

  set value(val) {
    this._value = val;
    Array.from(this._elements).forEach(el => el.value = val);
  }

  get elements() {
    return this._elements;
  }

  isValid() {
    return !this._invalidSymbols.test(this.value);
  }
}

let textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');

Array.from(inputs).forEach((x) =>
  x.addEventListener('click', function () {
    console.log(textbox.value);
  })
);
