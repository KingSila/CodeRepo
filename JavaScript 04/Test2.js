let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries){
        let maxSalary = 0;
        let maxName = null;

    for(const[key, value] of Object.entries(salaries)) {
       if(maxSalary < value){
           maxSalary = value;
           maxName = key;
       }

    }
     return maxName;
}
console.log(topSalary(salaries));
