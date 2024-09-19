// object declaration
const newObject = new Object({
    'IN':'India',
    'USA':'United State of America',
    'FA':'France',
    'UK':'United Kingdom',
    'UAE':'United Arab Emirates',
});
// printing object
// console.log(newObject);

for (const objKey in newObject) {
    // console.log(objKey);
    // console.log(`'${objKey}'   : '${newObject[objKey]}'`);
}

// forin loop in array
let arrayValue=['One','two','three','four','five']
for (const arr in arrayValue) {
    // console.log(arr);//Its print the index of array not a value
    // console.log(`Value is ${arrayValue[arr]}`);//its print the value of array not a index
}

// map declaration
const mapVariable = new Map();
mapVariable.set('IN','India')
mapVariable.set('USA','United State of America')
mapVariable.set('FA','France')
mapVariable.set('UK','United Kingdom')
mapVariable.set('UAE','United Arab Emirates')
// printing map
// console.log(mapVariable);
for (const [key,value] in mapVariable) {
    console.log([key,value]);
}