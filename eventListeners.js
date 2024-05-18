let b1=document.querySelector("#b1");
/*b1.addEventListener("click",(evt)=>{

    console.log("b1 was cliked");
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt);

}
)
b1.addEventListener("click",()=>{

    console.log("b1 was cliked handler 2");

}
)*/


b1.addEventListener("click",()=>{

    console.log("b1 was clicked-handler 1")
})
b1.addEventListener("click",()=>{

    console.log("b1 was clicked-handler 2")
})

const handler3=()=>{

    console.log("b1 was clicked-handler 3");
};

b1.addEventListener("click",handler3);




b1.addEventListener("click",()=>{

    console.log("b1 was clicked-handler 4")
})
b1.removeEventListener("click",handler3);

