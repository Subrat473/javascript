const arr = [5, 1, 3, 2, 6];

// filter all the odd values 


function isOdd(x){
    return x % 2;
}

const output = arr.filter(isOdd);

console.log(output);


// find the even 

function isEven(x){
    return x % 2 === 0;
}

const output =arr.filter(isEven);


console.log(output);

// greater than 4 

const output = arr.filter((x) => 4);

console.log(output);

// less than 3 

const output = arr.filter((x) => x < 3);

console.log(output);

