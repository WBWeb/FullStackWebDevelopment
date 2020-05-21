var myAccountBalance = 300;
var nikeSBShoes = 799.23;
var coupon = 500
// == equal to
// === ??
// <= less than or equal to
// >= greater than or equal to
// !==

var val1 = 23;
var val2 = "23";

if (val1 !== val2) {
   console.log("These are not the same!");
}
else {
   console.log("One of these IS like the other...");
}




if (nikeSBShoes <= myAccountBalance) {
   myAccountBalance -= nikeSBShoes;
   console.log("We just bought some dope shoes!");
   console.log("Account Balance: " + myAccountBalance);
} else if (nikeSBShoes - coupon <= myAccountBalance) {
   console.log("We just bought some dope shoes with a coupon!");
   myAccountBalance -= nikeSBShoes - coupon;
   console.log("Account Balance: " + myAccountBalance);
} else {
   console.log("You too broke fo shoes bra!");
}


if (1 === 1 && 2 === 2 || "joe" === "joe") {
   console.log("These are both true!");
}

if (true && true) {
   console.log("These are the same!");
}

if (1 === 3 || "joe" === "joe") {
   console.log("one of these are true!");
}

var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var cat3DisabledHandicap = true;

if ((cat1 > cat2 && cat1 > cat3) && !cat3DisabledHandicap) {
   console.log("Cat 1 is the cutest!");
} else if ((cat2 > cat1 && cat2 > cat3) && !cat3DisabledHandicap) {
   console.log("Cat 2 is the cutest!");
} else if ((cat3 > cat1 && cat3 > cat2) || cat3DisabledHandicap) {
   console.log("Cat 3 is the cutest!");
}
