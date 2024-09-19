// video 49
// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// const myFunc = makeFunc();
// myFunc();



function outer(){
    let name = 'Mohammed';
    function innerOne(){
        console.log(`innerOne function : ${name}`);
    }
    return innerOne;
}
let myFun = outer()
myFun();