var calculator = function(num1, num2, operator) {
	if (operator === null) {
		return("Please enter a valid operator")
	} else if (operator === '+') {
		return(num1 + num2)
	} else if (operator === '-') {
		return(num1 - num2)
	} else if (operator === '*') {
		return(num1 * num2)
	} else if (operator === '/') {
		return(num1 / num2)
	} 
};

module.exports = calculator;