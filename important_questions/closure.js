// a closure is a function that retains access to its lexical (outer) scope even after the outer function has finished executing. This means the inner function "remembers" the environment in which it was created, including any variables, functions, or parameters from that environment.//



function createCounter() {
    let count = 0; // `count` is enclosed by the inner function
    return function() {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3