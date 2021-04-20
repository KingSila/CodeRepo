function codelandUserNameValidation(str){

    const  allowedLetters = [[a-z]/i [0-9]];

if(str.length > 4 && str.length < 26 &&
   str.charAt(0) == str.match(/[a-z]/i) )
    {
return true
    }
else
return false
}

console.log(codelandUserNameValidation("m5ilasMokbbb"))