// Functions (10 Questions) 

// Write a function to check if a number is even or odd.

function evod (value){
    if(value%2 === 0) return "even";
    else return "odd";
}

console.log(evod(13));

// Create a function to calculate the area of a circle with a given radius.
function area(r) {
    return Math.PI * r * r;
}
console.log(area(12));

// Write a function that accepts an array and returns the sum of its elements.

function sumofarr(arr){
    var sum = 0;
    arr.forEach(function(v){
        sum = sum + v;
    })
    return sum;
}

console.log(sumofarr([1,2,3,4,5,6,7,8,9,10]));

// create a function that checks if a string atarts with a specific character. 

function checker(str, char){
    return str.startswith(char);
}
console.log(checker("Harsh", 'h'));

// Write a function to find the maximum of two numbers.

fumction max (a,b) {
    if (a>b) return a;
    else if(a<b) return b;
    else reteun "equals";
}

console.log(max(11,2));


// Create a function which takes a number and retuns its factorial.

function getFact(num){
    let fct =1;
    for(var i = 1; i<=num; i++) {
        fct = fct * 1;
    }
    return fct;
}

console.log(getFact(5));


// write a function that accepts a string and returns its reverse.

function abcd(value) {
    return value.split('').reverse().join('');
}
console.log(abcd("adkaa,"));



// create a function to find the largest number in an array.

function abcd (arr) {
    var max = 0;
    for(var i = 0; i <arr.length; i++) {
        if(arr[i] > arr[max]){
            max = i;
        }
    }
    return arr[max];
}

console.log(abcd([1,2,3,4,5,6,7]));


// write a function that converts a string to a kevab-case (e.g )

function kebab(str){
    return str.replaceAll("", "-");
}

console.log(kebab("hey kaise ho"));

// create a function that logs hello world every time it's called.

function abcd() {
    console.log("hello world!");
    
}
abcd();
abcd();
abcd();