const arr = [];
const pushRandomNumbers = () => {
  let idx = 1;
  while (idx <= 100000) {
    arr.push(Math.floor(Math.random() * 1000) + 1);
    idx++;
  }
  return arr;
};

const selectionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const testSelectionSortExecTime = () => {
  console.log('START selectionSort()');
  console.time('selectionSort');
  selectionSort(arr);
  console.timeEnd('selectionSort');
};

pushRandomNumbers();
testSelectionSortExecTime();
