var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var form = document.getElementById("calcForm");

form.addEventListener("submit",function(event){
    if (document.getElementById("calcSelect").selectedIndex == "0"){
        var x = parseFloat(input1.value);
        var y = parseFloat(input2.value);
        var result = y / 100 * x;
        calcResult.innerText = y + " % of " + x + " is" + result;
        event.preventDefault();
    } 
    
    else if (document.getElementById("calcSelect").selectedIndec == "1"){
        var x = parseFloat(input1.value);
        var y = parseFloat(input2.value);
        var result = x * 100 / y;
        calcResult.innerText = x + " is " + y + " % of " + result;
        event.preventDefault();
    } 
    
    else if (document.getElementById("calcSelect").selectedIndex == "2"){
        var x = parseFloat(input1.value);
        var y = parseFloat(input2.value);
        var result = y / x * 100;
        calcResult.innerText = result + " % of " + x + " is " + y;
        event.preventDefault();
    } 
    
    else if (document.getElementById("calcSelect").selectedIndex == "3"){
        var x = parseFloat(input1.value);
        var y = parseFloat(input2.value);
        var result = y / x * 100;
        calcResult.innerText = x + " % of " + result + " is " + y;
        event.preventDefault();
    } 
    
    else if (document.getElementById("calcSelect").selectedIndex == "4"){
        var x = parseFloat(input1.value);
        var y = parseFloat(input2.value);
        var result = y / 100 * x;
        calcResult.innerText = y + " % of " + x + " is " + result;
        event.preventDefault();
    }
});