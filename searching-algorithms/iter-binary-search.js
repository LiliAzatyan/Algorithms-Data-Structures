function iterBinSearch(array, key) {
  let first = 0;
  let last = array.length - 1;
  let mid = 0;
  while (first <= last) {
      mid = Math.floor((first + last) / 2);
      if (key === array[mid]) {
          return mid;
      } else if (key >= array[mid]) {
          first = mid + 1;
      } else if (key < array[mid]) {
          last = mid - 1;
      }
  }
  return -1;
}
console.log(iterBinSearch([1, 2, 3, 4, 5], 3));
