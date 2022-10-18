class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars  = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    let invalidFields = [horsepower, price, mileage]
    .some(x => Math.sign(x) == -1 || !Math.sign(x) == NaN);
    
    if (typeof model != 'string' || model == '' || invalidFields) {
      throw new Error('Invalid input!')
    }
    this.availableCars.push({model, horsepower, price, mileage});
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
  }
  
  sellCar(model, desiredMileage) {
    const findCar = this.availableCars.find(x => x.model == model);

    if (!findCar) {
      throw new Error(`${model} was not found!`)
    }
    
    let diff = findCar.mileage - desiredMileage;
    let price = findCar.price;

    if (diff > 0 && diff <= 40000) {
      price *= 0.95;
    }
    
    if (diff > 40000) {
      price *= 0.90;      
    }
    
    this.soldCars.push({
      model: findCar.model,
      horsepower: findCar.horsepower,
      soldPrice: price
    })
    
    const index = this.availableCars.findIndex(x => x.model == model);
    this.availableCars.splice(index, 1);
    this.totalIncome += price;
    return `${model} was sold for ${price.toFixed(2)}$`

  }

  currentCar() {
    if (this.availableCars.length == 0) {
      return "There are no available cars"
    }
    const output = '-Available cars:'
    let carsOutput = this.availableCars
      .map(x => `---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`)

    return `${output}\n${carsOutput.join('\n')}`;
  }

  salesReport(criteria) {
    if (criteria != 'model' && criteria != 'horsepower') {
      throw new Error ('Invalid criteria!');
    }
    
    const sortFn = {
      model: (a, b) => a.model.localeCompare(b.model),
      horsepower: (a, b) => b.horsepower - a.horsepower,
    }
    
    let sortedByCriteria = this.soldCars.sort(sortFn[criteria]);
    let totalIncome = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`
    let totalSold = `-${this.soldCars.length} cars sold:`
    let soldModel = sortedByCriteria.map(x => `---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`);

    return `${totalIncome}\n${totalSold}\n${soldModel.join('\n')}`;
  }
}

module.exports = { CarDealership };

let dealership3 = new CarDealership('SoftAuto');
dealership3.addCar('Toyota Corolla', 100, 3500, 190000);
dealership3.addCar('Mercedes C63', 300, 29000, 187000);
dealership3.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership3.sellCar('Toyota Corolla', 230000));
console.log(dealership3.sellCar('Mercedes C63', 110000));
// Toyota Corolla was sold for 3500.00$
// Mercedes C63 was sold for 26100.00$

console.log(`----------------------`);

let dealership4 = new CarDealership('SoftAuto');
dealership4.addCar('Toyota Corolla', 100, 3500, 190000);
dealership4.addCar('Mercedes C63', 300, 29000, 187000);
dealership4.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership4.currentCar());
// -Available cars:
// ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// ---Audi A3 - 120 HP - 240000.00 km - 4900.00$

console.log(`----------------------`);

let dealership5 = new CarDealership('SoftAuto');
dealership5.addCar('Toyota Corolla', 100, 3500, 190000);
dealership5.addCar('Mercedes C63', 300, 29000, 187000);
dealership5.addCar('Audi A3', 120, 4900, 240000);
dealership5.sellCar('Toyota Corolla', 230000);
dealership5.sellCar('Mercedes C63', 110000);
console.log(dealership5.salesReport('horsepower'));
// -SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$