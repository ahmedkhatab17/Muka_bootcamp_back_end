//1. Function Declaration
// function functionName(parameters) {
//     function body
//   }
  

function hello_1(name) {
    console.log(`Hello ${name}`);
};

hello_1("ahmed")  //Output: Hello, ahmed


//2. Function Expression
// const functionName = function(parameters) {
//     function body
//   };
  
const hello_2 = function(name) {
    console.log(`Hello ${name}`);
};

hello_2("ahmed")  //Output: Hello, ahmed


//3. Arrow Functions
// const functionName = (parameters) => {
//     function body
//   };
  
const hello_3 = (name) =>{
    console.log(`Hello ${name}`);
};
hello_2("ahmed")  //Output: Hello, ahmed


//4. Function Scope

let globalVariable = "I'm global";

function checkScope(){
  let localVariable = "I'm local";
  console.log(globalVariable); // Accessible
  console.log(localVariable);  // Accessible
}

checkScope();
//console.log(localVariable);  // Error: localVariable is not defined


//5. Hoisting
greet("ahmed");

function greet(name) {
    console.log(`Hello ${name}`);
}
//This can only be in Function Declaration case it hosted  to the top of their scope
//Function expressions and arrow functions are not hoisted
