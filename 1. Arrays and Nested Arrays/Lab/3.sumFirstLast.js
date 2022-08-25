function sumFirstLast(arr) {
  const firstNum = Number(arr[0]);
  const lastNum = Number(arr[arr.length - 1]);
  const result = firstNum + lastNum;
  console.log(result);
}

sumFirstLast(['20', '30', '40']);
