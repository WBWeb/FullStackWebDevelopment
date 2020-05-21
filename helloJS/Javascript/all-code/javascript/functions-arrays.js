var student1 = "Timmy";
var student2 = "Janessa";
var student3 = "Arun";

var balances = [50.45, 4000.12, -300.50];

var studentNames = ["Timmy","Janessa","Arun"];

var naughtyList = [];
naughtyList.push(studentNames[0]);

var index = naughtyList.indexOf("Timmy");

console.log(naughtyList);
if (index > -1) {
   naughtyList.splice(index, 1);
}

console.log(naughtyList);

var length1 = 15;
var width1 = 10;
var area1 = length1 * width1;

var lenght2 = 12;
var width2 = 14;
var area2 = lenght2 * width2;


console.log(area1);
console.log(area2);

function area(length, width) {
   return length * width;
}

var rectanglesAreas = []
rectanglesAreas.push(area(10,15));
rectanglesAreas.push(area(14,2));
rectanglesAreas.push(area(4,5));

console.log(rectanglesAreas);


var bankBalance = 500;

function makeTransaction(priceOfSale) {
   if (priceOfSale <= bankBalance) {
       bankBalance -= priceOfSale;
       console.log("Purchase Successful");
   } else {
       console.log("Insufficient Funds");
   }
}

console.log(bankBalance);
makeTransaction(79.00);

console.log(bankBalance);
makeTransaction(2.32);

console.log(bankBalance);
makeTransaction(10.45);

console.log(bankBalance);
makeTransaction(450.00);

var transaction = function(priceOfSale) {
   if (priceOfSale <= bankBalance) {
       bankBalance -= priceOfSale;
       console.log("Purchase Successful");
   } else {
       console.log("Insufficient Funds");
   }
};

var printCustomerName = function(first,last) {
   console.log("First Name: " + first + " Last Name: " + last);
}

var applyForCreditCard = function(creditScore, soul) {
   //call some functions to process application
}

var bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);

var total = 10;
for (var x = 0; x < total; x++) {
   console.log(x);
}
