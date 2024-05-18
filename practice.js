let data ="secrete clientInformation";
class user
{
    constructor(name,email)
    {
         this.name=name;
         this.email=email;
    }
    
    viewData()
    {
        console.log("data=",data);
        
    }

}
let student1=new user("priynaka","priyankabarman1604@");
let student2=new user("sonam","abc@");
console.log(student1);
console.log(student2);



//question two
class user{

constructor()
{
    
}


}

class admin extends user
{
    editData()
    {

    }
}

