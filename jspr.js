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
