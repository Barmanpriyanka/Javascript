
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
//querySelector   return first elements
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
//tagName-returns tag for the element node
//let tagname=ele.tagName;
//console.dir(tagname);
//text,comment,element
//innerText-returns the text content of the element and all its children.
let div=document.querySelector("div").innerText;
console.dir(div);
//innerHTML-returns the plain text or Html contents in the elements
let div1=document.querySelector("div").innerHTML;
console.log(div1);

let oldheading=document.querySelector("h4");
console.dir(oldheading);
//textContent-returns textual content even for hidden elements


//attributes
//get attributes-getAttribute-getAttribute(attr) to get the attribute value
//set attributes -setAttributes -setAttribute(attr,value)
let d=document.querySelector("div");
console.log(d);
let value=d.getAttribute("id");
console.log(value);
let para=document.querySelector("p");
console.log(para);
let value2=para.getAttribute("id");
console.log(value2);
//setAttributes
let para2=document.querySelector("p");
console.log(para2.setAttribute("class","paragraph"));
let d2=document.querySelector("div");
console.log(d2.setAttribute("id","newBox"));

let div3=document.querySelector("div");
div3.style.backgroundColor="pink";
div3.style.fontSize="26px";
div3.innerText = "hello!";//change the text written in div 

//insert elements or add element 
//create 
//add 
let newBtn=document.createElement("button");
newBtn=innerText="click me";
console.log(newBtn);
//node.append(el);adds at he end of the (inside)
//Node.prepend(el)//adds at hte start of the node(inside)
//node.before(el)//ads before the node(outside)
//node.after(el)//adds after the node (outside)

// delete.remove()//remove the  node

