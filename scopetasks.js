'use strict'
let t = "boo";

function turtleneck() {
    let z = "foo";
    if (z == "foo") {
      let t = "boo";
    }
    console.log(z); 
    console.log(t); 
  }
  turtleneck();

  ////2nd one 


  function doSomething() {
    console.log(a);
    console.log(foo());
    let a = 1;
    function foo() {
      return 2;
    }
  }
  doSomething();

  ////// the result is   console.log(a);^ReferenceError: Cannot access 'a' before initialization