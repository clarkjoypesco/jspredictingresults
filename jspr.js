var outsideExample = "First string";
function example() {
    var outsideExample = "Second string";
}
example();
console.log(outsideExample);

var outsideExample = "First string";
function example() {
    outsideExample = "Second string";
}
example();
console.log(outsideExample);
