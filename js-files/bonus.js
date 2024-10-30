'use strict'


//____________________function return object with 3 methods inc resrt and dec ___________________________________________________________
function createCounter(init) {
  let count = init;

  return {
    increment: () => ++count,
    reset: () => (count = init),
    decrement: () => --count,
  };
}
//______________--func check for init and calls array range and reterned array with equevelant func returnd
function runCounter(init, calls) {

  if (init >= -1000 && init <= 1000 && calls.length >= 0 && calls.length <= 1000) {
    const counter = createCounter(init);
    return calls.map((call) => counter[call]());
  } else {
    return "Invalid input\n -1000 <= init <= 1000 \n 0 <= calls.length <= 1000\ncalls[i] is one of increment, decrement and reset";
}

}

// Example usage:
const init = 5;
//calls[i] is one of "increment", "decrement" and "reset"
const calls = ["increment", "reset", "decrement"];
console.log(runCounter(init, calls)); // Output: [6, 5, 4]
//____________________________________________________________________________________________________