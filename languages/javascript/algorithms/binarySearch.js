const binarySearch = (sortedArr, targetValue) => {
  let start = 0;
  let end = sortedArr.length - 1;

  while (start <= end) {
    const pos = findMiddle(start, end);
    const middleValue = sortedArr[pos];

    if (middleValue === targetValue) return pos;
    else if (middleValue < targetValue) start = pos + 1;
    else end = pos - 1;
  }
  return -1;
};

const findMiddle = (start, end) => start + Math.floor((end - start) / 2);

const arr = [3, 5, 10, 42, 99, 241, 323, 1100, 8888];
console.log(binarySearch(arr, 5) === 1);
console.log(binarySearch(arr, 10) === 2);
console.log(binarySearch(arr, 241) === 5);
console.log(binarySearch(arr, 1100) === 7);
console.log(binarySearch(arr, 9999) === -1);
