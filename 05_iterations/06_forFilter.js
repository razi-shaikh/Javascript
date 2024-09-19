// try to return value using foreach
let coding=[1,2,3,4,5,6,7,8,9,0]
let returnCoding = coding.forEach((retCod)=>{
    return retCod;//return undefined
})
// console.log(returnCoding);
//

// return value using filter
let returnNum;
// returnNum = coding.filter((item) => (item>3 && item <6));//1st way
// returnNum = coding.filter((item) => item>3 && item <6);//2nd way
returnNum = coding.filter((item,index) => {//3rd way
    // console.log(item,index);
    return item>=3 && item <8
    })
// console.log(returnNum);

// trying to return value using foreach method
let array = [1,2,3,4,5,6,7,8,9,0];
let newArray = [];
array.forEach((item) => {
    if(item>=3 && item <8){
        newArray.push(item);
    }
})
// console.log(newArray);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981,
    edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
    edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999,
    edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
    edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009,
    edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987,
    edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986,
    edition: 1996 },
    { title: 'Book Eight', genre: 'Horrer', publish: 2011,
    edition: 2016 },
    { title: 'Book nine', genre: 'Horrer', publish: 1981,
    edition: 1989 },
    { title: 'Book ten', genre: 'astrology', publish: 2003,
    edition: 2010 },
]

let bookReturn;
bookReturn= books.filter( (item,index) => {
    if((item.genre)==='Horrer'){
        return item;
    }
})
// console.log(bookReturn);

bookReturn = books.filter( (item) => item.publish>=2000)
// console.log(bookReturn);

bookReturn = books.filter( (item) => (item.edition >=2000  && (item.genre) === 'Non-Fiction'))
console.log(bookReturn);