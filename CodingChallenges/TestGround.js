var str = "@_Sila5633";

var letterNumber = /^[0-9a-zA-Z_]+$/;

function  checkString(str){
    if (str.match(letterNumber))
    {
        return true
    }
    else{
        return false;
    }
}


console.log(letterNumber);
console.log(str.charAt(str.length-1));
console.log(checkString(str));