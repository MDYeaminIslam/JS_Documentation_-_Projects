//callback function

//This is a callback function which is delay the execution time of the function
/*
setTimeout(function(){
    console.log("This is a callback function");

},2000);
*/
 // here 2000 is 2 seconds that means the function will execute after 2 seconds.

/*
let persons = [
    {firstName: "Simanta", lastName: "Paul"},
    {firstName: "Fazle", lastName: "Rahat"}
]

function createPerson(person, getPerson) {
   setTimeout(function() {
       persons.push(person);
       getPerson();
   }, 2000); 
}

//This is asynchronous function
function getPerson() {
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        }); 
        document.getElementById('output').innerHTML = output;
    }, 1000);
}

createPerson({firstName:"Hasan", lastName: "Chy"}, getPerson);
*/


//Promises
let persons = [
    {firstName: "Simanta", lastName: "Paul"},
    {firstName: "Fazle", lastName: "Rahat"}
]

function createPerson(person) {
    let prom = new Promise(function(resolve, reject){
        persons.push(person);
        let error = true; // create a error variable for testing purpose.
        if (!error){
            resolve();//resolve () wants keep the promise which is persons.push(person)
        }
        else{
            reject("Error: Something went wrong");
        }
    });
    return prom;
}

//This is asynchronous function
function getPerson() {
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        }); 
        document.getElementById('output').innerHTML = output;
    }, 1000);
}

createPerson({firstName:"Hasan", lastName: "Chy"}).then(getPerson).catch(function(err){
    console.log(err);
});