var contacts = [
    {
        "firstname": "Akira",
        "lastname": "Laine",
        "number": "0543256632",
        "likes": ["Pizza","Coding","Brownie Points"]
    },
    {
        "firstname": "Harry",
        "lastname": "Potter",
        "number": "09994456632",
        "likes": ["Hogwarths","Magic","Hagrid"]
    },
    {
        "firstname": "Sherlock",
        "lastname": "Holmes",
        "number": "048534456632",
        "likes": ["Intriguing Cases","Violin"]
    },
    {
        "firstname": "Kristian",
        "lastname": "Vos",
        "number": "unknown",
        "likes": ["Javscript","Gaming","Foxes"]
    }
];

function lookUpProfile(name, prop){

    for (var i = 0; i < contacts.length; i++)
    {
        if(contacts[i].firstname === name){
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact";

}

var data = lookUpProfile("Akira","like");

console.log(data);
