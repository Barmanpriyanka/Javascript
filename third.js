//else if statement 

   let mode="silver";
   let color;
   if(mode==="dark")
   {
       color="black";
   
   }
   else if(mode==="blue")
   {
       color="blue";
   
   }
   else if(mode==="pink")
   {
       color="pink";
   }
   else{

       color="white";
   }

   console.log(color);
   //ternary operator takes three operands 

   let age =25;
  let result= age>18?"adult":"not adult";
  console.log(result);
  //MDS Docs
  //switch  statement homework 
  let number=prompt("Enter the number");
  if(number<=100&& number>=80)
  {
    console.log("A");
  }
  else if(number<=70 && number>=89)
    console.log("B");
  else if(number<=60 && number>=69)
  {
    console.log("c");
  }
  else if(number<=50 && number>=59)
  {
    console.log("d");

  }
  else{
    console.log("F");

  }

 







