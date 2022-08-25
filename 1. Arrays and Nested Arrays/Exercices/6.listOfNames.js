function listOfNames(params) {
  params
    .sort((a, b) => a.localeCompare(b))
    .forEach((a, i) => console.log(`${i + 1}.${a}`));
}
listOfNames(['John', 'Bob', 'Christina', 'Ema']);

// output:

// 1.Bob
// 2.Christina
// 3.Ema
// 4.John