//Fetch API
// Fetch API uses JS promises

document.getElementById("get_data").addEventListener("click",getData);

function getData(){
    fetch("https://official-joke-api.appspot.com/random_joke").then(function(res){
        //here we are getting the response from the url
        //if we need data then we need to use .json() method: console.log(res.text());
        //if we need text then we need to use .text() method
        //console.log(res.json());
        //we can simpllify the above code as below
        //.then(res => res.json())
        return res.json();
    }).then(function(data){
        //here we are getting the data from the response
        console.log(data);
        //we can simpllify the above code as below
        //.then(data => {console.log(data)})
    }).catch(function(err){
        //if there is any error then it will be catched here
        console.log(err);
        //we can simpllify the above code as below
        //.catch(err => {console.log(data)})
    }); //this fetch() collects data from the url
}
