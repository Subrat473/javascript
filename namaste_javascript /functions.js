a();
b();

// function statement aka function declaration
function a (){
    console.log("a called");
}

// funcrion expression 
var b = function (){
    console.log("b called");
}

// anonymous function 
//function (){

//}


// named function ecpression

var b = function xyz (){
    console.log(xyz);
    
}
xyz();


// difference between parameters & arguments ?

var b = function (param1, param2){
    console.log("b is called");
}

a();
b(1,2);


// first class functions - Ability to used like values 
// first class citizens 
var b = function (param1){
    return function xyz() {

    }
}
console.log(b());



// Arrow Functions 