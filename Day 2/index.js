//1. Function Declaration
// function functionName(parameters) {
//     function body
//   }
  

// function hello_1(name) {
//     console.log(`Hello ${name}`);
// };

// hello_1("ahmed")  //Output: Hello, ahmed


// //2. Function Expression
// // const functionName = function(parameters) {
// //     function body
// //   };
  
// const hello_2 = function(name) {
//     console.log(`Hello ${name}`);
// };

// hello_2("ahmed")  //Output: Hello, ahmed


// //3. Arrow Functions
// // const functionName = (parameters) => {
// //     function body
// //   };
  
// const hello_3 = (name) =>{
//     console.log(`Hello ${name}`);
// };
// hello_2("ahmed")  //Output: Hello, ahmed


// //4. Function Scope

// let globalVariable = "I'm global";

// function checkScope(){
//   let localVariable = "I'm local";
//   console.log(globalVariable); // Accessible
//   console.log(localVariable);  // Accessible
// }

// checkScope();
// //console.log(localVariable);  // Error: localVariable is not defined


// //5. Hoisting
// greet("ahmed");

// function greet(name) {
//     console.log(`Hello ${name}`);
// }
// //This can only be in Function Declaration case it hosted  to the top of their scope
// //Function expressions and arrow functions are not hoisted


/////////////////////    TASK 1       ///////////////////////

// Hoisting:

// Function Declaration: Yes, hoisted to the top
// Function Expression && Arrow Function: No, not hoisted

// this Context:

// Function Declaration: Dynamic (this depends on how it's called)
// Function Expression: Dynamic (this depends on how it's called)
// Arrow Function: Lexical (this is inherited from the surrounding context)
// Syntax:

// Function Declaration: function name() {}
// Function Expression: const name = function() {}
// Arrow Function: const name = () => {}

    /////////////////////    TASK 2       ///////////////////////

//1. Function Declaration
    function greet(name) {
        return `Hello, ${name}`;
    }
console.log(greet("ahmed"));

//2. Function Expression
const add = function (a, b) {
    return a + b;
};
console.log(add(5,8))

//3.Arrow Functions:
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(5,8))


    /////////////////////    TASK 3       ///////////////////////

    function findMax(number) {
        if (number.length === 0){
            return undefined;
        }
        let max = number[0];

        for (let i = 1; i < number.length; i++){
            if (number[i] > max){
                max = number[i];
            }
        }
        return max;
    }

    const myNumber = [10, 5, 20, 8, 15];
    console.log(`The maximum value is: ${findMax(myNumber)}`);
    

    /////////////////////    TASK 4       ///////////////////////

//1. Regular Function:
    function multiplyR(a, b){
        return a * b;
    };
    console.log(`Product (regular function): ${multiplyR(5, 3)}`);

//2. Arrow Functiom
    const multiplyA = (a, b) => a * b;

    console.log(`Product (arrow function): ${multiplyA(5, 5)}`);
