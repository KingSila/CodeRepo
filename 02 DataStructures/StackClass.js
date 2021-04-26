
function Stack() {
    var collection = [];
    this.print = function() {
      console.log(collection);
      this.count = 0;
      this.storage = {};
    
    };
    
    this.push = function(value)
    {
        this.storage[this.count] = value;
        this.count++;
    }
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

     function isEmpty(){
        return this.count ==0;
     }

     function clear(){
         for(var i = this.count--; i < this.count; i--)
         {
            delete this.storage[this.count];
         }
     }
  }