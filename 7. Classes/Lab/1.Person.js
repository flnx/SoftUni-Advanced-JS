class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

const person = new Person('Elena', 'Malinova', 22, 'elena@yahoo.com');
const person2 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');

console.log(person.toString()); // Elena Malinova (age: 22, email: elena@yahoo.com)
console.log(person2.toString()); // Anna Simpson (age: 22, email: anna@yahoo.com)