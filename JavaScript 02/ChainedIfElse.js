var num = 0;
var size;

function checksize(num){
    if (num < 5)
    return "Tiny"

    else if (num < 10){
    return "Small"
    }
    else if (num < 15){
    return  "Medium"
    }
    else if (num < 20){
    return  "Large"
    }
    else if (num >= 10){
    return  "Huge"
    }
}

console.log("Size is " + checksize(19));