// push vs shift
// push is faster than shift becasuse push is adding element at the end of array and shist is adding element in start point and shift all element to backword to array




// push function returning index value of where value was placed
let fruits = ["Apple","Mango","Banana"];
console.log(fruits);
let storeIndex=fruits.push("Orange","Watermelon");
console.log(fruits);
console.log(storeIndex);

// pop function returning removed element and we can perform any action
fruits.pop();
console.log(fruits);
// example of pop function
let removeElement=fruits.pop();
console.log(removeElement)

// unshift is for adding element to front of array
fruits.unshift("Strawberry","Pineapple");
console.log(fruits);

// shift is for removing element from front of array and returning removed element. 
let s=fruits.shift();
console.log(fruits);
console.log(s);
