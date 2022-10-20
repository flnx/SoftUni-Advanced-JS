class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error('Unsuccessful registration at the camp.');
    }

    const doesItExist = this.listOfParticipants.some((x) => x.name == name);

    if (doesItExist) {
      return `The ${name} is already registered at the camp.`;
    }

    let requiredMoney = this.priceForTheCamp[condition];

    if (money < requiredMoney) {
      return `The money is not enough to pay the stay at the camp.`;
    }

    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    const index = this.listOfParticipants.findIndex((x) => x.name == name);
    if (index == -1) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }
    this.listOfParticipants.splice(index, 1);
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, p1, p2) {
    const player1 = this.listOfParticipants.find((x) => x.name == p1);

    if (!player1) {
      throw new Error(`Invalid entered name/s.`);
    }

    if (typeOfGame == 'WaterBalloonFights') {
      const player2 = this.listOfParticipants.find((x) => x.name == p2);

      if (!player2) {
        throw new Error(`Invalid entered name/s.`);
      }
      
      if (player1.condition != player2.condition) {
        throw new Error(`Choose players with equal condition.`);
      }

      let winner = null;

      if (player1.power > player2.power) {
        player1.wins++;
        winner = player1.name;
      } else if (player2.power > player1.power) {
        player2.wins++;
        winner = player2.name;
      } else {
        return 'There is no winner.';
      }
      return `The ${winner} is winner in the game ${typeOfGame}.`;
    } else if (typeOfGame == 'Battleship') {
      player1.power += 20;
      return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
    }
  }

  toString() {
    let pts = this.listOfParticipants;
    let res = `${this.organizer} will take ${pts.length} participants on camping to ${this.location}\n`

    let sorted = pts
      .sort((a, b) => b.wins - a.wins)
      .map(x => `${x.name} - ${x.condition} - ${x.power} - ${x.wins}`)
      .join('\n');

    return res + sorted;
  }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson")); // < throws error
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());

// Output 4
// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.
// Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Petar Petarson - student - 120 - 1
// Sara Dickinson - child - 100 - 0
// Dimitur Kostov - student - 100 - 0

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// // Output 1
// // The money is not enough to pay the stay at the camp.
// // The Petar Petarson was successfully registered.
// // The Petar Petarson is already registered at the camp.
// // Uncaught Error: Unsuccessful registration at the camp.

console.log(`----------------------------------------------------`);

// const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
// console.log(summerCamp.unregisterParticipant('Petar'));
// console.log(summerCamp.unregisterParticipant('Petar Petarson'));

// // Output 2
// // The Petar Petarson was successfully registered.
// // Uncaught Error: The Petar is not registered in the camp.
// // The Petar Petarson removed successfully.

console.log(`----------------------------------------------------`);

// const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
// console.log(summerCamp.timeToPlay('Battleship', 'Petar Petarson'));
// console.log(summerCamp.registerParticipant('Sara Dickinson', 'child', 200));
// console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Sara Dickinson'));
// console.log(summerCamp.registerParticipant('Dimitur Kostov', 'student', 300));
// console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Dimitur Kostov'));

// // Output 3
// // The Petar Petarson was successfully registered.
// // The Petar Petarson successfully completed the game Battleship.
// // The Sara Dickinson was successfully registered.
// // Uncaught Error: Choose players with equal condition.
// // The Dimitur Kostov was successfully registered.
// // The Petar Petarson is winner in the game WaterBalloonFights.

console.log(`----------------------------------------------------`);