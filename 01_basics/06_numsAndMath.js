/*
// ********************number******************
const score=400
console.log(score);
const balance=new Number(100)
console.log(balance);
console.log(balance.toString());
// toFixed() example 100.00
console.log(balance.toFixed(2));
// 
const amount = 1000000
// toLocaleString is return string
console.log(typeof (amount.toLocaleString()));
// output toLocaleString() is 10,00,000
// console.log(amount.toLocaleString("en-IN"));
*/
// ******************maths***********************
/*
const m1=Math.PI;
console.log(m1.toFixed(5));
const m2=615.566
// abs convert negative to positive number but positive will be positive
console.log(-m2);
console.log(Math.abs(-m2));
console.log(Math.round(m2));
console.log(Math.floor(m2));
console.log(Math.ceil(m2));
*/
// *****************random*************************
// random function give value between 0 to 1
// ex: 0.561252,0.0482256
console.log(Math.random());
// its give number between 1 to 10
console.log((Math.random()*10)+1);
// random value in 2 range ex 11 to 17
const min=11,max=17;
console.log(Math.floor(Math.random()*(max-min+1)+min));
