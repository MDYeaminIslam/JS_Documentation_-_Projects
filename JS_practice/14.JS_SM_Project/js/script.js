//Define UI element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

//Define event listeners
form.addEventListener('submit', addTask);//here "submit" is a event type and addTask is a function

//Define Functions
//Add Task
function addTask(e){
    if (taskInput.value === ''){
        alert('Add a task!');
    }else{
        //create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));//here we add task in the li element

        taskInput.appendChild(li); //here we add li element in the taskList
        taskInput.value = " ";
        console.log(taskInput.value);
        console.log("Hello")

    }
}