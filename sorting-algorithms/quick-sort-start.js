function quick_sort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;
  let pivot = partition(arr, start, end);
  quick_sort(arr, start, pivot - 1);
  quick_sort(arr, pivot + 1, end);
}

function partition(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let i = start + 1;
  
  for (let j = start + 1; j <= end; j++) {
      if (arr[j] < pivot) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
      }
  }
  [arr[start], arr[i - 1]] = [arr[i - 1], arr[start]];
  return i - 1;
}

let arr = [7, 2, 5, 8, 3];
quick_sort(arr);
console.log(arr);
