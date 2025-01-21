const userEmail = "h@itesh.ai"

if (userEmail) {
    console.log("got user email");
    
} else {
    console.log("Don't have user Email");
    
}
// falsy value 

//false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy value 

// "0", "false", "", [], {}, function() {}

// Nullish coalescing operator (??): null undefined


let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);

// terniary operator 

condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


