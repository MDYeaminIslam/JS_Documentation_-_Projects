//Asynchronous Programming
//AJAX - Asynchronous JavaScript and XML
//asynchronous - doesn't have to wait for the previous task to finish
//Get data without reloading the page

document.getElementById('get_data').addEventListener('click',loadData);

function loadData(){
    //Create XHR Object -> (HML HTTP Request)
    let xhr = new XMLHttpRequest(); //i.creating an object of XMLHttpRequest class

    xhr.open('GET','data.txt',true);
    //calling the data from where we want to get the data 
    //here open() takes 3 parameters - 1. type of request 2. file name 3. true for asynchronous
    
    //than load the data using onload
    xhr.onload = function(){
        //HTTP statuses
        //200: "OK"
        //403: "Forbidden"
        //404: "Not Found"
        if(this.status === 200){
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`;
        }
    }
    xhr.send(); // send() used to send the request
    console.log(xhr);
}