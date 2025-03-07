// Array (10 Qusetions )

// Create an array of your top 5 favorite movies and log it.

var a = ["a","b","c","d","e","f"];
Array.forEach(function(value){
    console.log(value);  

})


// Find and log the second element of an array.

var arr = [1,2,3,4];
console.log(arr[1]);


// Add two new elements to the start of an array using .unshift().

var arr = [1,2,3,4,5];

arr.unshift(0);
arr.unshift(-1);


// Remove the last element of an array and log the updated array.

var arr = [1,2,3,4,5];
arr.pop()
console.log(arr);

// Use .slice() to extract the first three elements of an array.

var arr = [1,2,3,4,5];
console.log(arr.slice(0, 3));

// Find the index of a specific element in an array using .indexof ().

var arr = [1,2,3,4,5];
console.log(arr.indexOf(4));

// Check if a value exists in an array using .includes().


var arr = [1,2,3,4,5];
console.log(arr.includes(12));

// Combineg two arrays [1,2] and [3,4] using .concat().

var arr = [1,2,3,4,5];
var arr2 = [5,6,7];

console.log(arr.concat(arr2));


// Sort an array of numbers [5,2,9,1] in ascending order.

var arr = [11,24,36,4,5];
for (var i = 0; i<arr.length-1; i++){
    if(arr[i] > arr[i+1]){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}

console.log(arr);

// write a program that creates a copy of an array without mutating the original. 


var arr = [11, 24, 36, 4, 5];
var arr2 [];

arr.forEach(function(value) {
    arr2.push(value);
});

arr2.pop();

console.log(arr, arr2);
