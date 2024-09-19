// symbol
// symbol is used for hide the key but the value of key

let email=Symbol('contact');
let userData={
    name:"Razi",
    "full name":"Shaikh Razi Ahmed",
    [email]:"razi@gmail.com",//square bracket is compulsory for creating object
    age:20,
    location:"Mumbai",
    result:67.85,
    passFail:true,
};
console.log(userData[email])
console.log(userData)
userData[email]="change@email.com"
console.log(userData)