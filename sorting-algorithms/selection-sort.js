function selectionSort(array) {
  let tmp = null;
  for (let i = 0; i < array.length - 1; ++i) {
      tmp = i;
      for (let j = i + 1; j < array.length; ++j) {
          if (array[j] < array[tmp]) {
              tmp = j;
          }
      }
      [array[i], array[tmp]] = [array[tmp], array[i]];
  }
  return array;
}
console.log(selectionSort([5, 1, 2, 4, 0]));
