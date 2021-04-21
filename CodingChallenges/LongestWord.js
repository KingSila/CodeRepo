function LongestWord(sen){
     
      const text = sen;
      var arr = text.split(" ");
      var firstWord = arr[0];
      //var secondWord = arr[1];
      const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
      var result ="";
      
 
      for(let i = 1; i <= arr.length; i++)
        {
            var secondWord = arr[i];
            if(arr.length == 1){
                
                result = firstWord.replace(regex, '');
            }
            else if(secondWord.length > firstWord.length)
            {
                arr[i];
                firstWord = arr[i];
                result = firstWord.replace(regex, '');
            }
            
        } 
        return result;
    }


console.log(LongestWord("fun&!! time"));
console.log(secondWord);