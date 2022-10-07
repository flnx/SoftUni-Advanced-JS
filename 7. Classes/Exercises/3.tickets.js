function tickets(arr, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  const result = [];

  for (const line of arr) {
    let [dest, price, status] = line.split('|');
    price = Number(price);
    result.push(new Ticket(dest, price, status));
  }

  const sortCheck = (a,b) => {
    return criteria == 'price' ? a - b : a[criteria].localeCompare(b[criteria])
  }
  return result.sort(sortCheck);
}

const result = tickets(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'destination'
);

console.log(result);

// Output:
// ---------------------------

// [
//   Ticket { 
  //  destination: 'Boston', 
//    price: 126.2, status: 'departed'
//   },

//   Ticket {
//     destination: 'New York City',
//     price: 95.99,
//     status: 'available'
//   },

//   Ticket { destination: 'New York City', 
//     price: 95.99, 
//     status: 'sold' },

//   Ticket {
//     destination: 'Philadelphia',
//     price: 94.2,
//     status: 'available'
//   }
// ]