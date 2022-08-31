function townsToJson(arr) {
  arr.shift();
  let result = [];

  for (let city of arr) {
    let [town, latitude, longitude] = city.split('|')
    .join('')
    .trim()
    .split('  ');

    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    const obj = {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };

    result.push(obj);
  }

  let output = JSON.stringify(result);

  console.log(output);
}

townsToJson([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |',
]);

console.log(`---------------------`);

townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);

// output:

// [{"Town":"Sofia","Latitude":42.7,"Longitude":23.33},{"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]
// ---------------------
// [{"Town":"Veliko Turnovo","Latitude":43.08,"Longitude":25.62},{"Town":"Monatevideo","Latitude":34.5,"Longitude":56.11}]