function townPopulation(input) {
  const towns = {};

  for (let town of input) {
    let [name, population] = town.split(' <-> ');
    population = Number(population);
    
    if (!towns[name]) {
      towns[name] = population;
    } else {
      towns[name] += population;
    }
  }

  Object.keys(towns).forEach((a) => console.log(`${a} : ${towns[a]}`));
}

townPopulation([
  'Istanbul <-> 100000',
  'Honk Kong <-> 2100004',
  'Jerusalem <-> 2352344',
  'Mexico City <-> 23401925',
  'Istanbul <-> 1000',
]);
