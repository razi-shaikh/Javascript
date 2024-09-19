// video 9

// Primitive types data type
// String, Number, Boolean, null, undefiend, Symbol, BigInt

// Reference(Non Primitive) types are
// Array, Objects, Functions

// ******************************************************
// video 10
// Stack(Primitive)
// copy of the original value
let variableOne ="Shaikh";
let variableTwo=variableOne;
variableTwo ="Razi";

console.log(variableOne);
console.log(variableTwo);



// Heap(Non-Primitive)
// reference of the original value
// example 1
/*
let userOne={
    email:"sk@00.com",
    pass:"0000",
};
let userTwo=userOne;
userTwo.email="razi00@google.com"
userTwo.pass="razi00@123456"

console.log(userOne.email);
console.log(userTwo.email);
*/
// example 2
let arrayOne=[1,2,3,4];
let arrayTwo=arrayOne;
arrayTwo[0]=0;
// arrayTwo[0]=[0,0,0,0]//itmeans that inside arrayOne of 00th element will become array
// output: [ [ 0, 0, 0, 0 ], 2, 3, 4 ]
console.log(arrayOne);
console.log(arrayTwo);