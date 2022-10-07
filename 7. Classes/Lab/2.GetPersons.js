function getPersons() {
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

  const person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
  const person2 = new Person('SoftUni');
  const person3 = new Person('Stephan', 'Johnson', 25);
  const person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

  return [person, person2, person3, person4];
}
getPersons();
// OUTPUT:
// Anna Simpson (age: 22, email: anna@yahoo.com)
// Softuni undefined (age: undefined, email: undefined)
// Stephan Johnson (age: 25, email: undefined)
// Gabriel Peterson (age: 24, email: g.p@gmail.com)
