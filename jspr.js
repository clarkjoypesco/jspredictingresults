var outsideExample = "First string";
function example() {
    var outsideExample = "Second string";
}
example(); // returns noting
console.log(outsideExample); // prints first string

var outsideExample = "First string";
function example() {
    outsideExample = "Second string";
}
example(); // change the value of outsideExxample to Second String
console.log(outsideExample); // prints Second String


var outsideExample = "First string";
if (true) {
    var outsideExample = "Second string"; // reinitialize outsideExample to Second String
    console.log(outsideExample); // prints Second String
}
console.log(outsideExample); // of course this should be Second String also


example1(); // true
function example1() {
    console.log("Ran the example");
}

example2(); // false
var example2 = function() {
    console.log("Ran the example");
}


var rel = getRelationship(2, 3);
console.log(rel);

function getRelationship(x,y){

    if(x === y){
        return 'x  = y';
    }
    else if(x > y){
        return 'x is > y';
    }
    else if(x < y){
    return 'x is  <   y'
    } 
    else {
        return "Can't compare relationships because "+x+" and "+y+" [is]/[are] not [a] number[s].";
    }



}