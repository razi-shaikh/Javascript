// declaration of array
let arr1=[1,2,3,4,5,6,7]
let arr2=new Array('r','a','z','i')

/*
console.log(arr1)
arr1.push(8,9)//is used for adding element in last of array
console.log(arr1)
arr1.pop()//is used for removing last element
console.log(arr1)
arr1.unshift(0)//is used for adding element in front of array
console.log(arr1)
arr1.shift()//is used for removing element from front
console.log(arr1)
console.log(arr1.includes(5))//its check value is present or not and return boolean
console.log(arr1.indexOf(9))//its check value is present or not and return index
*/
let newArr=arr1.join()
// console.log(arr1)//array
// console.log(newArr)//type is string

// slice
// extracts a portion of an existing array without modifyind the original array
console.log('before slice ',arr1)//array
let newArr1=arr1.slice(1,3)
console.log('after slice ',arr1)//array
console.log('slice value ',newArr1)//array

//splice
// modifies an original array by removing portion of array
console.log('before splice ',arr1)//array
let newArr2=arr1.splice(1,4)
console.log('after splice ',arr1)//array
console.log('splice value ',newArr2)