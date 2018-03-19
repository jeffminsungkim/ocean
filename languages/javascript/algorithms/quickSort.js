const quickSort = (arr, start = 0, end = arr.length - 1) => {

  if (arr.length > 1) {
    let index = sortIndex(arr, start, end);
    if (start < index - 1) sortIndex(arr, start, index - 1);
    if (index < end) sortIndex(arr, index, end);
  }
  return arr;
};

const sortIndex = (arr, left, right) => {
  const pivotVal = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (arr[left] < pivotVal) left++;
    while (arr[right] > pivotVal) right--;

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
};

const swap = (arr, leftIndex, rightIndex) => {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
};
