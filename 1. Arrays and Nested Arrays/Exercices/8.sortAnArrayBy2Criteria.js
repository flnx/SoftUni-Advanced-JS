function sortAnArrayByTwoCriteria(params) {
  params.sort((a, b) => a.length - b.length || a.localeCompare(b));
  params.forEach((a) => console.log(a));
}
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

// output:

//  Jack
//  Isacc
//  George
//  Theodor
//  Harrison
