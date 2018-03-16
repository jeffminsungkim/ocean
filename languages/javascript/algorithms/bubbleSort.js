const arr = [];
const pushRandomNumbers = () => {
  let idx = 1;
  while (idx <= 10000) {
    arr.push(Math.floor(Math.random() * 1000) + 1);
    idx++;
  }
  return arr;
};

const bubbleSort = (arr) => {
	const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len - i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const testMyBubbleSortExecTime = () => {
  console.log('START bubbleSort()');
  console.time('bubbleSort');
  bubbleSort(arr);
  console.timeEnd('bubbleSort');
};

pushRandomNumbers();
testMyBubbleSortExecTime();
