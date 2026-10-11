
// function greet(name) {
//     console.log("Hello, " + name + "!");
//     greet(name);
// }
// greet("Alice");

// function greet(name, times) {
//     if (times == 0) {
//         return;
//     }
//     console.log("Hello, " + name + "!");
//     greet(name, times - 1);
// }
// greet("Alice", 4);

function sum(no, summ) {
    if (no <= 0) {
        console.log("Sum is", summ);
        return 0;
    }
    summ = summ + no;
    return sum(no -1, summ);
}
sum(10, 0);