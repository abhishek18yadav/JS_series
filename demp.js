function wakeup(openLaptop) {
    console.log("Good morning!");
    openLaptop(openEditor);

}
function openLaptop(openEditor) {
    console.log("Opening the laptop...");
    openEditor(startCoding);
}
function openEditor(startCoding) {
    console.log("Opening the editor...");
    startCoding();
}
function startCoding() {
    console.log("Start coding...");
}
wakeup(openLaptop);