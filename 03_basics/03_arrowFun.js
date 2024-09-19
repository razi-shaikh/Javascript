// video 23
// create an object called user with some properties
let user={
    userName:"Shaikh Razi", // the name of the user
    standard:15, // the standard of the user
    fees:44000, // the fees of the user
    welcomeMessage:function(){ // a function that shows a message to the user
        console.log(`${this.userName} , Welcome Back into your coding journey.`); // print the message with the user name
        console.log(this); // print the user object
    }
}
user.welcomeMessage(); // call the welcomeMessage function for the user
user.userName="Anuj Tiwari" // change the user name to Anuj Tiwari
user.welcomeMessage(); // call the welcomeMessage function again for the new user name
console.log(this); // print the global object (window)

// create a function called facebook
function facebook(){
    let facebookFriend="Ayyub Shaikh"; // create a variable for the facebook friend name
    console.log(this); // print the global object (window) because this is a normal function
    console.log(this.facebookFriend); // print undefined because there is no facebookFriend property in the global object
}
facebook(); // call the facebook function

// create a function called friendOne using the function keyword
const friendOne = function(){
    let friendName="Malik Shaikh"; // create a variable for the friend name
    console.log(this); // print the global object (window) because this is a normal function
    console.log(this.friendName); // print undefined because there is no friendName property in the global object
}
friendOne(); // call the friendOne function

// create a function called friendTwo using the arrow syntax
const friendTwo = () => {
    let friendName="Wasim Sayyed"; // create a variable for the friend name
    console.log(this); // print the global object (window) because arrow functions do not have their own this
    console.log(this.friendName); // print undefined because there is no friendName property in the global object
}
friendTwo(); // call the friendTwo function

// create a function called addingNum that takes two numbers and returns their sum
const addingNum = (num1,num2) => {
    // console.log(num1+num2); // this line is commented out, so it will not run
    return num1+num2; // return the sum of the two numbers
}
console.log(addingNum(3,6)); // print the result of calling the addingNum function with 3 and 6

// create a function called addingOne that takes two numbers and returns their sum plus one
const addingOne = (num1,num2) => num1+num2+1 // this is a shorter way of writing a function that has only one line
console.log(addingOne(4,7)); // print the result of calling the addingOne function with 4 and 7

// create a function called addingTwo that takes two numbers and returns their sum plus two
const addingTwo = (num1,num2) => (num1+num2+2) // this is another way of writing a function that has only one line, using parentheses
console.log(addingTwo(6,9)); // print the result of calling the addingTwo function with 6 and 9

// create a function called returnObject that returns an object with a userName property
const returnObject = () => ({
    userName : "Zuber Shaikh", // the userName property of the object
})
console.log(returnObject()); // print the result of calling the returnObject function
