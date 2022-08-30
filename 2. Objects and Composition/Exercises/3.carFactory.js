function carFactory(obj) {
  const myCar = {
    model: obj.model,
    engine: { power: null, volume: null },
    carriage: { type: '', color: '' },
    wheels: [0, 0, 0, 0],
  };

  if (obj.power <= 90) {
    myCar.engine.power = 90;
    myCar.engine.volume = 1800;
  } else if (obj.power <= 120) {
    myCar.engine.power = 120;
    myCar.engine.volume = 2400;
  } else if (obj.power > 120) {
    myCar.engine.power = 200;
    myCar.engine.volume = 3500;
  }

  myCar.carriage.type = obj.carriage;
  myCar.carriage.color = obj.color;

  if (obj.wheelsize % 2 === 0) {
    Math.floor(obj.wheelsize--);
  }

  const wheelSize = obj.wheelsize;
  myCar.wheels.fill(wheelSize, 0, 4);

  return myCar;
}
const output = carFactory({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14,
});

console.log(output);

// output: 

// {
//   model: 'VW Golf II',
//   engine: { power: 90, volume: 1800 },
//   carriage: { type: 'hatchback', color: 'blue' },
//   wheels: [ 13, 13, 13, 13 ]
// }