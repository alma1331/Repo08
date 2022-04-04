var myGlobalVariable = 10;
var myLocalVariable;

function function1() {

 myLocalVariable = 5;
}
console.log();

function function2() {

    var result = "";
    if(typeof myGlobalVariable != "undefined") {


        result += "myGlobalVariable: " + myGlobalVariable;

    }

    if(typeof myLocalVariable != "undefined") {


        result += " myLocalVariable: " + myLocalVariable;

    }

    console.log(result);
}

function1();
function2();
module.exports = {
    function1, 
    function2


};