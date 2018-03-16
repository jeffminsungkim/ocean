const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let prev = i - 1;
    let temp = arr[i];
    while (prev >= 0 && arr[prev] > temp) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = temp;
  }
  return arr;
};

const arr = [4, 88, 8, 1, 12];
console.log(insertionSort(arr));
