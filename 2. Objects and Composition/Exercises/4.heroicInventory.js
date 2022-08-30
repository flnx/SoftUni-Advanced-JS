function heroicInventory(heroes) {
  let myHeroes = [];

  for (let hero of heroes) {
    let [heroName, heroLevel, heroItems] = hero.split(' / ');
    heroLevel = Number(heroLevel);
    heroItems = heroItems ? heroItems.split(', ') : [];

    const myHero = {
      name: heroName,
      level: heroLevel,
      items: heroItems,
    };

    myHeroes.push(myHero);
  }

  let output = JSON.stringify(myHeroes);
  console.log(output);
}
heroicInventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);

// output: [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]
