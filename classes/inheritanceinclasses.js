class person
{
    constructor(name,age,desig,high_qual,city,nationality,salary,gender,status)
    {
        this.name=name
        this.age=age
        this.desig=desig
        this.high_qual=high_qual 
        this.city=city
        this.nationality=nationality    
        this.salary=salary
        this.gender=gender     
        this.status=status
    }
    getname()
    {
        console.log(this.name)
        console.log(this.age)
        console.log(this.desig)
        console.log(this.high_qual)
        console.log(this.city)
        // console.log(this.nationality)
        // console.log(this.salary)
        // console.log(this.gender)
        // console.log(this.status)
    }
}
class student extends person
{
    constructor(name,age,high_qual,desig,city)
    {
        super(name,age,high_qual,desig,city)
    }
    getdetails()
    {
        //  console.log(this.myname)
        //  console.log(this.myage)
        //  console.log(this.myhigh_qual)
        //  console.log(this.mydesig)
        //  console.log(this.mycity)
        super.getname()
    }
}
let studentofnitap=new student("eswar champati",19,"12 class","topper","bhimavaram");
studentofnitap.getdetails()