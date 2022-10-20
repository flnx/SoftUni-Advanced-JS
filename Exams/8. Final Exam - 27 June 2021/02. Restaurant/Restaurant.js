class Restaurant {
  constructor(budgetMoney) {
    this.budgetMoney = budgetMoney;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
    this.mealCounter = 0;
  }

  loadProducts(arr) {
    for (let line of arr) {
      let [name, quantity, totalPrice] = line.split(' ');
      quantity = Number(quantity);
      totalPrice = Number(totalPrice);

      if (totalPrice > this.budgetMoney) {
        this.history.push(`There was not enough money to load ${quantity} ${name}`);
        continue;
      }

      const products = this.stockProducts;

      if (!products.hasOwnProperty(name)) {
        products[name] = 0;
      }
      products[name] += quantity;

      this.budgetMoney -= totalPrice;
      this.history.push(`Successfully loaded ${quantity} ${name}`);
    }
    return this.history.join('\n');
  }

  addToMenu(meal, neededProducts, price) {
    if (this.menu.hasOwnProperty(meal)) {
      return `The ${meal} is already in the our menu, try something different.`;
    }

    price = Number(price);
    this.menu[meal] = { neededProducts, price };
    this.mealCounter++;
    // checks if it's meal or meals
    let mealOrMeals = this.mealCounter > 1 ? 'meals' : 'meal';
    return `Great idea! Now with the ${meal} we have ${this.mealCounter} ${mealOrMeals} in the menu, other ideas?`;
  }

  showTheMenu() {
    if (this.mealCounter == 0) {
      return 'Our menu is not ready yet, please come later...';
    }
    // prints the product and its price;
    const keys = Object.keys(this.menu);
    let output = keys.map((x) => `${x} - $ ${this.menu[x].price}`);
    return output.join('\n');
  }

  makeTheOrder(meal) {
    if (!this.menu.hasOwnProperty(meal)) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    const neededProds = this.menu[meal].neededProducts;

    for (let line of neededProds) {
      let [product, quantityNeeded] = line.split(' ');
      quantityNeeded = Number(quantityNeeded);
      // checks if the product exists
      if (!this.stockProducts.hasOwnProperty(product)) {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
      }
      // checks if the product quantity is enough
      if (this.stockProducts[product] < quantityNeeded) {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
      }
    }
    // subtracts the quantity from the products that are in stock to create the meal
    for (let line of neededProds) {
      let [product, quantityNeeded] = line.split(' ');
      this.stockProducts[product] -= quantityNeeded;
    }
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
  }
}

let kitchen = new Restaurant(1000);
console.log(
  kitchen.loadProducts([
    'Banana 10 5',
    'Banana 20 10',
    'Strawberries 50 30',
    'Yogurt 10 10',
    'Yogurt 500 1500',
    'Honey 5 50',
  ])
);

// Successfully loaded 10 Banana
// Successfully loaded 20 Banana
// Successfully loaded 50 Strawberries
// Successfully loaded 10 Yogurt
// There was not enough money to load 500 Yogurt
// Successfully loaded 5 Honey

console.log(`----------------------------------------------------`);
console.log(
  kitchen.addToMenu(
    'frozenYogurt',
    ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'],
    9.99
  )
);
console.log(
  kitchen.addToMenu(
    'Pizza',
    [
      'Flour 0.5',
      'Oil 0.2',
      'Yeast 0.5',
      'Salt 0.1',
      'Sugar 0.1',
      'Tomato sauce 0.5',
      'Pepperoni 1',
      'Cheese 1.5',
    ],
    15.55
  )
);
console.log(kitchen.showTheMenu());

// Output 2
// Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?
// frozenYogurt - $ 9.99
// Pizza - $ 15.55

console.log(`----------------------------------------------------`);

let kitchen2 = new Restaurant(1000);
kitchen2.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen2.addToMenu(
  'frozenYogurt',
  ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'],
  9.99
);
console.log(kitchen2.makeTheOrder('frozenYogurt'));

// // Output 4
// // Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.
