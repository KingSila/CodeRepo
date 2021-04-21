const text = "love dogs";
var arr = text.split(" ");
var result ="";
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;


for(var i = 0;i < arr.length; i++){
    for(var j = 1; j < arr.length; j++){

        var firstWord = arr[i];
        var secondWord = arr[j];
        
        if( firstWord.length == secondWord.length)
        {
            firstWord = firstWord.replace(regex, '');
        }

        
}
console.log(firstWord);
console.log(secondWord);
//console.log(secondWord);
//console.log(result);



//console.log(secondWord);
    }
//console.log(arr);
//console.log(firstWord);
//console.log(firstWord.length);
//console.log(secondWord);
//console.log(secondWord.length);
