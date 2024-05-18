const student = {
    fullname:"priyanka",
    percentage:85,
    printmarks:function()
    {
      console.log("marks are",this.percentage);

    },
};

const employee={
    caltax()
    {
        console.log("tax is 5%");
    }
};

 const karan={
    salary:50000,
 };

 karan.__proto__= employee;