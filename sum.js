
function sum(x,y)  
{
    return x+y;
}
console.log(sum(5,7));

function swap(a,b)
{
    let temp;
    console.log("before swaping  value of a",a);
    console.log("before swaping  value of b",b);
    temp=a;
    a=b;
    b=temp;
    console.log("after swaping value of a",a);
    console.log("after swaping value of b",b);

}
swap(4,5);

