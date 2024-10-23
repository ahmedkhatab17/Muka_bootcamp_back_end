////////////////////  Object //////////////////

// let person = {
//     name: "ahmed",
//     age: 20,
//     greet: function () {
//         return `Hello, i am ${this.name}, my age ${this.age}`
//     }
// }


// to ES6 syntax/*
// class person{
//     constructor(name, age){
//         this.name =name;
//         this.age =age;
//     }
//     greet(){
//         return `Hello, i am ${name}, my age ${age}`
//     }
// };
// let p1 =new person; /// or let p1 = new person ("ahmed", 20)
// p1.name ="ahmed";
// p1.age =20;
// console.log(person.greet());

/////////////////// Task 1 2 3 ///////////////////

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    describtion: function() {
        return `${this.title} written by ${this.author} in ${this.year}`;
    }
};

// function objectFun(obj){
//     for(let key in obj){
//         console.log(`${key}: ${obj[key]}`)
//     }
// }
// objectFun(book);
console.log(book.describtion());

/////////////////// Task 4 ///////////////////

let books =[
    {title: "book1", author: "ahmed", year: 2000},
    {title: "book2", author: "omar", year: 1826},
    {title: "book3", author: "ashraf", year: 1822},
    {title: "book4", author: "ali", year: 2006},
    {title: "book5", author: "ibrahim", year: 1900},
];
console.log(books)

function search(title, booksArr){
    for (let i = 0; i < booksArr.length; i++) {
        if (booksArr[i].title === title) {
            return booksArr[i];
        }        
    }
    return "Book not found";
}

console.log(search("book1", books));
console.log(search("book8", books));

function numOfBooks(books){
    return books.length;
}
console.log(numOfBooks(books));
