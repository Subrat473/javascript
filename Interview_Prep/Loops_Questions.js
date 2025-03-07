// Loops (10 Questions)

// Write a for loop to print numbers from 1 to 50 

for ( var i  = 1; i<50; i++) {
    console.log(i);
    
}

// Use a while loop to sum the numbers from 1 to 10

let a = 1;
let sum = 0;
while (a<11) { sum = sum + a;
    a++;   
}

console.log(sum);

// Create a for...of loop to log each character of the string "JavaScript".

let str = "JavaScript";
for (let character of str) {
    console.log(character);
    
}
// Write a for loop that skips even number between 1 and 20.

for (var i = 1; i<20; i++) {
    if (i%2 !== 0){
        console.log(i);
        
    }
}

// Use a do while loop to log numbers from 5 5o 1

var a = 5;


do{
    console.log(a);
    a--;
}
while (a>0)


// Create a for loop that calculates the factorail of 5

let fact = 1;
for (let i = 5; i > 0; i--) {
    fact = fact*i
}
console.log(fact);


// Write a nested loop to print a 3x3 grid of numbers

var hold = 1;
for (var i = 1; i<4; i++) {
    var str = "";
    for (var j=1; i<4; i++) {
        str += `${hold}`;
    }
    console.log(str);
    
}

// Use a for loop to reverse an array [1,2,3,4].

function reverseArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n / 2; i++) {
      let temp = arr[i];
      arr[i] = arr[n - i - 1];
      arr[n - i - 1] = temp;
    }
  }
  
  const arr = [1, 2, 3, 4];
  reverseArray(arr);
  console.log(arr); // Output: [4, 3, 2, 1]

// Write a while loop that logs numvers from 1 to 100 divisible by 5.

let num = 1;
while(num <101){
    if(num%5 === 0) console.log(num);
    num++;
}

// Use a for...in loop to iterate over an object and log its keys.


var obj = {
    name: "a",
    email: "a@example.com",
    age: 26
}

for(let key in obj){
    console.log(key);
    
}