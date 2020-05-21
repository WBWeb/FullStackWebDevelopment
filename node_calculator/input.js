var rs = require('readline-sync');
var calculator = require('./calculator');

rs.setDefaultOptions({limit: ['+', '-', '*', '/']});

var number1 = rs.questionFloat('Enter the first number: ', {limit:null});
var number2 = rs.questionFloat('Enter the second number: ', {limit:null});
var operator = rs.question('Please enter the operator:');

console.log('The result of the operation is: ',calculator(number1, number2, operator));
