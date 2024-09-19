// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let learningFrom = 'ChaiAurCode        ';
// console.log(learningFrom.length);
String.prototype.trueLength = function (){
    return this.trim().length
}
// console.log(learningFrom.trueLength());
const test1='hello          World      ';
// console.log(`True length is : ${test1.trueLength()}`);



String.prototype.finalLength=function (){
    this.trim();
    let word=this.split(' ');
    word=word.filter((item) => {
        if(item!==' '){
            return item
        }
    })
    word=word.join(' ')
    return (`${word} is and length is ${word.length}`)
}
console.log(test1.finalLength());
console.log('      I am    Razi      '.finalLength());



/*
function findLength(text) {
    text=text.trim()
    let splitText=text.split(' ')
    console.log(splitText);
    splitText=splitText.filter(function (word){
        if(word!==' '){
            return word;
        }
    })
    console.log('after filter '+splitText);
    console.log(text);
    text = splitText.join(' ')
    console.log(text);
}
findLength(test1)
*/