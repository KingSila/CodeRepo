
var firstSet =[];
var secondSet =[];
var strArr = [];
var SortedfirstSet = [];
function FindIntersection(...arguments)
{

    return arguments.sort(function(a,b){
        return a - b;
    });
}
console.log(FindIntersection("100, 10, 4, 7, 13"));
//console.log(firstSet);
//onsole.log(SortedfirstSet);