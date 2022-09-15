function solve(areaIn, volIn, input) {
  return JSON.parse(input).map((x) => ({
    area: areaIn.call(x),
    vol: volIn.call(x),
  }));
}

console.log(
  solve(
    area,
    vol,
    `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
  )
);

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

// output 

// [
//   { area: 2, vol: 20 },
//   { area: 49, vol: 490 },
//   { area: 10, vol: 100 }
// ]
