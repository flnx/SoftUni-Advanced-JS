function solution() {
  const ingredients = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  const commands = { restock, prepare, report };

  return managment;

  // manage commands
  function managment(input) {
    let [command, type, quantity] = input.split(' ');
    quantity = Number(quantity);
    const action = commands[command];
    return action(type, quantity);
  }

  // - restock <microelement> <quantity>
  function restock(macros, quantity) {
    ingredients[macros] += quantity;
    return 'Success';
  }

  // - prepare <recipe> <quantity>
  function prepare(recipe, qty) {
    let currRecipe = Object.entries(recipes[recipe]);

    for (let [ingredient, required] of currRecipe) {
      const qtyNeeded = qty * required;
      if (qtyNeeded > ingredients[ingredient]) {
        return `Error: not enough ${ingredient} in stock`;
      }
    }
    currRecipe.forEach(([ingr, required]) => (ingredients[ingr] -= required * qty));
    return 'Success';
  }

  // - report
  function report() {
    return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
  }
}

let manager = solution();
console.log(manager('restock flavour 50')); // Success
console.log(manager('prepare lemonade 4')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10')); // Success
console.log(manager('restock flavour 10')); // Success
console.log(manager('prepare apple 1')); // Success
console.log(manager('restock fat 10')); // Success
console.log(manager('prepare burger 1')); // Success
console.log(manager('report')); // protein=0 carbohydrate=4 fat=3 flavour=55
