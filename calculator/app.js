var toCalculate = require('./calculator');
var rs  = require('readline-sync');

var num1 = rs.question("Number 1 input: ");
var num2 = rs.question("Number 2 input: ");


console.log("The sum of the numbers is" + toCalculate.sum(num1, num2));

console.log("The difference of the two numbers is " + toCalculate.subtract(num1, num2));

console.log("The product of the two numbers is " + toCalculate.multiply(num1, num2));

console.log("The division of the two numbers yields " + toCalculate.divide(num1, num2));

