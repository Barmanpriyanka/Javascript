
//window object -window object represents an open window in a browser.it is brower's object (not javascript object)
//and is automatic created by browser.
//it is a global object with lots of properties and methods.
//DOM-Document object model
//console.log-print
//console.dir-> document ->used to print properties and methods of documents.
//when a web page is loaded,the browser creates a documents object model(dom) of the page

let heading1=document.getElementById("heading1");
console.dir(heading1);
let heading2=document.getElementsByClassName("heading2");
console.dir(heading2);
console.log(heading2);
let parahs=document.getElementsByTagName("p");
console.dir(parahs);
console.log(parahs);
let elements=document.querySelector("p");
console.dir(elements);
let allelements=document.querySelectorAll("p");
console.dir(elements);

let ele=document.querySelector(".heading2");
console.dir(ele);
let el=document.querySelector(".heading1");
console.dir(el);





