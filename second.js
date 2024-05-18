 const profile={

     username: "@priyankaBarman",
     followers: 123,
     post: 189,
     following: 4,

 };

// // this will the print the type of the profile which is object
 console.log(typeof profile);
// // Arithmetic operator
 let a=5;
let b=6;
console.log(a+b);
console.log(a-b);
 console.log(a*b);
 console.log(a/b);
 console.log(a%b);
console.log(a**b);//a^b
 console.log(a+b);
 console.log(a+b);

// //uninary operator
// //post uninary operator
console.log(a);
 console.log(b);

 console.log("a++=",a++);//5
 console.log("b++=",b++);//6
 console.log("a--=",a--);//5
 console.log("b--=",b--);//6

// //preunianry operator

console.log("b++=",++b);//7
 console.log("++a=",++a);//6
 console.log("--a=",--a);//4
 console.log("--b=",--b);//5
// //ocnditional operator
// //if sattement 

 let age=25;
 if(age>18)
    {
         console.log("you can vote");
     }
  if(age<18)
  {
    console.log("you cannot vote");
 }

let mode="dark";
let color;
if(mode==="dark")
 {
     color="black";
 }
 if(mode==="light")
{
    color="white";
 }
 console.log(color);

// //if else statement

 let mode2="dark";
 let color2;
 if(mode2==="dark")
{
     color2="black";
 }
 else{
    color2=white;
 }
 console.log(color2);

  let  age1 =25;
  if(age1>=26)
 {
     console.log("vote");
  }
 else{
    console.log("not vote");
 }


    //odd even no 
  let number=25;
  if(number%2===0)
   {
    console.log("even");

   }
   else{
    console.log("odd");
   }


   let gamenum=23;
  let usernumber =prompt("guess the number");
  while(gamenum!=usernumber)
  {
   usernumber =prompt("guess the number");
  }
  console.log("congratulation ,you guessed the right number");


