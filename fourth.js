 //loops in java - loops are used to excute  a piece of code again and again
//  for(let i=1;i<=100000;i++)
//  {
//    console.log("priyanka barman");

//  }
let sum=0;
for(let i=1;i<=5;i++)
{
    sum=sum+i;
}
console.log("sum is",sum);
console.log("loop has ended");
//while loop 

let i=1;
 while(i<=5)
 {
  console.log("priyanka");
  i++;
 }
 //do while loop
 let j=20;
 do{
 
    console.log("sonam barman");
    j++;
 }
 while(j<=10);

 //for -of loop  applt  loop for  string and array 
 //"tony"

 let str="apnacollege";
 let size=0;
 for(let i of str)
 {
   console.log("i=",i);
   size++;
 }
 console.log(size);
 //for -in loops //objects

 let student=
 {
  name:"rahul kumar",
  age:21,
  cgpa:7.5,
  isspass:true
 }
 
 for( let key in student)
 {
     console.log("key=",key,"values=",student[key]);
 }
//print all even numbers from 0 to  100

for(let i=1;i<=100;i++)
{
  if(i%2===0){
  console.log(i);
  }
}


// stirng in js
//string is the sequence of characters used to represent text 
let name="priyanka barman";
let name2="sonam  barman";
console.log(name.length);
console.log(name2.length);
console.log(name[4]);
//template literals
let sentence=`this is a template liberals`;
console.log( typeof sentence);
let obj=
{
  item:"pen",
  price:10,
};
console.log(obj.item,obj.price);
let output=`the cost of ${obj.item} is ${obj.price } rupees `;
console.log(output);
//espace character 
console.log("Priyanka\nBarman");
let st="Priyanka\tBarman";
console.log(st.length);
//string mehtods in js 
//str.toUpperCase();
//str.toLowerCase();
//str.trim();
let ptr="    satyam barman   ";
console.log(ptr.toUpperCase());
let mtr="PRIYANKA BARMAN";
console.log(mtr.toLowerCase());
console.log(ptr);
console.log(ptr.trim());
console.log(mtr.slice(1,5));
console.log(ptr.concat(mtr));  
console.log(mtr.replaceAll("A","k"));
console.log(mtr.charAt(0));
let k=prompt("enter your fullname");
console.log("@"+k+k.length);

