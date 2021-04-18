var collection = {
    "2548":{
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it rock",
            "You give Live a Bad Name"
        ]
    },
    "2468":{
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245":{
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "Abba Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {

if(value === ""){
    delete collection[id][prop];
} else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);   
    } else {
        collection[id][prop] = value;
    }

return collection;

}

/// Test the code
updateRecords(2548,"tracks","test");
console.log(updateRecords(5439,"artist","ABBA"));