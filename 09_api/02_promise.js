/*
const promiseOne = new Promise(function (resolve,reject) {
    // Do an async task
    // DB calls,Cryptography,Network
    setTimeout(() => {
        console.log('Async is Complete');
        resolve()
    }, 1000);
})
promiseOne.then(()=>{
    console.log('Promise Complete Successful');
})
// 2nd
new Promise(function (resolve,reject) {
    setTimeout(function (){
        console.log('Async Task 2');
        resolve()
    },1000)
}).then(function () {
    console.log('Async 2 resolved');
})
// 3rd
const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function(){
        resolve({
            userName:'Razi9913',
            password:'123654'
        })
    },1000)
})
promiseThree.then(function(userDetail){
    console.log(userDetail);
})
// 4th
const promiseFour = new Promise(function (resolve,reject){
    setTimeout(function(){
        const error = true;
        if(!error){
            resolve({
                userEmail:'tempmail@example.com',
                password:'87654321',
            })
        }else{
            reject('Error : Something went wrong');
        }
    },1000)
})
promiseFour.then(function (user) {
    console.log(user);
    return user.userEmail;
}).then((returnEmail)=>{
    console.log(returnEmail);
}).catch(function (error){
    console.log(error);
}).finally(function () {
    console.log('The promise is resolved or not resolved ');
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const error = false;
        if(!error){
            resolve({
                subject:'javaScript@example.com',
                password:'87654321',
            })
        }else{
            reject('Error : JavaScript went wrong');
        }
    },1000)
})

async function promiseFiveAsync(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
promiseFiveAsync()
*/
// async function githubUser() {
//     console.log('API request');
//     try{
//         url='https://api.github.com/users/Razi9913'
//         const response = await fetch(url)//'https://randomuser.me/api/'
//         const data = await response.json()//before converting typeof is object
//         console.log(data);
//     }catch(error){
//         console.log(`ERROR : ${error}`);
//     }
// }
// githubUser();

fetch('https://randomuser.me/api/').then((user)=>{
    console.log(user);
}).catch((error) =>{
    console.log(`ERROR : ${error}`);
})