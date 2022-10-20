class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length == this.capacity) {
      throw new Error("Not enough space in the collection.");
    }

    this.books.push({bookName, bookAuthor, payed: false});
    return `The ${bookName}, with an author ${bookAuthor}, collect.`
  }

  payBook(bookName) {
    const book = this.books.find(x => x.bookName == bookName);
    
    if (!book) {
      throw new Error (`${bookName} is not in the collection.`) ;
    }
    if (book.payed) {
      throw new Error (`${bookName} has already been paid.`) ;
    }
    book.payed = true;
    return `${bookName} has been successfully paid.`
  }

  removeBook(bookName) {
      const book = this.books.find(x => x.bookName == bookName);

      if (!book) {
        throw new Error(`The book, you're looking for, is not found.`)
      }
      if (!book.payed) {
       throw new Error(`${bookName} need to be paid before removing from the collection.`)
      }
      const index = this.books.findIndex(x => x.bookName == bookName);
      this.books.splice(index, 1);
      return `${bookName} remove from the collection.`
  }

  getStatistics(bookAuthor) {
    if (!bookAuthor) {
      let paid;
      const emptySpots = this.capacity - this.books.length;
      let output = `The book collection has ${emptySpots} empty spots left.\n`
      
      const sorting = (a, b) => a.bookName.localeCompare(b.bookName)
      const sorted = this.books.sort(sorting);
      const mapping = x => `${x.bookName} == ${x.bookAuthor} - ${paid = x.payed ? 'Has Paid.' : 'Not Paid.'}`
      let output2 = sorted.map(mapping);

      return output + output2.join('\n');
    }
    
    const book = this.books.find(x => x.bookAuthor == bookAuthor);
    if (!book) {
      throw new Error(`${bookAuthor} is not in the collection.`) 
    } 
    let paid;
    const mapping = x => `${x.bookName} == ${x.bookAuthor} - ${paid = x.payed ? 'Has Paid.' : 'Not Paid.'}`
    let output3 = [book].map(mapping);
    return output3.join('\n')
  }
}

// Input 1
const library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce')); //<- throws error
// Output 1
// The In Search of Lost Time, with an author Marcel Proust, collect.
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Not enough space in the collection.

console.log(`-----------------------------------------`);

// Input 2
const library2 = new LibraryCollection(2)
library2.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library2.payBook('In Search of Lost Time'));
// console.log(library2.payBook('Don Quixote')); <- throws error

// Output 2
// In Search of Lost Time has been successfully paid.
// Don Quixote is not in the collection.

// Input 3
const library3 = new LibraryCollection(2)
library3.addBook('In Search of Lost Time', 'Marcel Proust');
library3.addBook('Don Quixote', 'Miguel de Cervantes');
library3.payBook('Don Quixote');
console.log(library3.removeBook('Don Quixote'));
// console.log(library3.removeBook('In Search of Lost Time')); <- throws error

// Output 3
// Don Quixote remove from the collection.
// In Search of Lost Time need to be paid before removing from the collection.

console.log(`-----------------------------------------`);

// Input 4
const library4 = new LibraryCollection(2)
console.log(library4.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library4.getStatistics('Miguel de Cervantes'));

// Output 4
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Don Quixote == Miguel de Cervantes - Not Paid.

console.log(`-----------------------------------------`);

// Input 5
const library5 = new LibraryCollection(5)
library5.addBook('Don Quixote', 'Miguel de Cervantes');
library5.payBook('Don Quixote');
library5.addBook('In Search of Lost Time', 'Marcel Proust');
library5.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

// Output 5
// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.
