class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }
  addGoal(peak, altitude) {
    if (this.goals.hasOwnProperty(peak)) {
      return `${peak} has already been added to your goals`;
    }
    this.goals[peak] = altitude;
    return `You have successfully added a new goal - ${peak}`;
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    }
    
    if (this.resources <= 0) {
      throw new Error("You don't have enough resources to start the hike");
    }

    const diff = this.resources - time * 10;

    if (diff <= 0) {
      return "You don't have enough resources to complete the hike";
    }

    this.resources -= time * 10;
    this.listOfHikes.push({ peak, time, difficultyLevel });
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    this.resources += time * 10;

    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    }
    return `You have rested for ${time} hours and gained ${time * 10}% resources`;
  }

  showRecord(criteria) {
    if (this.listOfHikes.length == 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria == 'all') {
      let output = 'All hiking records:\n';
      let hikesResult = this.listOfHikes
        .map((u) => `${this.username} hiked ${u.peak} for ${u.time} hours`)
        .join('\n');
      return output + hikesResult;
    }

    const filtered = this.listOfHikes.filter((u) => u.difficultyLevel == criteria);

    if (filtered.length == 0) {
      return `${this.username} has not done any ${criteria} hiking yet`;
    }
    const userBest = filtered.sort((a, b) => a.time - b.time);
    return `${this.username}'s best ${criteria} hike is ${userBest[0].peak} peak, for ${userBest[0].time} hours`;
  }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy')); // Vili has not done any easy hiking yet
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard')); // Vili's best hard hike is Musala peak, for 8 hours
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all')); // All hiking records: \n Vili hiked Musala for 8 hours
console.log(`---------------------------`);

const user2 = new SmartHike('Vili');
console.log(user2.addGoal('Musala', 2925)); // You have successfully added a new goal - Musala
console.log(user2.addGoal('Rui', 1706)); // You have successfully added a new goal - Rui
console.log(user2.hike('Musala', 8, 'hard')); // You hiked Musala peak for 8 hours and you have 20% resources left
console.log(user2.hike('Rui', 3, 'easy')); // You don't have enough resources to complete the hike
console.log(user2.hike('Everest', 12, 'hard')); // Uncaught Error: Everest is not in your current goals
console.log(`---------------------------`);

const user3 = new SmartHike('Vili');
console.log(user3.addGoal('Musala', 2925)); // You have successfully added a new goal - Musala
console.log(user3.hike('Musala', 8, 'hard')); // You hiked Musala peak for 8 hours and you have 20% resources left
console.log(user3.rest(4)); // You have rested for 4 hours and gained 40% resources
console.log(user3.rest(5)); // Your resources are fully recharged. Time for hiking!
