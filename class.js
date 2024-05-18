class tayotacar
{
    constructor(brand)
    {
        console.log("creating new onject");
        this.brand=brand;
    }
    start()
    {
        console.log("start");
    }
    stop()
    {
        console.log("stop");

    }

};
let fortuner =new tayotacar("fortuner");
console.log(fortuner);
let lexus=new tayotacar();
console.log(lexus);