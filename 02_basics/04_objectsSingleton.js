// there are two types of objects
// 1.singleton
// 1.a.constructor
// 2.object literals

// singleton object declaration
// const  tinderUser = new Object()//singleton object
const tinderUser={
    userName : "Razi9913",
    1:"one",
    2:"two",
}//non singleton object
tinderUser.id=55536;
tinderUser.isLoggedIn = false;
console.log(tinderUser);

console.log(Object.keys(tinderUser))//printing all keys in array
console.log(Object.values(tinderUser))//printing all value in array
console.log(Object.entries(tinderUser))//printing all key and value pair in array
console.log(tinderUser.hasOwnProperty("userName"))//its check that key is present or not in object


/*
// nested object
let reddit={
    email:"temp89@goen.ic",
    fullNmae:{
        lastName:"Shaikh",
        userFullName:{
            firstName:"Razi",
            middleName:"Ahmed",
        }
    }
}
// accessing nested object
console.log(reddit.email);
console.log(reddit.fullNmae.lastName);
console.log(reddit.fullNmae.userFullName.firstName);
console.log(reddit.fullNmae.userFullName.middleName);
console.log(reddit);*/

/*
// concatination of two object
console.log("concatination of two object ")
obj1={1:"one",2:"two"};
obj2={3:"three",4:"four"};
// obj3=Object.assign({},obj1,obj2);//Object.assign(,obj1,obj2)
obj3={...obj1,...obj2};
console.log(obj3)
*/

/*
// array of objects
arrayObject=[
    {
        userId:"erjhfi",
        userName:"nj5usw",
    },
    {
        emailId:"rklvbj@dvjb.cndj",
        password:"4846535",
    },
    // we make multiple objects
]
console.log(arrayObject[0].userId)
console.log(arrayObject[1].emailId)*/