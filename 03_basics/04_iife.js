// basic function
function firstFunction(){
    console.log("This is basic function");
}
firstFunction();

// Immediately invoke function expression (iife)
// named iife function
(function namedIifeFunction(){
    console.log("This is named iife function");
    console.log("DataBase connected");
})();//";" <- for ending the iife function semicolon symbol is compulsory
// if we not use semicolom symbol second iife function will not run or call

// arrow iife function
// in iife function we can also write arrow function
( () => {
    console.log("This is arrow iife function");
    console.log("DataBase connected with arrow function");
})();

// in iifi function we can give parameter and arguments
( (name) => {
    console.log(`My name is ${name}`);
    console.log("DataBase connected with paremeter and argument");
})("Razi Shaikh");

// iifi function with return statement
let value=( (num1,num2) => {
    console.log("DataBase connected with return statement");
    return num1+num2+3;
})(5,9);
console.log(value);