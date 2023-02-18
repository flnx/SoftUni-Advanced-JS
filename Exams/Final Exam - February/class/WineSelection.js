class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(x => x.wineName == wineName);

        if (wine == undefined) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        const wineIndex = this.wines.findIndex(x => x.wineName == wineName);

        if (wineIndex == -1) {
            throw new Error("The wine, you're looking for, is not found.");
        }

        const wine = this.wines[wineIndex];
        
        if (wine.paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(wineIndex, 1);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (wineType == undefined) {
            let spaceLeft = this.wines.length >= this.space ? 0 : this.space - this.wines.length;
            let report = [`You have space for ${spaceLeft} bottles more.`];
            report.push(`You paid ${this.bill}$ for the wine.`);

            let sortedByName = this.wines
                .sort((a, b) => a.wineName.localeCompare(b.wineName))
                .map(x => `${x.wineName} > ${x.wineType} - ${x.paid ? "Has Paid" : "Not Paid"}.`)

            report.push(...sortedByName);

            return report.join('\n');
        }

        const wines = this.wines.filter(x => x.wineType);

        if (wines.length == 0) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        const result = wines.map((x) => `${x.wineName} > ${x.wineType} - ${x.paid ? "Has Paid" : "Not Paid"}.`);

        return result.join('\n');
    }
}

const selection = new WineSelection(2)
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));
