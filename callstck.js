let name = "Victor";

function first() {
  let a = "Hi!";
  second();
  console.log(a + name);
}

function second() {
  let b = "Hey!";
  third();
  console.log(b + name);
}

function third() {
  let c = "Hello!";
  console.log(c + name);
}

first();
