function lowestPricesInCities(input) {
  let output = {};

  for (let line of input) {
    let [town, product, price] = line.split(' | ');
    price = Number(price);

    if (!output[product]) {
      output[product] = { town, price };
    } else {
      const currPrice = output[product].price;

      if (currPrice > price) {
        output[product] = { town, price };
      }
    }
  }

  Object.keys(output).forEach((product) =>
    console.log(`${product} -> ${output[product].price} (${output[product].town})`)
  );
}
lowestPricesInCities([
  'Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10',
]);

// output: 
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)
