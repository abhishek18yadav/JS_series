function binarySerch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;

    }
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
        return mid;
    }
    else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, left, mid - 1); // Search in the left half
    }
    else {
        return binarySearchRecursive(arr, target, mid + 1, right); //   Search in the right half
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let target = 5;
console.log(binarySerch(arr, target));
console.log(binarySearchRecursive(arr, target));