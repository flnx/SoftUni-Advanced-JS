class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(veggiesArr) {
    let report = [];
    for (let veggie of veggiesArr) {
      let [type, quantity, price] = veggie.split(' ');
      quantity = Number(quantity);
      price = Number(price);
      let findObj = this.availableProducts.find((x) => x.type == type);
      
      if (!findObj) {
        this.availableProducts.push({ type, quantity: 0, price });
        findObj = this.availableProducts.find((x) => x.type == type);
      }
      
      if (findObj.price < price) {
        findObj.price = price;
      }
      
      findObj.quantity += quantity;
      report.includes(type) ? '' : report.push(type);
    }

    return `Successfully added ${report.join(', ')}`;
  }
  
  buyingVegetables(boughtArr) {
    let totalPrice = 0;
    for (let product of boughtArr) {
      let [type, quantity] = product.split(' ');
      quantity = Number(quantity);
      let findObj = this.availableProducts.find((x) => x.type == type);
      
      if(!findObj) {
        throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
      }
      
      if (findObj.quantity < quantity) {
        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
      }

      totalPrice += (findObj.price * quantity);
      findObj.quantity -= quantity
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
  }
  
  rottingVegetable(type, quantity) {
      let findObj = this.availableProducts.find((x) => x.type == type);

      if (!findObj) {
        throw new Error(`${type} is not available in the store.`)
      }
      
      if(quantity >= findObj.quantity) {
        findObj.quantity = 0;
        return `The entire quantity of the ${type} has been removed.`
      }
      findObj.quantity -= quantity;
      return `Some quantity of the ${type} has been removed.`
  }

  revision() {
    let result = `Available vegetables:\n`
    const storeOwner = `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`
    const sortedVeggies = this.availableProducts
        .sort((a, b) => a.price - b.price)
        .map(x => `${x.type}-${x.quantity}-$${x.price}`)
        .join('\n');
    
    return result + sortedVeggies + storeOwner;
  }
}


// let vegStore2 = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
// console.log(
//   vegStore2.loadingVegetables([
//     'Okra 2.5 3.5',
//     'Beans 10 2.8',
//     'Celery 5.5 2.2',
//     'Celery 0.5 2.5',
//   ])
// ); // Successfully added Okra, Beans, Celery
// console.log(vegStore2.buyingVegetables(['Okra 1'])); // Great choice! You must pay the following amount $3.50.
// console.log(vegStore2.buyingVegetables(['Beans 8', 'Okra 1.5'])); // Great choice! You must pay the following amount $27.65.
// console.log(vegStore2.buyingVegetables(['Banana 1', 'Beans 2'])); // Uncaught Error: Banana is not available in the store, your current bill is $0.00.

// let vegStore3 = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
// console.log(
//   vegStore3.loadingVegetables([
//     'Okra 2.5 3.5',
//     'Beans 10 2.8',
//     'Celery 5.5 2.2',
//     'Celery 0.5 2.5',
//   ])
// ); // Successfully added Okra, Beans, Celery
// console.log(vegStore3.rottingVegetable('Okra', 1)); // Some quantity of the Okra has been removed.
// console.log(vegStore3.rottingVegetable('Okra', 2.5)); // The entire quantity of the Okra has been removed.
// console.log(vegStore3.buyingVegetables(['Beans 8', 'Okra 1.5'])); // Uncaught Error: The quantity 1.5 for the vegetable Okra is not available in the store, your current bill is $22.40.

let vegStore4 = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
console.log(
  vegStore4.loadingVegetables(['Okra 2.5 3.5','Beans 10 2.8','Celery 5.5 2.2','Celery 0.5 2.5',])); // Successfully added Okra, Beans, Celery
console.log(vegStore4.rottingVegetable('Okra', 1)); // Some quantity of the Okra has been removed.
console.log(vegStore4.rottingVegetable('Okra', 2.5)); // The entire quantity of the Okra has been removed.
console.log(vegStore4.buyingVegetables(['Beans 8', 'Celery 1.5'])); // Great choice! You must pay the following amount $26.15.
console.log(vegStore4.revision());
// Available vegetables:
// Celery-4.5-$2.5
// Beans-2-$2.8
// Okra-0-$3.5
// The owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.
