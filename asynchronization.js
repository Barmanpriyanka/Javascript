/*setTimeout(()=>
{
    console.log("hello");
},4000);
console.log("one");
console.log("one");
setTimeout(()=>
{
    console.log("priyanka barman");
},5000)
console.log("three ");
console.log("four");*/

/*function sum(a,b)
{
    console.log(a+b);
}*/

/*function calculator(a,b,sumcallback)
{
    sumcallback(a,b);
}*/
//calculator(1,2,sum);

const hello=()=>
{
    console.log("hello");
}

setTimeout(hello,5000);

function hello2(){
    console.log("hello");
}
setTimeout(hello2,5000);

