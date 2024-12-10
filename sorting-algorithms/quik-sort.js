function quikSort(array) {
  if (array.length <= 1) {
      return array;
  }
  const pivot = array[Math.floor(array.length / 2)];
  const left = [];
  const right = [];
  for (let i = 0; i < array.length; ++i) {
      if (array[i] < pivot) {
          left.push(array[i]);
      } else if(array[i] > pivot) {
          right.push(array[i]);
      }
  }
  return [...quikSort(left), pivot, ...quikSort(right)];
}
console.log(quikSort([1, 5, -6, 8, 3, 4]));
