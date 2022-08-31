function createSortedList() {
  let nums = [];

  const list = {
    add: (num) => {
      nums.push(num);
      sortList(nums);
    },
    remove: (num) => {
      if (num >= 0) {
        nums.splice(num, 1);
        sortList(nums);
      } else {
        return;
      }
    },
    get: (num) => {
      if (nums[num] !== undefined) {
        return nums[num];
      } else {
        return;
      }
    },
    get size() {
      return nums.length;
    },
  };

  function sortList(arr) {
    return arr.sort((a, b) => a - b);
  }
  return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

// output:
// 6;
// 7;
