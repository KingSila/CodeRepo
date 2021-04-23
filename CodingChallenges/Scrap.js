const sen = "";
var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
var arr = [];
var result ="";
var startWord = "";
var secondWord = "";
var i = 0;
var result ="";
var  firstWord = ""; 

function LongestWord(sen){
     
     //text = sen
     regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    
     changedtext = sen.replace(regex, '');
     arr = changedtext.split(" ");
     startWord = arr[0];
     secondWord = arr[1];
     firstWord = arr[0];
    
    if(arr.length > 2){
        for(var j=1;j < arr.length; j++){
                
                firstWord = arr[i];
                secondWord = arr[j]; 
               
                if(secondWord.length < startWord.length )
                {
                 result = startWord;
                i++;    
                console.log("1st Block of Code executed");          
                }
                else if(secondWord.length > firstWord.length)
                {
                 result = secondWord;
                 i++;
                 console.log("2nd Block of Code executed");
                }
                else if(startWord.length == firstWord.length )
                {
                result = startWord;
                i++;
                console.log("3rd Block of Code executed");
                }
                else if(startWord.length > secondWord.length){
                result = startWord;
                i++;
                console.log("4th Block of Code executed");
                }
            }
        }
    else if(arr.length ==1)
         {          
        result = startWord; 
        console.log("5th Block of Code executed");     
         }
    else if( startWord.length == secondWord.length)
        {  
        result = startWord; 
        console.log("6th Block of Code executed");     
        }    
    else if( startWord.length > secondWord.length)
        {
         result = startWord
         console.log("7th Block of Code executed");
         }
    else if( startWord.length < secondWord.length)
        {
         result = secondWord; 
         console.log("8th Block of Code executed");         
        }
        
}

console.log(LongestWord("silas is the greatest"));
console.log("result is " + result ); 
console.log(arr);
console.log("Length of Array is " + arr.length);
console.log("startWord is " + startWord);
console.log("firstword is " + firstWord );
console.log("second is " + secondWord );   