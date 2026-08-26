
function createGameCounter(playerName) {
  let score = 0; 

  
  return function () {
    score += 1; 
    console.log(`${playerName} score is now: ${score}`);
  };
}


const marioCounter = createGameCounter("Mario");
const luigiCounter = createGameCounter("Luigi");


marioCounter(); 
marioCounter();

luigiCounter(); 
marioCounter(); 
// line (let score = 0;) only runs once when you create the counter. It does not run again when you call the counter.
// const marioCounter = createGameCounter("Mario");
//JavaScript goes inside createGameCounter.It creates the variable score and sets it to 0. (This is the only time this line ever runs!)It creates the inner function.It hands that inner function over to marioCounter.The createGameCounter function finishes and closes up shop.
// Step 2: The Execution Phase (Line 2 runs)Now, look closely at what marioCounter actually holds. It doesn't hold createGameCounter. It holds only the inner return function.

// The Behind - the - Scenes Mechanics
// step: 1. The Call Stack deletes the function, but Memory keeps the variables.When the outer function finishes running, it is popped off the Call Stack(the engine's immediate to-do list). However, the variables don't live on the stack; they live in a memory space called the Heap
// .2.Every function has a hidden link: [[Environment]]When the inner function is born, the JavaScript engine assigns a secret, internal property to it called[[Environment]].This property points directly to the outer function's variable room (its Lexical Environment).3. The Garbage Collector is blockedJavaScript has an automatic cleaning crew called the Garbage Collector. Its job is to delete things from memory that are no longer being used.Because your inner function variable (like marioCounter) is still alive, and...marioCounter points to the inner function, and...The inner function points to the outer scope via [[Environment]] [1]...The Garbage Collector sees a clear chain of active connections and says: "Do not delete this score variable, it is still needed!"