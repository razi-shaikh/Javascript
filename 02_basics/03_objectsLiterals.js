// there are two types of objects
// 1.singleton
// 2.object literals

// literals
let user={
    name:"Razi",
    "full name":"Shaikh Razi Ahmed",
    age:20,
    location:"Mumbai",
    result:67.85,
    nameFunctionOne:function(){
        console.log("Hiiii, Shaikh Razi Ahmed")//printing the full name
    }
};

user.nameFunctionTwo=function(){
    console.log(`This is the Function : ${this["full name"]}`)//Printing yhe full name using key of the object
}
console.log(user)
// calling the function
user.nameFunctionOne();
user.nameFunctionTwo();

/*

// we also add element outside of object scope
user.passFail=false

// easy way to call literals
console.log(user.passFail);

// we canot access full name key without using square bracket
console.log(user["full name"]);

// we can also change value of key
user.name="Shaaaaaaaaaaaaaikh"//changeing the value
console.log(user.name);

// we also stope the changes it means that after this we cannot change the value of any object
Object.freeze(user)

user.name="Razi"//trying to change the value
console.log(user.name);
user.age=25//2nd try to change the value
console.log(user.age)
*/