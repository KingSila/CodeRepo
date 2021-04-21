const text = "I love dogs";
var arr = text.split(" ");
//var firstWord = arr[0];
//var secondWord = arr[1];
var result ="";
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;



    for(let i = 0;i < arr.length; i++){
    for(let j = 1; arr.length; j++){
    firstWord = arr[i];
    secondWord = arr[j];

    
    if(secondWord.length == firstWord.length)
    {
        result = firstWord.replace(regex, '');
    }
    else if(secondWord.length > firstWord.length)
    {
        arr[i];
        secondWord = arr[i];
        result = secondWord.replace(regex, '');
    }
    else if(secondWord.length < firstWord.length)
    {
        arr[i];
        firstWord = arr[i] ;
        result = firstWord.replace(regex, '');
    }
}

console.log(arr);
console.log(firstWord.length);
console.log(firstWord);
console.log(secondWord.length);
console.log(secondWord);
console.log(result);
//console.log(secondWord.length);