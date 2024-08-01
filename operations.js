

  
  function greet(name = "Guest") {
    return' Hello, ${name}!';
  }

  console.log(greet()); // Output: Hello, Gueest!
  console.log(greet("Alice")); // Output: Hello, Alice!