// video 47
// console.log(Math.PI);//default value is not changable
// console.log(Math);//typeof is object
const propertyDescriptor = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(propertyDescriptor);//propertyDescriptor is writable: false,enumerable: false,configurable: false


const myObject = {
    name : 'Razi Shaikh',
    gender : 'Male',
    age:'20'
}

// console.log(Object.getOwnPropertyDescriptor(myObject,'gender'));//propertyDescriptor is writable: true, enumerable: true, configurable: true

myObject.gender='female'
// console.log(myObject);

// Object is itterable
console.log('Object is itterable');
for (const [key,value] of Object.entries(myObject)) {
    console.log(`${key} : ${value}`);
}



Object.defineProperty(myObject,'gender',{//for single key of any object
    writable: false,
    enumerable: false,
    configurable: false
})
Object.defineProperties(myObject,{
    name:{
        writable: false,
        enumerable: false,
        configurable: false
    },
    age:{
        writable: true,
        enumerable: true,
        configurable: false
    }
})
console.log(Object.getOwnPropertyDescriptor(myObject,'gender'));
// myObject.gender='male'//unable to change value
console.log(myObject);
console.log('Object is now not-itterable');
for (const [key,value] of Object.entries(myObject)) {
    console.log(`${key} : ${value}`);
}
myObject.age=21;
console.log(myObject.age);