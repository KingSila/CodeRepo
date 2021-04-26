//var Stack =  ["BIO12","HIS80","MAT122","PSY44"];

var Stack = function(){
this.storage = {};
this.count = 0;

    //add element to the top of Stack
    this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
    }

    //Remove Top Element from the stack

    this.pop = function(){
        if(this.count ==0){
            return undefined
        }
        this.count--;
        delete this.storage[this.count];
    }
    this.size = function(){
        return this.count;
    }

    //Return the value at the end of the stack

    this.peek = function(){
        return this.storage[this.count-1];
    }
}

 var myStack = new Stack();

//var homeworkStack =  ["BIO12","HIS80","MAT122","PSY44"];

myStack.push("BIO12");
myStack.push("HIS80");
myStack.push("MAT122");
myStack.push("PSY44");

console.log(myStack.peek());
console.log("Stack Size is   " + myStack.size());
myStack.pop();
myStack.push("CS50");
console.log(myStack.peek());
console.log(" new Stack Size is   " + myStack.size());


