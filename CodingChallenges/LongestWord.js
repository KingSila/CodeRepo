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
                          
                }
                else if(secondWord.length > firstWord.length)
                {
                  result = secondWord;
                 i++;
                 
                }
                else if(startWord.length == firstWord.length )
                {
                 result = startWord;
                i++;
                
                }
                else if(startWord.length > secondWord.length){
                 result = startWord;
                i++;
                
                }
            }
        }
    else if(arr.length ==1)
         {          
         result = startWord; 
             
         }
    else if( startWord.length == secondWord.length)
        {  
         result = startWord; 
             
        }    
    else if( startWord.length > secondWord.length)
        {
          result = startWord
         
         }
    else if( startWord.length < secondWord.length)
        {
          result = secondWord; 
                 
        }
        return result;
}

console.log(LongestWord("silas is the greatest"));
