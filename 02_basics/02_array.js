const marvelHero=['ironMan','spiderMan','thor','blackPanther']
const dcHero=['superMan','batMan','flash']
/*
// push function
marvelHero.push(dcHero);//push add new array at the end of the array
console.log(marvelHero);
console.log(marvelHero[4]);
console.log(marvelHero[4][2]);
*/

/*
// concat is used for concatination of array
let allHero = marvelHero.concat(dcHero)
console.log(allHero);
*/

/*
// spread operator
let allNewHero =[...marvelHero,...dcHero]
console.log(allNewHero);
*/

/*
// flat//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArr = [1,2,3,[4,5],[6,[7,8],9],0]// nested array
console.log(nestedArr.flat(Infinity));
*/

/*
console.log(Array.isArray("Shaikh"));//return boolean value
console.log(Array.from("Shaikh"));// An iterable object to convert to an array
//interisting
console.log(Array.from({name:"Shaikh"}));//it give empty array. to convert into array specify the value which want to convert key or value

// of
// Returns a new array from a set of elements.
// A set of elements to include in the new array object.
let s1=100,s2='name',s3=30.30
console.log(Array.of(s1,s2,s3));
*/