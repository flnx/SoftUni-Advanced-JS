class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(arr) {
    let output = [];
    for (let p of arr) {
      let [name, age, playerValue] = p.split('/');
      age = Number(age);
      playerValue = Number(playerValue);

      const findPlayer = this.invitedPlayers.find((x) => x.name == name);

      if (!findPlayer) {
        this.invitedPlayers.push({ name, age, playerValue });
      } else {
        if (findPlayer.playerValue < playerValue) {
          findPlayer.playerValue = playerValue;
        }
      }

      if (!output.includes(name)) {
        output.push(name);
      }
    }
    return `You successfully invite ${output.join(', ')}.`;
  }

  signContract(selectedPlayer) {
    let [name, playerOffer] = selectedPlayer.split('/');
    playerOffer = Number(playerOffer);
    const findPlayer = this.invitedPlayers.find((x) => x.name == name);

    if (!findPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (playerOffer < findPlayer.playerValue) {
      const diff = findPlayer.playerValue - playerOffer;
      throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${diff} million more are needed to sign the contract!`);
    }

    findPlayer.playerValue = 'Bought';
    return `Congratulations! You sign a contract with ${findPlayer.name} for ${playerOffer} million dollars.`
  }

  ageLimit(name, age) {
    const findPlayer = this.invitedPlayers.find((x) => x.name == name);

    if (!findPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (findPlayer.age < age) {
      let diff = age - findPlayer.age;
      if (diff < 5) {
        return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
      } else {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
      }
    }
    return `${name} is above age limit!`
  }

  transferWindowResult() {
    let output = ['Players list:'];

    this.invitedPlayers
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(x => output.push(`Player ${x.name}-${x.playerValue}`));

    return output.join('\n');
  }
}

console.log(`---------- 1 ----------`);
let fTeam = new footballTeam('Barcelona', 'Spain');
console.log(fTeam.newAdditions(['Kylian Mbappé/23/160', 'Lionel Messi/35/50', 'Pau Torres/25/52']));
// Output 1
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.

console.log(`---------- 2 ----------`);
let fTeam2 = new footballTeam('Barcelona', 'Spain');
console.log(fTeam2.newAdditions(['Kylian Mbappé/23/160', 'Lionel Messi/35/50', 'Pau Torres/25/52']));
console.log(fTeam2.signContract('Lionel Messi/60'));
console.log(fTeam2.signContract('Kylian Mbappé/240'));
// console.log(fTeam2.signContract('Barbukov/10')); // throws error
// Output 2
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Lionel Messi for 60 million dollars.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.
// Uncaught Error: Barbukov is not invited to the selection list!

console.log(`---------- 3 ----------`);
let fTeam3 = new footballTeam("Barcelona", "Spain");
console.log(fTeam3.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam3.ageLimit("Lionel Messi", 33));
console.log(fTeam3.ageLimit("Kylian Mbappé", 30));
console.log(fTeam3.ageLimit("Pau Torres", 26));
console.log(fTeam3.signContract("Kylian Mbappé/240"));
// Output 3
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Lionel Messi is above age limit!
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Pau Torres will sign a contract for 1 years with Barcelona in Spain!
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.

console.log(`---------- 4 ----------`);
let fTeam4 = new footballTeam("Barcelona", "Spain");
console.log(fTeam4.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam4.signContract("Kylian Mbappé/240"));
console.log(fTeam4.ageLimit("Kylian Mbappé", 30));
console.log(fTeam4.transferWindowResult());
// Output 4
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Players list:
// Player Kylian Mbappé-Bought
// Player Lionel Messi-50
// Player Pau Torres-52
