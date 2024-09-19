// trim
let firstName =" Shaikh razi AHMED ";
console.log(firstName+" and length is "+firstName.length);

firstName=firstName.trim();
console.log(firstName+" and length is "+firstName.length);

// to upper case
console.log(firstName+" and uppercase is "+firstName.toUpperCase());

// to lower case
console.log(firstName+" and lowercase is "+firstName.toLowerCase());

// slice
// important start index and end index
console.log(firstName+" and slice is "+firstName.slice(0,6));
console.log(firstName+" and slice is "+firstName);


firstName=firstName.slice(7,11);
console.log(firstName+" and slice is "+firstName);