// solution 1
function filterEmployees(input, criteria) {
  const [prop, value] = criteria.split('-');

  return JSON.parse(input)
    .filter((x) => x[prop] == value || criteria == 'all')
    .forEach((x, i) => console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`));
}
`----------------`
// solution 2
`----------------`

function filterEmployees(input, criteria) {
  const [prop, value] = criteria.split('-');
  let counter = 0;

  JSON.parse(input).forEach((person) => selectByCriteria.call(person));

  function selectByCriteria() {
    if (this[prop] === value || criteria === 'all') {
      return console.log(
        `${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`
      );
    }
  }
}

// output

// 0. Ardine Bassam - abassam0@cnn.com
// 1. Kizzee Jost - kjost1@forbes.com
// -----------------------
// 0. Kaylee Johnson - k0@cnn.com
// 1. Kizzee Johnson - kjost1@forbes.com
// 2. Evanne Johnson - ev2@hostgator.com

filterEmployees(
  `[{
  "id": "1",
  "first_name": "Ardine",
  "last_name": "Bassam",
  "email": "abassam0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Jost",
  "email": "kjost1@forbes.com",
  "gender": "Female"
},  
{
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}]`,
  'gender-Female'
);

console.log(`-----------------------`);

filterEmployees(
  `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  'last_name-Johnson'
);
