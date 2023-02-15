class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {}; // The goals property is an object, representing a key-value pair of a peak’s name and its altitude.
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
            throw new Error(
                "You don't have enough resources to start the hike"
            );
        }

        const difference = this.resources - time * 10;

        if (difference <= 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= time * 10;
        this.listOfHikes.push({ peak, time, difficultyLevel });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        const resourcesGainedFromResting = time * 10;

        this.resources += resourcesGainedFromResting;

        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${resourcesGainedFromResting}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria == 'all') {
            let result = ['All hiking records:'];
            
            let userHikes = this.listOfHikes.map(
                (x) => `${this.username} hiked ${x.peak} for ${x.time} hours`
            );

            result.push(...userHikes);

            return result.join('\n');
        }

        const hikes = this.listOfHikes.filter(
            (x) => x.difficultyLevel == criteria
        );

        if (hikes.length == 0) {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }

       let resultMessage = hikes
            .sort((a, b) => a.time - b.time)
            .map(x => `${this.username}'s best ${criteria} hike is ${x.peak} peak, for ${x.time} hours`)[0];

       return resultMessage;

    }
}

const user = new SmartHike('Vili');

user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));


// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours
