/*
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" 
typeof null                   // Returns "object"
*/


var a = "Jhon";
var b = 3.14;
var c = NaN;
var NaN = 67;
var d = [1,2,3,4];
var e = {name:"Jhon",
        age:24
        };
myVar = new Date();
var f = b.valueOf;
var myCar = undefined;
var h = [null];

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(b==c);
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(myVar));
console.log(typeof(f));
console.log(typeof(myCar));
console.log(typeof(h));



