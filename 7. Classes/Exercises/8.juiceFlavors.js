function juceFlavors(arr) {
  const juice = new Map();
  const juiceBottles = new Map();

  for (const line of arr) {
    let [juiceName, addJuice] = line.split(' => ');

    if (!juice.has(juiceName)) {
      juice.set(juiceName, 0);
    }

    let juiceAmount = juice.get(juiceName) + Number(addJuice);
    juice.set(juiceName, juiceAmount);

    let bottles = 0;

    if (juiceAmount >= 1000) {
      bottles = Math.trunc(juiceAmount / 1000);
      juiceBottles.set(juiceName, bottles);
    }

  }

  juiceBottles.forEach((value, key) => {
    console.log(`${key} => ${value}`);
  });
}
juceFlavors([
  'Orange => 2200',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549',
]);
juceFlavors([
  'Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789',
]);

// Orange => 2
// Peach => 2
// Pear => 8
// Watermelon => 10
// Kiwi => 4