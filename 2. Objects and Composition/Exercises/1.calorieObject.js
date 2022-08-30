function calorieObject(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i += 2) {
    let product = arr[i];
    let calories = Number(arr[i + 1]);
    obj[product] = calories;
  }

  console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

// output: { Yoghurt: 48, Rise: 138, Apple: 52 }