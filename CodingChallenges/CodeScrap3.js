const text = "Thef mans king";
var arr = text.split(" ");
var result ="";
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
var firstWord = arr[0];
var secondWord = arr[1];

function  testLongWord(){
        if( firstWord.length == secondWord.length)
        {
            
            firstWord = firstWord.replace(regex, '');
            console.log("1st Block of Code executed");
        }
        else if(arr.length > 2){
            for(var i=0;i < arr.length; i++){
                for(var j=1; j < arr.length; j++){
                    
                    firstWord = arr[i];
                    secondWord = arr[j]; 
                    console.log(firstWord);
                    console.log(secondWord);
                    if(firstWord.length == secondWord.length){
                    firstWord = firstWord.replace(regex, '');
                    
                    }
                    
        }
    
    }
}
}    

//console.log("Array Length " + arr.length);
//console.log("Firstword is " + firstWord);
//console.log("SecondWord is " +secondWord);
//console.log(secondWord);
//console.log(result);



//console.log(secondWord);
////console.log(arr);
//console.log(firstWord);
//console.log(firstWord.length);
//console.log(secondWord);
//console.log(secondWord.length);
