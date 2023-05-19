//Error Handling

//

console.log("Before Error");

try{
    //here we write the code which we want to test
    test();
}
catch(error){
    //here we write the code which we want to execute if the above code throws an error
    console.log(error);
    console.log(error.message);//see the error message in console
    console.log(error.name);
}
finally{
    console.log("Finally Block");
    //here we write the code which we want to execute in any case
}
console.log("After Error");