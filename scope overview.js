'use strict'

// ? SCOPE
// in javascript there are two MAIN types of scope
// ! LOCAL and GLOBAL

// Local Scope

// Function Scope

// variables decalared inside a function 
// cannot be accessed from outside the function

// if you try, it will produce a ReferenceError

function foo() {
    let bar = `Hello World!`;
  }
  
  foo();
  
  //console.log(bar);
  
  // Block Scope
  
  // variables inside a block cannot be accessed from outside of the block
  
  {
    let x = 1;
  }
  
  //console.log(x);
  
  // unless you declare them as a VAR
  // this is one reason we don't use VARs any more
  
  {
    var y = 2;
  }
  
  //console.log(y);
  
  // ! GLOBAL SCOPE
  
  // Automatically Global
  
  // if we don't declare a variable but reference it
  // it is automatically added to global scope
  // this is TERRIBLE practice as it can be accessed from anywhere!
  
  function globalVar(){
    myVariable = `hello`;
  }
  
  globalVar();
  //console.log(myVariable);
  
  // Standard Global
  
  // declaring a variable outside of a block
  
  let a = `a`;
  
  console.log(a);
  
  function b(){
    console.log(`inside a function I can still find '${a}'`);
  }
  
  b();
  
  // ? HOW JS LOOKS FOR VARIABLES
  
  // 1. local (inside the block)
  // 2. global (outside of the block)
  // 3. if none exist then it is created and added to global scope