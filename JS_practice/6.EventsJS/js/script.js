//Events of JS


//Event Listener
/*
let btn = document.getElementById('sample-btn');
console.log(btn);

*/

//document.getElementById('sample-btn').addEventListener('click',message); //here addEventListener is a function and click is a action and message is a callback function and we'll not use () in callback function.If we want to use onclick in js then simply remove on from click and use it.same goes to every event in js.

/*
function message(){
    console.log("Button Clicked");
}

*/
/*
function message(e){
    let val = e;
    val = e.target;
    val = e.target.id;
    val = e.timeStamp; //this show the clicked time of btn
    val = e.type; //this show the type of event
    val = e.clientY; //this show the position of y axis
    val = e.clientX; //this show the position of x axis

    val = e.offsetY; //this show the position of y axis from the btn
    console.log(val);
}

*/
/*
function message(){
    console.log("Mouse Over Function Called")
}
*/

//working with another event
document.querySelector('#name').addEventListener('focus',test); //here addEventListener is a function and click is a action and test is a callback function and we'll not use () in callback function.If we want to use onclick in js then simply remove on from click and use it.same goes to every event in js.
document.querySelector('#name').addEventListener('keyup',test2);

function test(e){
    this.style.background = 'red';
    this.style.color = 'white';
}

function test2(e){
    document.getElementById("newP").innerText = this.value; //this.value means the value of the input field and we take this value and put it in the p tag
}


