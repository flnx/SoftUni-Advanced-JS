function storeCatalogue(arr) {
  const sortedArr = arr.sort((a, b) => a.localeCompare(b));
  let catalogue = {};

  for (let i = 0; i < sortedArr.length; i++) {
    const line = sortedArr[i];
    const firstLetter = line[0];
    const [product, price] = line.split(' : ');

    if (!catalogue[firstLetter]) {
      catalogue[firstLetter] = {}
    }
    catalogue[firstLetter][product] = price;
  }

  for (let letter in catalogue) {
    console.log(letter);
    for (let product in catalogue[letter]) {
      console.log(` ${product}: ${catalogue[letter][product]}`);
    }
  }
}
storeCatalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);


// output:

// A
//  Anti-Bug Spray : 15
//  Apple : 1.25
//  Appricot : 20.4
// B
//  Boiler : 300
// D
//  Deodorant : 10
// F
//  Fridge : 1500
// T
//  T-Shirt : 10
//  TV : 1499