// const tinderUser = new Object()


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "subrat"
tinderUser.isLoggedIn = false 


// console.log(tinderUser);


const regularUser = {
    email: "subrat44@gmail.com",
    fullname: {
        userfullname: {
            firstname: "subrat",
            lastname: "pathak",
        }
    }
}

//console.log(regularUser.fullname.userfullname.email);


const obj1 = {1:  " a ", 2: " b "}
const obj2 = {2: " a ", 2: " b "}

// const obj5 = {obj1, obj2 }


//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = {
    id : 1,
    email : 
}