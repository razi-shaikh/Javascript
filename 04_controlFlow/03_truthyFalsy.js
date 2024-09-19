const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined
// This operator returns the left operand if it is not null or undefined, otherwise it returns the right operand
console.log("Nullish Coalescing Operator (??)");
let variable1;
variable1 = 15 ?? 25; // variable1 is assigned 15, because 15 is not null or undefined
console.log(variable1); // prints 15
variable1 = null ?? 25; // variable1 is assigned 25, because null is null
console.log(variable1); // prints 25
variable1 = undefined ?? 35; // variable1 is assigned 35, because undefined is undefined
console.log(variable1); // prints 35



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")