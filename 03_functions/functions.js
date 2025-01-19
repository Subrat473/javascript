


//function sayMyName(){

  //  console.log("s");
    //console.log("u");
    //console.log("b");
   // console.log("r");
    //console.log("a");
    //console.log("t");


//}

//sayMyName()


function addTwoNumbers (number1, number2){
   // let result = number1 + number2 
    //return result
    return number1 + number2
    
}

const result = addTwoNumbers(3, 5)

//console.log("Result:", result);



function loginUserMessage (username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return '${username} just logged in'
}
//console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage());



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500))


const user = {
    username : "hitesh",
    price:199
}

function handleObject(anyobject){
    console.log('username is ${anyobject.username} and price is ${anyobject.price}')
}
//handleObject(user)

const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
