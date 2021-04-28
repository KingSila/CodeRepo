var defaultString = "";
var returnName = "";
var newString = "";
export function twoFer(name){

    if (name === undefined)
    {
       
        return defaultString =  'One for you, one for me.';
       
    }
     (name !== "")
    {
        returnName = name;
        return newString = 'One for '+ returnName +', one for me.'
    }
}

console.log(twoFer());

console.log(twoFer('Bob'));