class person
{
    constructor(name,age,desig,high_qual,city,nationality,salary,gender="male",status="married")  //defualt values should be at the last of the constuctor
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
        console.log(this.nationality)
        console.log(this.salary)
        console.log(this.gender)
        console.log(this.status)
    }
}
let person1=new person("sanjeevan",23,"blockkchain","btech","banguluru","indian",230000)
person1.getname()
