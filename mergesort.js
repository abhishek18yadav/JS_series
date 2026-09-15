
function divide(arr) {
    if (arr.length == 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    divide(left);
    divide(right);
    merge(arr,left , right);
}
function merge(arr, left, right) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            arr[k] = left[i];
            k++;
            i++;
        }
        if(left[i] > right[j]) {
            arr[k] = right[j];
            k++;
            j++;
        }
    }
    while (i < left.length) {
        arr[k] = left[i];
        k++;
        i++;
    }
    while(j < right.length) {
        arr[k] = right[j];
        k++;
        j++;
    }
    return arr;
}
let arr = [32, 45,67, 23, 1, 4, 5, 6, 7, 8, 9];
divide(arr);
console.log(arr);