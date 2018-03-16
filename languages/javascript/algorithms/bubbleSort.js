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
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
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
