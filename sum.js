
function sum(x,y)  
{
    return x+y;
}
console.log(sum(5,7));

function swap(a,b)
{
    
    console.log("before swaping  value of a and b are: ",a,b);
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("after swaping value of a and b are :",a,b);
    

}
swap(4,5);

