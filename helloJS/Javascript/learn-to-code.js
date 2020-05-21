//var name = "Jack";
//var age = 23;
//
//var message = "Hi, my name is " + name + " and I am " + age + " years old";
//console.log(message);

//var age = 23;
//var sum = 10 + 15;
//var sub = 15-10;
//var mult = 10*3;
//var div = 9/3;
//var remain = 10%4;
//
//
//console.log(sum,sub,mult,div,remain);
var accBalance = 300;
var nikeSBShoes = 780.99;
var coupon = 500;


//if (nikeSBShoes <= accBalance) {
//    accBalance -= nikeSBShoes;
//    console.log("We just bought some dope shoes!" + " Your current account balance is " + accBalance);
//} else if (nikeSBShoes -coupon <=accBalance) {
//    console.log("We just bought some dope shoes with a coupon!");
//    accBalance  -= nikeSBShoes - coupon;
//    console.log("Account balance: "  + accBalance);
//}
//
//else {
//    console.log("You too broke for the shoes");
//}
//var age = 23;
//var joesAge = "23";
//
//if (age !== joesAge) {   /* === is used  */
//    console.log("These are not the same");
//} else {
//    console.log("One is like the other");
//}

/*FUNCTIONS*/

var length1 = 15;
var length2 = 19;
var area1 = length1 * length2;
console.log(area1);

//Creating a function

function area(length, width) {
    return length * width;
}

console.log(area(10,32));

var rectanglesAreas = [];
rectanglesAreas.push(area(10,23));
rectanglesAreas.push(area(10,2));
rectanglesAreas.push(area(5,23));
console.log("The area of the different rectangles are " + rectanglesAreas);

var bankBalance = 500;
function makeTransaction(priceOfSale) {
    if (priceOfSale <= bankBalance) {
        bankBalance -= priceOfSale;
        console.log("Purchase Successful" +"\n" + "Remaining balance = " + bankBalance);
    } else {
        console.log("Insufficient Funds");
    }
}

makeTransaction(79.00);
makeTransaction(2.99);
makeTransaction(10.99);
makeTransaction(950);