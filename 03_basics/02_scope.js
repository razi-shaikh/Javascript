// video 22
console.log(addOne(5));//addOne() this function is accessiable in above line
function addOne(num){
    return num+1;
}

console.log(addTwo(5));//addTwo() this function is not accessiable in above line
let addTwo=function(num){
    return num+2;
}
console.log(addTwo(5));
