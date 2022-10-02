function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  function onClick() {
    const workersInput = JSON.parse(document.querySelector('#inputs textarea').value);
    let restaurants = {};
    //create
    for (const line of workersInput) {
      create(line);
    }

    let highestAvgSalary = 0;
    let bestName = '';
    //find average
    for (let [key, values] of Object.entries(restaurants)) {
      findHighestAvg(key, values);
    }

    //sort by highest paid workers
    const sortedBySalary = Object.entries(restaurants[bestName]).sort(
      (a, b) => b[1] - a[1]
    );
    // html elements
    let bestRest = document.querySelector('#bestRestaurant p');
    let bestWorkers = document.querySelector('#workers p');
    let print = '';
    sortedBySalary.forEach((w) => (print += `Name: ${w[0]} With Salary: ${w[1]} `));
    // output
    bestRest.textContent = `Name: ${bestName} Average Salary: ${highestAvgSalary.toFixed(2)} Best Salary: ${sortedBySalary[0][1].toFixed(2)}`;
    bestWorkers.textContent = print;
    
    // Add restaurants and workers
    
    function create(input) {
      const [restaurant, workersInfo] = input.split(' - ');

      for (let worker of workersInfo.split(', ')) {
        let [workerName, workerSalary] = worker.split(' ');
        workerSalary = Number(workerSalary);

        if (!restaurants.hasOwnProperty(restaurant)) {
          restaurants[restaurant] = {};
        }
        restaurants[restaurant][workerName] = workerSalary;
      }
      return restaurants;
    }

    // find highest restaurant's average salary
    function findHighestAvg(key, values) {
      const workers = Object.keys(values);
      let avgSalary = 0;

      for (let worker of workers) {
        let workerSalary = restaurants[key][worker];
        avgSalary += workerSalary;
      }
      avgSalary = avgSalary / workers.length;

      if (avgSalary > highestAvgSalary) {
        highestAvgSalary = avgSalary;
        bestName = key;
      }
    }
  }
}
