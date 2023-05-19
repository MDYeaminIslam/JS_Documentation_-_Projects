/*
var student = {
    name: "Rahim",
    age: 25,
    hometown: "Dhaka"
}

*/

//creating JSON object
/*
var student_json = {
    "name": "Rahul",
    "age": 25,
    "hometown": "Dhaka"
}
*/
/*
var student_json = JSON.stringify(student); //convert JS object to JSON
console.log(student_json);

var student_obj = JSON.parse(student_json); //convert JSON to JS object

console.log(student_obj);
*/

//Data type of JSON are :
//string, number, object, array, boolean, null

//JSON does not support undefined, date, function

/*
var person = {
    name: "Rahim",
    age: 25,
    hometown: "Dhaka",
    married : false,
    dob: "1995-12-12",
    test_null : null,
    test_undefined : undefined,
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

person.greet();
console.log(person["dob"]);
*/

//Converting person object to JSON

//var person_json = JSON.stringify(person);
//console.log(person_json);

//!!!!Warning!!!! If we write raw JSON in our js file it will work as a object not JSON

//this code pull the data from json file which is other json folder or server
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        //save the json data in a variable
        var data = this.responseText;
        //console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jsonData(json_obj){
    //console.log(json_obj);
    var js_obj = JSON.parse(json_obj);
    //console.log(js_obj);

    //iterate the json object
    for(x in js_obj.persons)
    {
        var person = js_obj.persons;
        //console.log(person[x]);
        //Now we will iterate the person object
        for(y in person[x])
        {
            console.log(person[x][y]);
        }
    }
}