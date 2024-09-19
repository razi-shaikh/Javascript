// https://tc39.es/proposal-temporal/docs/index.html
/*
let myDate=new Date()

console.log(`today date is ${myDate.toLocaleDateString()} and the time is ${myDate.toTimeString()}.`);

console.log(myDate.toLocaleString())//25/2/2024, 10:09:41 am

console.log(myDate);//type is object

console.log(myDate.toDateString());//Sun Feb 25 2024

// there is multiple .get**** function are Avaliable
console.log(myDate.getHours());//9
console.log(myDate.getMinutes());//58
console.log(myDate.getSeconds());//5
console.log(myDate.getMilliseconds());//904

console.log(myDate.toISOString());//2024-02-25T04:22:43.769Z

console.log(myDate.toUTCString());//Sun, 25 Feb 2024 04:22:43 GMT

console.log(myDate.toLocaleDateString());//25/02/2024

console.log(myDate.toTimeString());//09:54:05 GMT+0530 (India Standard Time)
*/

/*
// let myCreatedDate=new Date(2003,4,10);
// let myCreatedDate=new Date(2003,4,10,20,12,25);
// let myCreatedDate=new Date("2003-05-10");//we can also declare in yy-mm-dd format
let myCreatedDate=new Date("05-10-2003");//we can also declare in mm-dd--yy format
console.log(myCreatedDate.toDateString());
*/

let myTime=new Date();

console.log(myTime.toLocaleString(
    "default",{
        year:"numeric",
        weekday:"short",//narrow=>s//long=>sunday
        hour:"2-digit",
        minute:"numeric",
        second:"2-digit"
    }
));