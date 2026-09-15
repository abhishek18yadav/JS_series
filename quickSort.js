function quicksort(arr, low, high) {
  let i = low;
  let pivotele = arr[high];
  for (let j = low; j < high; j++) {
    if (arr[j] < pivotele) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }
  let temp = arr[i];
  arr[i] = arr[high];
  arr[high] = temp;
  return i;
}

function divide(arr, low = 0, high = arr.length - 1) {
  if(low >= high){
      return arr;
    }
    let pivotIndex = quicksort(arr, low, high);
    divide(arr, low, pivotIndex - 1);
    divide(arr, pivotIndex + 1, high);
    return arr;
}
let arr = [3, 6, 8, 1, 2, 5, 4, 7];
console.log(divide(arr));
