var indices = [];
//var array = ['a', 'b', 'a', 'c', 'a', 'd'];
//var element = 'a';
//
var idx;
var sorted = [];
var strArr = [];
var sortedfirstSet ;
var secondfirstSet ;
var result = true;
var matched = [];

function FindIntersection(strArr)
{
    sorted = Array.prototype.slice.call(strArr).sort();   
    sortedfirstSet = [].concat(sorted[0]);
    secondfirstSet = [].concat(sorted[1]);



}

console.log(FindIntersection(["1,3,4,7,13", "1,2,4,13,15"]));

console.log("Sorted Array size " + sorted.length);
console.log("1st Array size " + sortedfirstSet.length);
console.log("1st Array  " + sortedfirstSet);
console.log("2nd Array size " + secondfirstSet.length);
console.log("2nd Array  " + secondfirstSet);
console.log("RESULTS........... " + result);
console.log("Match Array size " + indices.length);