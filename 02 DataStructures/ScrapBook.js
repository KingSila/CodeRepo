
function Stack() {
    constructor() {
        this.collection = [];

    this.print = function() {
      console.log(collection); 
    }

    

    this.push = function(value)
    {
        this.collection[this.count] = value;
        this.count++;
    }
    this.pop = function(){
        if(this.count ==0){
            return undefined
        }
        this.count--;
        delete this.collection[this.count];
    }
    this.size = function(){
        return this.count;
    }

    //Return the value at the end of the stack

    this.peek = function(){
        return this.collection[this.count-1];
    }

     this.isEmpty = function(){
        if(this.count == 0){
            return true;
        }
        else if(this.count != 0){
            return false;
        }
     }

     this.clear = function(){
        
        while(this.isEmpty() === false)
        {
            this.count--;
            return  delete this.collection[this.count]; 
        }
        }

     }
var myStack = new Stack();
myStack.push("orange");
myStack.push("mango");
myStack.push("apple");
myStack.push("pine");
console.log("Stack Size is   " + myStack.size());
console.log("Top stack element " + myStack.peek());
myStack.pop();
console.log("Top stack element " + myStack.peek());
console.log("new Stack Size is   " + myStack.size());
console.log("IsStackEmpty   " + myStack.isEmpty());

/*console.log("Stack Size is   " + myStack.size());
myStack.push("banana");
myStack.print();
myStack.pop();
console.log(myStack.peek());
console.log(" new Stack Size is   " + myStack.size());
console.log(" IsStackEmpty   " + myStack.isEmpty());
console.log(" Deleteting the whole stack   " + myStack.clear());
console.log(" new Stack Size is   " + myStack.size());
console.log(myStack.peek());  **/
//myStack.print();