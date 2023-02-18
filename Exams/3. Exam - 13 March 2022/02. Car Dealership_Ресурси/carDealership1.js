class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        let invalidFields = [horsepower, price, mileage].some(
            (x) => Math.sign(x) == -1 || isNaN(x)
        );

        if (typeof model != 'string' || model == '' || invalidFields) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({ model, horsepower, price, mileage });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const carIndex = this.availableCars.findIndex((x) => x.model == model);

        if (carIndex == -1) {
            throw new Error(`${model} was not found!`);
        }

        const car = this.availableCars[carIndex];

        const mileageDifference = car.mileage - desiredMileage;
        const isCarMileageDesired = car.mileage <= desiredMileage;

        if (!isCarMileageDesired && mileageDifference <= 40000) {
            car.price = car.price * 0.95;
        } else if (!isCarMileageDesired && mileageDifference > 40000) {
            car.price = car.price * 0.9;
        }

        const soldPrice = car.price;
        const soldCar = this.availableCars.splice(carIndex, 1)[0];

        this.soldCars.push({ ...soldCar, soldPrice });
        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }

        const availableCars = this.availableCars.map((x) => {
            return `---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(
                2
            )} km - ${x.price.toFixed(2)}$`;
        });

        availableCars.unshift('-Available cars:');

        return availableCars.join('\n');
    }

    salesReport(criteria) {
        const criterias = {
            horsepower: (a, b) => b.horsepower - a.horsepower,
            model: (a, b) => a.model.localeCompare(b.model),
        };

        if (criterias[criteria] == undefined) {
            throw new Error('Invalid criteria!');
        }

        const reportByCriteria = this.soldCars
            .sort(criterias[criteria])
            .map((x) => `---${x.model} - ${x.horsepower} HP - ${x.price.toFixed(2)}$`);

        reportByCriteria.unshift(`-${this.soldCars.length} cars sold:`);
        reportByCriteria.unshift(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);

        return reportByCriteria.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));