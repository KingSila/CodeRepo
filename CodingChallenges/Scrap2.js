var indices = [];
//var array = ['a', 'b', 'a', 'c', 'a', 'd'];
//var element = 'a';
//
var idx;
var sorted = [];
var strArr = [];
var sortedfirstSet = [];
var secondfirstSet = [];

function FindIntersection(strArr)
{
    sorted = Array.prototype.slice.call(strArr).sort();   
    sortedfirstSet = sorted[0];
    secondfirstSet = sorted[1];

    idx = sortedfirstSet.indexOf(secondfirstSet);

    if(idx === -1) {
    indices.push(idx);
     idx = sortedfirstSet.indexOf(secondfirstSet, idx + 1);
    }
    
}

console.log(FindIntersection(["1,3,4,7,13", "1,2,4,13,15"]));
console.log(indices);
