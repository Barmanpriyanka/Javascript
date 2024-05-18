//function-block of code which perform perticular task ,can be invoked wheneveris needed.
//funciton functionname()
//{
    //do some work;
//}
function myfunction(name,age)
{
    console.log(name,age);
    
}
myfunction("priyanka",20);
function sum(x,y)  //function parameters are valid inside the function block only .
{
    let z=x+y;
    console.log(z);
}

sum(34,78);
 //arrow function 
 const arrowsum=(a,b)=>{
    console.log(a+b);
    
 }
prompt("Enter your name");