const linearSearch = (arr, value) => {
  for (let i in arr) if (arr[i] === value) return Number(i);
  return -1;
};

const arr = [40, 23, 99, 100, 888];

console.log(linearSearch(arr, 23) === 1);
console.log(linearSearch(arr, 99) === 2);
console.log(linearSearch(arr, 100) === 3);
console.log(linearSearch(arr, 888) === 4);
console.log(linearSearch(arr, 3) === -1);
