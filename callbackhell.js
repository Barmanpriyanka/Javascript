function getData(dataId,getnextdata)
{

    return new Promise(()=>
{
    setTimeout(()=>{

        console.log("data",dataId);
        if(getnextdata)
        {
            getnextdata();
        }

    },5000);
});
   
}


/*getData(1,()=>{
    getData(2);
});*/
