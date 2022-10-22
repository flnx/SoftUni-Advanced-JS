class Bank {
  constructor(bankName) {
    this._bankName = bankName;
    this.allCustomers = [];
    this._actions = [];
  }

  newCustomer(newc) {
    const doesItExist = this.allCustomers.some((x) => x.personalId == newc.personalId);

    if (doesItExist) {
      throw new Error(`${newc.firstName} ${newc.lastName} is already our customer!`);
    }

    this.allCustomers.push(newc);
    return newc;
  }

  depositMoney(personalId, amount) {
    const c = this.allCustomers.find((x) => x.personalId == personalId);

    if (!c) {
      throw new Error('We have no customer with this ID!');
    }
    if (!c.hasOwnProperty('totalMoney')) {
      c.totalMoney = 0;
    }

    this._actions.push(
      `${c.firstName} ${c.lastName} made deposit of ${amount}$!<${personalId}>`
    );

    c.totalMoney += amount;
    return `${c.totalMoney}$`;
  }

  withdrawMoney(personalId, amount) {
    const c = this.allCustomers.find((x) => x.personalId == personalId);

    if (!c) {
      throw new Error('We have no customer with this ID!');
    }
    if (c.totalMoney < amount) {
      throw new Error(
        `${c.firstName} ${c.lastName} does not have enough money to withdraw that amount!`
      );
    }

    this._actions.push(
      `${c.firstName} ${c.lastName} withdrew ${amount}$!<${personalId}>`
    );
    c.totalMoney -= amount;
    return `${c.totalMoney}$`;
  }

  customerInfo(personalId) {
    const c = this.allCustomers.find((x) => x.personalId == personalId);

    if (!c) {
      throw new Error('We have no customer with this ID!');
    }

    let output = [
      `Bank name: ${this._bankName}`,
      `Customer name: ${c.firstName} ${c.lastName}`,
      `Customer ID: ${c.personalId}`,
      `Total Money: ${c.totalMoney}$`,
    ];
    const customerActions = this._actions.filter((x) => x.includes(personalId));

    customerActions.forEach((_, i, arr) => {
      arr[i] = `${i + 1}. ${arr[i].replace(`<${personalId}>`, '')}`;
    });
    
    customerActions.reverse();
    return `${output.join('\n')}\nTransactions:\n${customerActions.join('\n')}`;
  }
}

let bank = new Bank('SoftUni Bank');
console.log(
  bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 })
);
console.log(
  bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 })
);
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));

// { firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }
// { firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }
// 500$
// 375$
// Bank name: SoftUni Bank
// Customer name: Svetlin Nakov
// Customer ID: 6233267
// Total Money: 375$
// Transactions:
// 3. Svetlin Nakov withdrew 125$!
// 2. Svetlin Nakov made deposit of 250$!
// 1. Svetlin Nakov made deposit of 250$!
