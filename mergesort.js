function divide(arr , low = 0 , high = arr.length - 1) {
    if(low >= high) {
        return arr;
    }
    let mid = Math.floor((low + high) / 2);
    
    divide(arr , low, mid);
    divide(arr, mid+1, high);
    return merge(arr, low, mid, high);
}
function merge(arr, low, mid, high) {
    let left = arr.slice(low, mid + 1);
    let right = arr.slice(mid + 1, high + 1);
    let i = 0, j = 0, k = low;
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            arr[ k] = left[i];
            i++;
            k++;
        } else {
            arr[k] = right[j];
            j++;
            k++;
        }
        
    }
    while(i < left.length) {
        arr[ k] = left[i];
        i++;
        k++;
    }
    while(j < right.length) {
        arr[ k] = right[j];
        j++;
        k++;
    }
    return arr;         
}
let arr = [3, 6, 8, 1, 2, 5, 4, 7];
console.log(divide(arr));