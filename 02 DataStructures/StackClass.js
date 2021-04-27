
function Stack() {
    constructor() {
        this.collection = [];
      }

      print() {
        console.log(this.collection);
      }


    this.push = function(value)
    {
        return this.collection.push(value);
    }
    this.pop = function(){
        
        return this.collection.pop();
    }
    this.size = function(){
        return this.count;
    }

    //Return the value at the end of the stack

    this.peek = function(){
        return this.storage[this.count-1];
    }

     this.isEmpty = function(){
       
        return this.collection.length == 0;
     }

     this.clear = function(){
        
      return this.collection.length == 0;

     }
}

  var myStack = new Stack();