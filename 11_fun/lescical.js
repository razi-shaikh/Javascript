// video 49
// function init() {
//     let name = "Mozilla"; 
//     function displayName() {
//         console.log(name); 
//     }
//     displayName();
// }
// init();

function outer(){
    let name = 'Mohammed';
    function innerOne(){
        console.log(`innerOne function : ${name}`);
    }
    function innerTwo(){
        console.log(`innerTwo function : ${name}`);
    }
    innerOne()
    innerTwo()
}
outer()
// console.log("TOO OUTER", name);