var calculator = {

sum : function (num1, num2) {
	return (parseInt(num1) +parseInt(num2));
 },

subtract : function (num1,num2)  {
	return (num1 - num2);
},

multiply : function (num1, num2)  {
	return (num1 * num2);
},

divide : function (num1, num2)  {
	return (num1 /num2);
}

};

module.exports = calculator;
