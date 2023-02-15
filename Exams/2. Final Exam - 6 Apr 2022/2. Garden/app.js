class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceReq) {
        if (this.spaceAvailable < spaceReq) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({
            plantName,
            spaceReq,
            ripe: false,
            quantity: 0,
        });

        this.spaceAvailable -= spaceReq;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantNameInput, qty) {
        if (qty <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        const plantObj = this.plants.find((x) => x.plantName == plantNameInput);

        if (!plantObj) {
            throw new Error(`There is no ${plantNameInput} in the garden.`);
        }
        
        if (plantObj.ripe) {
            throw new Error(`The ${plantNameInput} is already ripe.`);
        }

        plantObj.ripe = true;
        plantObj.quantity += qty;

        if (qty == 1) {
            return `${qty} ${plantNameInput} has successfully ripened.`;
        }

        return `${qty} ${plantNameInput}s have successfully ripened.`;
    }

    harvestPlant(plantNameInput) {
        const plantIndex = this.plants.findIndex(
            (x) => x.plantName == plantNameInput
        );

        if (plantIndex == -1) {
            throw new Error(`There is no ${plantNameInput} in the garden.`);
        }

        const plantObj = this.plants[plantIndex];

        if (!plantObj.ripe) {
            throw new Error(
                `The ${plantNameInput} cannot be harvested before it is ripe.`
            );
        }

        this.storage.push({
            plantName: plantNameInput,
            quantity: plantObj.quantity,
        });

        this.plants.splice(plantIndex, 1);
        this.spaceAvailable += plantObj.spaceReq;

        return `The ${plantNameInput} has been successfully harvested.`;
    }

    generateReport() {
        const reportFreeSpace = `The garden has ${this.spaceAvailable} free space left.`;

        const plantsInGarden = this.plants
            .map((x) => x.plantName)
            .sort((a, b) => a.localeCompare(b))
            .join(', ');

        let storageInfo = `Plants in storage: The storage is empty.`;

        if (this.storage.length > 0) {
            let plantsInStorage = this.storage.map(
                (x) => `${x.plantName} (${x.quantity})`
            );
            storageInfo = `Plants in storage: ${plantsInStorage.join(', ')}`;
        }

        return `${reportFreeSpace}\nPlants in the garden: ${plantsInGarden}\n${storageInfo}`;
    }
}

// const myGarden = new Garden(250);
// console.log(myGarden.addPlant('apple', 20)); // The apple has been successfully planted in the garden.
// console.log(myGarden.addPlant('orange', 200)); // The orange has been successfully planted in the garden.
// console.log(myGarden.addPlant('olive', 50)); // Uncaught Error Error: Not enough space in the garden.

// const myGarden2 = new Garden(250);
// console.log(myGarden2.addPlant('apple', 20)); // The apple has been successfully planted in the garden.
// console.log(myGarden2.addPlant('orange', 100)); // The orange has been successfully planted in the garden.
// console.log(myGarden2.addPlant('cucumber', 30)); // The cucumber has been successfully planted in the garden.
// console.log(myGarden2.ripenPlant('apple', 10)); // 10 apples have successfully ripened.
// console.log(myGarden2.ripenPlant('orange', 1)); // 1 orange has successfully ripened.
// console.log(myGarden2.ripenPlant('orange', 4)); // Uncaught Error Error: The orange is already ripe.

// const myGarden3 = new Garden(250);
// console.log(myGarden3.addPlant('apple', 20)); // The apple has been successfully planted in the garden.
// console.log(myGarden3.addPlant('orange', 100)); // The orange has been successfully planted in the garden.
// console.log(myGarden3.addPlant('cucumber', 30)); // The cucumber has been successfully planted in the garden.
// console.log(myGarden3.ripenPlant('apple', 10)); // 10 apples have successfully ripened.
// console.log(myGarden3.ripenPlant('orange', 1)); // 1 orange has successfully ripened.
// console.log(myGarden3.ripenPlant('olive', 30)); // Uncaught Error Error: There is no olive in the garden.

// const myGarden4 = new Garden(250)
// console.log(myGarden4.addPlant('apple', 20)); // The apple has been successfully planted in the garden.
// console.log(myGarden4.addPlant('orange', 100)); // The orange has been successfully planted in the garden.
// console.log(myGarden4.addPlant('cucumber', 30)); // The cucumber has been successfully planted in the garden.
// console.log(myGarden4.ripenPlant('apple', 10)); // 10 apples have successfully ripened.
// console.log(myGarden4.ripenPlant('orange', 1)); // 1 orange has successfully ripened.
// console.log(myGarden4.ripenPlant('cucumber', -5)); // Uncaught Error Error: The quantity cannot be zero or negative.

// const myGarden5 = new Garden(250)
// console.log(myGarden5.addPlant('apple', 20)); // The apple has been successfully planted in the garden.
// console.log(myGarden5.addPlant('orange', 200)); // The orange has been successfully planted in the garden.
// console.log(myGarden5.addPlant('raspberry', 10)); // The raspberry has been successfully planted in the garden.
// console.log(myGarden5.ripenPlant('apple', 10)); // 10 apples have successfully ripened.
// console.log(myGarden5.ripenPlant('orange', 1)); // 1 orange has successfully ripened.
// console.log(myGarden5.harvestPlant('apple')); // The apple has been successfully harvested.
// console.log(myGarden5.harvestPlant('olive')); // Uncaught Error Error: There is no olive in the garden.

const myGarden6 = new Garden(250);
console.log(myGarden6.addPlant('apple', 20)); // The apple has been successfully planted in the garden.
console.log(myGarden6.addPlant('orange', 200)); // The orange has been successfully planted in the garden.
console.log(myGarden6.addPlant('raspberry', 10)); // The raspberry has been successfully planted in the garden.
console.log(myGarden6.ripenPlant('apple', 10)); // 10 apples have successfully ripened.
console.log(myGarden6.ripenPlant('orange', 1)); // 1 orange has successfully ripened.
console.log(myGarden6.harvestPlant('orange')); // The orange has been successfully harvested.
console.log(myGarden6.generateReport());
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)
