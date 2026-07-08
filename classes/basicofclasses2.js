class person
{
    constructor(name,age,desig,high_qual,city,nationality,salary,gender,status)
    {
        this.abc=age
        this.desig=desig
        this.high_qual=high_qual
               //order doesnt matter which was declared in consturctor 
        this.nationality=nationality    
        this.City=city
        this.salary=salary
        this.gender=gender     
        this.status=status
        this.name=name
    }
    getname()
    {
        console.log(this.name)
        console.log(this.abc)
        console.log(this.desig)
        console.log(this.high_qual)
        console.log(this.City)
        console.log(this.nationality)
        console.log(this.salary)
        console.log(this.gender)
        console.log(this.status)
    }
}
let person1=new person("sanjeevan",23,"blockkchain","btech","banguluru","indian",230000,"male","unmarried")
person1.getname()
