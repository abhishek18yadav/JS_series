async function wakeup() {
    console.log("Good morning!");
}
async function openLaptop() {
    console.log("Opening the laptop...");
}
async function openEditor() {
    console.log("Opening the editor...");
}
async function startCoding() {
    console.log("Start coding...");
}
async function Routine() {
    try {
        await wakeup();
        await openLaptop();
        await openEditor();
        await startCoding();
    } catch (err) {
        console.log("ERROR:", err.message);
    }
}
Routine();