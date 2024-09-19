let coding=['javaScript','python','java','ruby','dart']
// foreach
// using normal function
coding.forEach(function (item){
    // console.log(item);
})
// using arrow function
coding.forEach((item)=>{
    // console.log(item);
})

// passing function in foreach loop
coding.forEach(printLoop);
function printLoop(item) {
    // console.log(item);
}

coding.forEach((item,index,fullArray)=>{
    // console.log(item,index,fullArray);
    // console.log(item,index);
})

let newCoding=[
    {
        languageName : "JavaScript",
        languageExtension : ".js"
    },
    {
        languageName : "python",
        languageExtension : ".py"
    },
    {
        languageName : "Java",
        languageExtension : ".java"
    },
    {
        languageName : "dart",
        languageExtension : ".dart"
    },
];
// printing array with object value
// console.log(newCoding);
// using foreach loop
newCoding.forEach((variableName)=> {
    console.log(`key : ${variableName.languageName} :: value : ${variableName.languageExtension}`);
})