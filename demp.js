function wakeup(openLaptop) {
    console.log("Good morning!");
    if (error) {
        
    }
    openLaptop(openEditor);

}
function openLaptop(openEditor) {
    console.log("Opening the laptop...");
    if(error) {
        
    }
    openEditor(startCoding);
}
function openEditor(startCoding) {
    console.log("Opening the editor...");
    if (error) {
        
    }
    startCoding();
}
function startCoding() {
    console.log("Start coding...");
    if (error) {
        
    }
}
wakeup(openLaptop);


 wakeup( () => {
    openLaptop( () => {
        openEditor(() => {
            startCoding() = {
                
            }
        })
     })
 })