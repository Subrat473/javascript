// what is a callback function in javascript 
setTimeout(function(){
    console.log("timer");
    
},5000)
function X(y){
    console.log("x");
    y();
}
X(function y(){
    console.log("y");
});