// forof loop example

// loop in string
let stringValue="Shaikh Razi";
for (const str of stringValue) {
    // console.log(`Value is ${str}`);
}

// forof loop in array
let arrayValue=[1,2,3,4,5]
for (const arr of arrayValue) {
    // console.log(`Value is ${arr}`);
}

// loop in maps
// map declaration
const mapVariable = new Map();
mapVariable.set('IN','India')
mapVariable.set('USA','United State of America')
mapVariable.set('FA','France')
mapVariable.set('UK','United Kingdom')
mapVariable.set('UAE','United Arab Emirates')
// printing map
// console.log(mapVariable);

// printing map using forof loop
for (const [mapKey,mapValue] of mapVariable) {
    // console.log([mapKey,mapValue]);
}

// forof loop is not workable with object
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

// try to printing object using forof loop
for (const [key,value] of newObject) {
    console.log([key,value]);//object is not iterable like this
}