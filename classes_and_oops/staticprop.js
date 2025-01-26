class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`);
        
    }
    static createId(){
        return`123`
    }
}
const hitesh = new User ("hitesh")
console.log(hitesh.createId());


class teacher extends User {
    constructor(username, email){
        this.email = email
    }
}


const iphone = new teacher("iphone", "i@phone.com")
console.log(iphone.createId());
