//arrays in js
//collection of  item and arrays are mutable
let heroes=["ironman","hulk","thar","batman"];
let marks=[97,67,89,45,50];
// console.log(marks);
// console.log(marks.length);
// console.log(marks[1]);
for(let i=0;i<5;i++)
{
    console.log(marks[i]);
}
for(let i of marks)
{
    console.log(i);
}


let marks2=[56,89,34,90,96,70];
let sum=0;
for(let i of marks)
{
    sum=sum+i;
}
console.log(`sum of the marks is =${sum}`);
console.log(`average of the marks is ${sum/(marks.length)}`);


let items=[250,645,300,900,50];
// for(let i=0;i<items.length;i++)
// {

// console.log(`the value at ${i} =${items[i]}`);
//    let  offer=items[i]/10;
//   items[i]=items[i]-offer;
//   console.log(`value after offer =${items[i]}`);

// }/


 for(let i=0;i<items.length;i++)
 {
        let offer=items[i]/10;
        items[i]=items[i]-offer;
 }
console.log(items);
//array methods 
//push():add to add 
//Pop():delete from end & return 
//toString():converts array to string

let fooditems=["potatao","apple","lichi","tomato"];
fooditems.push("chips","paneer","burger");
console.log(fooditems);
let deletedvalue=fooditems.pop();
console.log(fooditems);
console.log(deletedvalue);
console.log(fooditems);
console.log(fooditems.toString());
let data=[34,23,67,89,45];
console.log(data.toString());
console.log(data);
//concat  of two string

let marvelHeroes=["thor","spiderman","ironman"];
let dcHeroes=["superman","batman"];
let Heroes=marvelHeroes.concat(dcHeroes);
console.log(Heroes);
//unshift -add to start of the array 
marvelHeroes.unshift("antman");
console.log(marvelHeroes);
//shift -delete from start of the array in js
let val=marvelHeroes.shift();
console.log("deleted",val);
//slice method
let h=["thor","spiderman","ironman","superman","batman"];
console.log(h.slice(1,3));
//splice-used to remove ,add ,repalce in array
let k=[2,3,4,6,7,78,9];
k.splice(2,2,34,56);
console.log(k);
//practice question 
let company=["Bloomberg","microsoft","uber","google","IBM","netfix"];
company.shift();
console.log(company);
company.splice(1,1,"ola");
company.push("Amazon");
console.log(company);


