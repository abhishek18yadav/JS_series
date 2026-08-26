let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr[0] = 11;
// console.log(arr[0]);
// push
arr.push("banana");
console.log(arr);
arr.unshift("apple");
// [apple, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, banana]
// pop
arr.pop();
console.log(arr);
// [apple, 11, 2, 3, 4, 5, 6, 7, 8, 9]
arr.shift();
// [11,2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr);
// slice
let arr2 = arr.slice(1, 4);
console.log(arr2);
// [2, 3, 4]
// splice
arr2.splice(1, 4);
console.log(arr2);
// [2]
arr2.splice(1, 0, "banana", "apple", 3, 4);
console.log(arr2);
// [2, banana, apple, 3, 4]

