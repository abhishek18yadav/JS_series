function wakeup() {
  return new Promise((resolve, reject) => {
    console.log("Good morning!");
    resolve();
  });
}
function openLaptop() {
  return new Promise((resolve, reject) => {
    console.log("Opening the laptop...");
    resolve();
  });
}
function openEditor() {
  return new Promise((resolve, reject) => {
    console.log("Opening the editor...");
    resolve();
  });
}
function startCoding() {
  console.log("Start coding...");
}

wakeup()
  .then(openLaptop)
  .then(openEditor)
  .then(startCoding)
  .catch((err) => {
    console.log("ERROR:", err.message);
  })
  .finally(() => {
    console.log("Good night!");
  });
