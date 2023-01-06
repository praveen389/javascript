/*
DOM (DOCUMENT OBJECT MODEL)

When a web page is loaded , the browser creates a 
document object model of  the page

Dom is constructed as a tree of objects.

Dom defines for acessing documents

Dom is actually a connection point betweenHTML document and javascript code.

Dom allows js to access HTML elements and styles to manupulate them

javascript can change all HTML attribute , CSS Styles in the page.

it can remove existing html elements and attributes.

DOM is automatically created by the browser as soon as 
HTML Page load and it is stored in a tree structure.

Dom is not a Javascript.

DOM Manipulation or DOM Method and properties are not part of javascript

DOM and DOM Methods are part of a web API'S.

Web API'S are like libraries that browser implements and we can acesses from our js code.

web API 's are like libraries that browser implements and we can acesses from our JS Code

Web API are written in js , and it is automatically available to us

In the DOM ,all the HTML elements are defined as a objects.

*/

// selecting methods => Getting HTML elements by their class

const heading = document.getElementByClassName("title");

// console.log(heading);

// selecting method => Getting HTML elements by their ID

let animal_image = document.getElementById("animal-img");

// console.log(animal_image);

// selecting all elements

let items =document.querySelectorAll(".item");
// console.log(items);

let animalImg =document.querySelector("#animal-img");

console.log(animalImg);


