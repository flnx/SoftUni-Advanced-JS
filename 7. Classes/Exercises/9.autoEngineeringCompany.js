function autoEngineeringCompany(arr) {
  const cars = new Map();

  for (const line of arr) {
    let [carBrand, carModel, producedCars] = line.split(' | ');
    producedCars = Number(producedCars);

    if (!cars.has(carBrand)) {
      cars.set(carBrand, new Map());
    }

    const brand = cars.get(carBrand);

    if (!brand.has(carModel)) {
      brand.set(carModel, 0);
    }
    const updateProducedCars = brand.get(carModel) + producedCars;
    brand.set(carModel, updateProducedCars);
  }

  cars.forEach((value, key) => {
    console.log(key);
    value.forEach((produced, model) => console.log(`###${model} -> ${produced}`));
  });
}
autoEngineeringCompany([
  'Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10',
]);

// Output:

// Audi
// ###Q7 -> 1000
// ###Q6 -> 100
// BMW
// ###X5 -> 1000
// ###X6 -> 100
// Citroen
// ###C4 -> 145
// ###C5 -> 10
// Volga
// ###GAZ-24 -> 1000000
// Lada
// ###Niva -> 1000000
// ###Jigula -> 1000000