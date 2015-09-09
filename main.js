/*

Quiz Instructions:

1. Create a constructor function called Tree. It should take 4 arguments that correspond
 to attributes on the objects it creates. Two attributes should be 'name' and 'leaf shape'.
 Pick the other two. 

2. Create 4 tree objects using your Tree function.

3. Put those objects into an array called tree_array. 

4. for each tree in tree_array, add a block element to the tree-holder div that displays 
the tree's attributes.

*/

var Tree = function(name, leafshape, height, bark) {
  this.name = name,
  this.leafshape = leafshape,
  this.height = height,
  this.bark = bark
};

var elm = new Tree ("Elm", "wide", 20, "smooth");
var maple = new Tree ("Maple", "spiky", 30, "medium crackly");
var pine = new Tree ("Pine", "needle", 15, "very crackly");
var oak = new Tree ("Oak", "wide", 35, "medium crackly");

console.log(elm);

var tree_array = [elm, maple, pine, oak];

console.log(tree_array);

for (var i = 0; i < tree_array.length; i++) {
	document.getElementById("tree-holder").innerHTML += "<div>" + JSON.stringify(tree_array[i], null, 2); + "</div>"
}