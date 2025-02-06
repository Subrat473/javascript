
/*
var: Function-scoped, can be redeclared, and hoisted but not block-scoped.


let: Block-scoped, cannot be redeclared in the same scope but can be updated.



const: Block-scoped, cannot be redeclared or updated.
*/




function test() {
    var a = 10;
    if (true) {
      let b = 20;
      const c = 30;
    }
    console.log(a); // 10
    console.log(b); // Error: b is not defined
    console.log(c); // Error: c is not defined
  }
  test();
  