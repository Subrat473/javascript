// What is a Closure in JavaScript? Provide an example.

// A Closure is a feature where an inner function has access to the outer (enclosing) function's variables.

// Example 

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);

        console.log('Inner Variable: ' + innerVariable);
        
        
    }
}

const newFunction = outerFunction('outside');

newFunction('inside');

