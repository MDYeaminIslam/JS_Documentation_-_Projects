/*
// Adding Elements to the DOM
// Create Element

let olItem = document.createElement('li');
olItem.className = "a new another-class";
olItem.id = "new-item";

//Add attribute
olItem.setAttribute('title', 'A title to new Element'); //here title is attribute and A title to new Element is value of that attribute.
//Appendchild will create the element to the newly created list item
olItem.appendChild(document.createTextNode('JavaScript')); //here we create a text node and append it to the olItem

document.querySelector('ol').appendChild(olItem); //Finally we append the olItem to the ol by this line

let ulItem = document.createElement('li');
let link = document.createElement('a'); //creating a link that's why we use "a" tag
link.appendChild(document.createTextNode('Instagram')); //here we create a text node and append it to the link
link.setAttribute('href', 'https://www.instagram.com/'); //here title is attribute and A title to new Element is value of that attribute.
ulItem.appendChild(link); //here we append the link to the ulItem
document.querySelector('ul').appendChild(ulItem); //Finally we append the ulItem to the ul by this line
console.log(ulItem);
//console.log(link);

*/


//Replacing Element
/*
let newheading = document.createElement('h1');
newheading.appendChild(document.createTextNode('H1 New Heading'));
newheading.className = 'sample-class';//adding class name to newheading
let oldheading = document.querySelector('h3');

let parent = document.querySelector('.container'); //here we select the parent of the oldheading

//replacing the oldheading with newheading
parent.replaceChild(newheading, oldheading);

console.log(newheading);
console.log(oldheading);
*/


//Removing Element
let listItem = document.querySelectorAll('li');
let list = document.querySelector('ul');//selecting the parent of the list item
listItem[0].remove(); //removing the first list item
//list.removeChild(listItem[3]); //removing the fourth list item
//Adding new classes to the list item
list.classList.add('test'); //this will add a class named test to the list and don't overwrite the previous classes
list.classList.remove('test'); //this will remove the class named test from the list
let val = list.hasAttribute('sample-class'); //this will check if the list has a attribute named title or not and return true or false
console.log(val);
console.log(list);
console.log(listItem);

