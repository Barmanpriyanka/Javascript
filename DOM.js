console.log(window);
window.console.log("hello");
window.alert("hello");
//window object -window object represents an open window in a browser.it is brower's object (not javascript object)
//and is automatic created by browser.
//it is a global object with lots of properties and methods.
//DOM-Document object model
//console.log-print
//console.dir-> document ->used to print properties and methods of documents.
//when a web page is loaded,the browser creates a documents object model(dom) of the page

let heading=document.getElementById("heading");
console.dir(heading);