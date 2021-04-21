function codelandUserNameValidation(str){

    const allowedletterNumbers = /^[0-9a-zA-Z_]+$/;

if(str.length > 4 && str.length < 26 &&
   str.charAt(0) == str.match(/[a-z]/i)
   && str.match(allowedletterNumbers)
   && str.charAt(str.length-1) != '_')
    {
return true
    }
else
return false
}

console.log(codelandUserNameValidation("u__hello_world123"))