//events-the change in the state of an object is known as an event
//eg mouse click
let b1=document.querySelector("#b1");
b1.onclick=(e)=>
{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);


    /*console.log("b1 was clicked");
    let a=25;
    a++;
    console.log(a);*/
}
let div=document.querySelector("div");
div.onmouseover=(e)=>
{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);

    //console.log("you are on div");
}
