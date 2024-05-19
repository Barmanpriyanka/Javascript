
//window object -window object represents an open window in a browser.it is brower's object (not javascript object)
//and is automatic created by browser.
//it is a global object with lots of properties and methods.
//DOM-Document object model
//console.log-print
//console.dir-> document ->used to print properties and methods of documents.
//when a web page is loaded,the browser creates a documents object model(dom) of the page


//getElementById
let heading1=document.getElementById("heading1");
console.dir(heading1);
//getElemetsByClassName
let heading2=document.getElementsByClassName("heading2");
console.dir(heading2);
console.log(heading2);
//getElementByTagName
let parahs=document.getElementsByTagName("p");
console.dir(parahs);
console.log(parahs);
//querySelector   retuen first elements
let elements=document.querySelector("p");
console.dir(elements);
//querySelectorAll  returns all elements
let allelements=document.querySelectorAll("p");
console.dir(elements);

//querySelector by class name 
let ele=document.querySelector(".heading2");
console.dir(ele);
let el=document.querySelector(".heading1");
console.dir(el);
//tagName-retuen tag for the element node
let tagname=ele.tagName;
console.dir(tagname);
//text,comment,element
//innerText-returns the text content of the element and all its children.
let div=document.querySelector("div").innerText;
console.dir(div);
//innerHTML-returns the plain text or Html contents in the elements
let div1=document.querySelector("div").innerHTML;
console.log(div1);






