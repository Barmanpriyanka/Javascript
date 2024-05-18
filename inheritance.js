class person
{
     work()
     {
        console.log("do  nothing");
     }

    constructor()

    {
        console.log("constructor");
    }

    
    eat()
    {
        console.log("eat");
        
    }
    sleep()
    {
        console.log("sleep");
        
    }
}
class doctor extends person
{
    work()
    {
        console.log("does checkup daily for the patients");
    }
}

let priyanka = new doctor();//constructor
console.log(priyanka);


//super keyword

class person2{
    constructor(name)
    {
        console.log("  enter parent constructor");
        this.species = "homo sapiens";
    }

  eat()
  {
    console.log("eat");
  }
}
class engineer extends person2
{
    constructor(name)
    {
        console.log("enter child constructor");
        super(name);
       //this.branch=branch;
       console.log("exit the child constructor");


    }
     work()
     {
        super.eat();
        console.log("does work");
     }
}

let engobj=new engineer("name");
console.log(engobj);





