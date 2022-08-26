function cityRecord(name, population, treasury) {
  const obj = {
    name,
    population,
    treasury
  }

  return obj;
}
console.log(cityRecord('Tortuga', 7000, 15000));

// output:
// { name: 'Tortuga', population: 7000, treasury: 15000 }

