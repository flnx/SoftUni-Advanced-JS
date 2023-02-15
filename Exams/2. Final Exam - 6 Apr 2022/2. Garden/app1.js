class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0,
        });

        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        const plant = this.plants.find((x) => x.plantName == plantName);

        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }

        return `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName) {
        const plantIndex = this.plants.findIndex(
            (x) => x.plantName == plantName
        );

        if (plantIndex == -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        const plant = this.plants[plantIndex];

        if (!plant.ripe) {
            throw new Error(
                `The ${plantName} cannot be harvested before it is ripe.`
            );
        }

        this.spaceAvailable += plant.spaceRequired;

        this.storage.push({ plantName, quantity: plant.quantity });
        this.plants.splice(plantIndex, 1);

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let report = [`The garden has ${this.spaceAvailable} free space left.`];
        let gardenReport = 'Plants in the garden: ';

        let plantNames = this.plants
            .map((x) => x.plantName)
            .sort((a, b) => a.localeCompare(b))
            .join(', ');

        gardenReport += plantNames;

        let storageReport = 'Plants in storage: The storage is empty.';

        if (this.storage.length > 0) {
            let updatedStorageReport = this.storage
                .map((x) => `${x.plantName} (${x.quantity})`)
                .join(', ');

            storageReport = `Plants in storage: ${updatedStorageReport}`;
        }

        report.push(gardenReport, storageReport);

        return report.join('\n');
    }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant('apple', 20));
console.log();
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));

console.log();

console.log(myGarden.generateReport());

// The apple has been successfully planted in the garden.

// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.

// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)
