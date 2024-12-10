function binarySearchRecursive(array, element, first, last) {
  let mid = 0;
  while (first <= last) {
      mid = Math.floor((first + last) / 2);
      if (element === array[mid]) {
          return mid;
      } else if (element >= array[mid]) {
          return binarySearchRecursive(array, element, mid + 1, last);
      } else {
          return binarySearchRecursive(array, element, first, mid - 1);
      }
  }
  return -1;
}
const arr = [1, 2, 8, 10]
console.log(binarySearchRecursive(arr, 1, 0, arr.length - 1));
