//let val;
//val = this; //here this is window object which is indicating the global object and hold entire DOM
//val = window; //same as above
//val = window.document; //same as above
//val = document; //same as above
//val = document.all; //all the tags will be shown in array
//val = document.all[0]; //html tag 
//val = document.all[1]; //head tag
//val = document.all.length; //length of all tags
//val = document.head; //head tag
//val = document.body; //body tag
//val = document.doctype; //<!DOCTYPE html>
//val = document.domain; //
//val = document.URL; //http://
//val = document.characterSet; //UTF-8
//val = document.contentType; //text/html

//val = document.forms; //HTMLCollection(2) [form#task-form, form#add-form, task-form: form#task-form, add-form: form#add-form]
//val = document.forms[0]; 
//val = document.forms[0].method; 
//val = document.forms[0].action; 

//val = document.links; //that return all the links in the page as a array
//let linkArr = Array.from(link); //convert HTMLCollection to array and here only we can use array methods. same goes to others

//val = document.links[0];
//val = document.links[0].href;

//val = document.images; //HTMLCollection []
//val = document.scripts; //HTMLCollection(3) [script, script, script]
//val = document.scripts[0].src; //http://localhost:5500/js/script.js


//console.log(val);

//***DOM Selectors for Single Elements***

//document.getElementById()
//getting an element
//let val;
//val = document.getElementById("document-title");
//val = document.getElementById("document-title").id;
//val = document.getElementById("document-title").className;

//changing style
//val = document.getElementById("document-title").style.background = "#333";
//val = document.getElementById("document-title").style.color = "#fff";
//val = document.getElementById("document-title").style.padding = "10px";
//val = document.getElementById("document-title").style.display = "block";


//changing content
//val = document.getElementById("document-title").textContent = "New content";
////val = document.getElementById("document-title").innerText = "New content";
//val = document.getElementById("document-title").innerHTML = "<i>Again new content</i>"

//we can also use variable to change the content
//val = document.getElementById("document-title");
//val.innerText = "New content again";


//document.querySelector()
//val = document.querySelector("#document-title"); //if we want to call by id we have to use # and if we want to call by class we have to use .
//val = document.querySelector(".title-class"); //calling by class name

//val = document.querySelector("h3"); //calling by tag name

//val = document.querySelector("ol li");
//val.style.background = "red";
//val.style.color = 'white';
//val = document.querySelector('li:last-child').style.background = "tomato";
//val = document.querySelector('li:nth-child(2)');//accessing nth position element in the list.It could be 1st,2nd,3rd or 4th.


// Multiselector 
// document.getElementByClassName()
//let list = document.getElementsByClassName('sample-class');
//here list will all the tags which has class name sample-clas. we can access them using list[index];

/*
list[0].style.background = 'aqua';
list[0].style.color = "tomato";
list[0].style.padding = '10px';
list[0].textContent = "Hello Word Programmer";
*/



// document.getElementByTagName();
/*
list = document.getElementsByTagName('li');
list = document.querySelector('ol').getElementsByTagName('li'); //first of all we select ol and than select li tag holders.here list also collects values as a array.if want to iterate them than convert them into useable array.

let newList = Array.from(list);
newList.forEach(function(item){
    console.log(item);
});
*/



//document.querySelectorAll()
//calling id -> #idName
//calling class -> .clssName
//callling tageName -> nothing

/*
lis = document.querySelectorAll('ol li'); //here all the values will store as a array and do not need to convert them into array
lis.forEach(function(item){
    console.log(item);
});
*/


//accessing element by odd and even number position
/*
let lisodd = document.querySelectorAll('li:nth-child(odd)');

let liseven = document.querySelectorAll('li:nth-child(even)');

lisodd.forEach(function(item){
    item.style.background = "gray";
    item.style.color = "white";
});

liseven.forEach(function(item){
    item.style.background = "red";
    item.style.color = "aqua";
});
*/

//Traversing the DOM

let val;
let list = document.querySelector('ul');
let listItem = document.querySelector('ul li:last-child');

//Get the child nodes
val = list;
val = list.childNodes; //return all the child nodes as a array
val = list.childNodes[0]; //return first child node
val = list.childNodes[1].nodeName; //return second child node name
val = list.childNodes[1].nodeType; //return second child node type
/*
Here nodeType return value as a number
1 - Element
2 - Attribute (deprecated)
3 - Text node
8 - Comment
9 - Document itself
10 - Doctype
*/
//If we want to see only element nodes and no text element than we can use children property
val = list.children; //return all the child nodes as a array
val = list.children[1]; //return second child node
val.textContent = "Hi this is changed by traversing the DOM";

val = list.children[1].children[0]; //return first child node of second child node
val = list.firstChild; //return first child node
val = list.firstElementChild; //return first child element node
val = list.lastChild; //return last child node
val = list.lastElementChild; //return last child element node

val = list.childElementCount; //return total number of child element

val = listItem;
val = listItem.parentElement; //return parent element node
val = listItem.parentNode; //return parent element node

val = listItem.nextSibling.nextSibling; //return next element node
console.log(val);
