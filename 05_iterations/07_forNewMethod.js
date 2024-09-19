let myNumber = [1,2,3,4,5,6,7,8,9,0];
let newNums;

// newNums=myNumber.map((nums) => (nums+11))
// console.log(newNums);

newNums = myNumber
.map((num) => num * 10 )
.map( (num) => num + 1)
.filter( (num) => num >= 40)
console.log(newNums);