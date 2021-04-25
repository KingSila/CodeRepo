
var firstSet =[];
var secondSet =[];
var strArr = [];
var sorted = [];
var sortedfirstSet = [];
var secondfirstSet = [];
var matched = [];
var value = [];
var idx;
var i = 0;
function FindIntersection(strArr)
{
    //sortedfirstSet = strArr;
    //sortedfirstSet1 = [...sortedfirstSet].sort();
   sorted = Array.prototype.slice.call(strArr).sort();
   sortedfirstSet = sorted[0];
   secondfirstSet = sorted[1];
   idx = sortedfirstSet.indexOf(secondfirstSet);
    while(idx === -1)
      {
       
             value[idx] = sortedfirstSet[idx];
             matched.push(value);
             //idx = sortedfirstSet.indexOf(secondfirstSet, idx + 1);
       }
  
       //return matched;
}
  


console.log(FindIntersection(["1,3,4,7,13", "1,2,4,13,15"]));
console.log("Match Array size " + matched.length);
console.log("1st Array size " + sortedfirstSet.length);
console.log("1st Array size " + sortedfirstSet);
console.log("2nd Array size " + secondfirstSet.length);
console.log("1st Array size " + secondfirstSet);
console.log("RESULTS........... " + matched);