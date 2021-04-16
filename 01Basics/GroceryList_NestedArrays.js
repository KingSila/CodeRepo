//let NewList = [];
var myList = [["cereal", 3],["milk", 2],["bananas", 3],["juice", 5],["eggs", 12]];

//Add Items at the end of the Grocery List
console.log("Grocery before " + myList);
 myList.push(["Bread", 10]);
console.log("Grocery After   " + myList);


//Remove last item from Shopping List
console.log("Grocery Removal before " + myList);
 myList.pop();
console.log("Grocery Removal After   " + myList);

// Remove First item on Grocery List
console.log("Grocery First Removal before " + myList);
 myList.shift();
console.log("Grocery First Removal After   " + myList);
