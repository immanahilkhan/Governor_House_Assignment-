"use strict";
// Tests for equality and inequality with strings
console.log("equality test with string : ", "apple" === "apple");
// Tests for equality and inequality with strings
console.log("inequality test with string : ", "apple" != "orange");
//Tests using the lower case function
console.log("lower case function:", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality and , 
console.log("equality test with number :", 27 === 27);
//Numerical tests involving inequality
console.log("equality test with number:", 29 != 30);
//greater than 
console.log("greater than:", 10 > 5);
//less than
console.log("less than:", 5 < 10);
//greater than or equal to ,
console.log("greater than or equal to:", 12 >= 12);
//and less than or equal to
console.log("land less than or equal to:", 15 >= 14);
//Tests using "and" and 
console.log("operater test :", 8 === 8 && 9 > 4);
//Tests using"or" operators
console.log("operater test :", 8 === 8 || false);
// Test whether an item is in a array
const fruit = ["banana", " apple", " orange"];
console.log('test "banana" in the arrya:', fruit.includes("banana"));
// Test whether an item is in a array
console.log('testing "mango" in not in array :', !fruit.includes('mango'));
//Test whether an item is not in a array
