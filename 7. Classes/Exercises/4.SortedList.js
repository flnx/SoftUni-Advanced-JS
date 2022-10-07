class List {
  constructor() {
    this.numList = [];
    this.size = 0;
  }

  add(num) {
    this.numList.push(num);
    this.size++;
    this.numList.sort((a, b) => a - b);
  }
  
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error ('Invalid Index Position')
    }
    this.numList.splice(index, 1);
    this.size--;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error ('Invalid Index Position')
    }
    return this.numList[index];
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
// output: 6
// output: 7