function quick_sort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;
  let pivot = randomized_partition(arr, start, end);
  quick_sort(arr, start, pivot - 1);
  quick_sort(arr, pivot + 1, end);
}

function randomized_partition(arr, start = 0, end = arr.length - 1) {
  let randomIndex = Math.floor(Math.random() * (end - start + 1)) + start;
  [arr[randomIndex], arr[end]] = [arr[end], arr[randomIndex]];
  
  let pivot = arr[end];
  let i = start - 1;
  
  for (let j = start; j < end; j++) {
      if (arr[j] < pivot) {
          i++;
          [arr[j], arr[i]] = [arr[i], arr[j]];
      }
  }
  i++;
  [arr[i], arr[end]] = [arr[end], arr[i]]
  return i;
}

let arr = [7, 2, 5, 8, 3];
quick_sort(arr);
console.log(arr);
