let myNums=[1,2,3,4];
let myTotal,val=2;


// myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
//     }, val)
// console.log(myTotal);


// myTotal = myNums.reduce((acc, currval) => (acc + currval, val))
myTotal = myNums.reduce((acc, currval) => acc + currval, val)
// console.log(myTotal);


let shoppingCart = [
    {item:"js course", price:999},
    {item:"java course", price:199},
    {item:"py course", price:299},
    {item:"c++ course", price:399},
    {item:"c# course", price:499},
]

let cartPrice=shoppingCart.reduce((accumulator,itemValue
    ) => {
    return accumulator+itemValue.price;
},0);
console.log(cartPrice);