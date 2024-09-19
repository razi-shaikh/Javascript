let name ="Razi "
let count =50
// second way to declare string variable
let newName=new String ("Shaikh")

// string concatination
// console.log(name + count);
// instead of using string concatination use templateString
// C:\Users\sk Razi\Documents\html\harshit vashisth\10_templateString.js
// console.log(`My name is ${name} and count is ${count}`);
console.log(newName);
console.log(newName.length);
// console.log(newName.toUpperCase);
console.log(newName.charAt(3));
console.log(newName.indexOf("i"));

let try1=newName.substring(0,4)
console.log('substring : '+try1);
let try2=newName.slice(-5,-1);
console.log('slice '+try2);
let try3 ="    Shaikh Razi Ahmed      "
// trim is used for remove whiteSpace from start and end
// trimStart() and trimEnd()
console.log(try3.trim());

let url="https://anywebsite.com%20home%20file%20index.html"
// replace is used for replace from thing to another
console.log('replace '+url.replace("%20","-"));
console.log('replaceAll '+url.replaceAll("%20","-"));
// includes used for finding element is present or not
console.log(url.includes("%"));

// split is used for spliting the sentence
// split(seperator,limit)
console.log(url.split("%20"));
// console.log(url);