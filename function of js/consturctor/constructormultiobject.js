function person(name,age,dob,status,nationality,salary,technology)
{
   this.name=name
   this.age=age
   this.dob=dob
   this.status=status
   this.nationality=nationality
   this.salary=salary
   this.technology=technology
}

let person1=new person("navi nreddy",30,"27-02-2004","married","indian","10lakhs","blockchain")
console.log(person1);

let person2=new person("sanjeevan",23,"23-4-1999","unmarried","indian","2lakhs","data science")
console.log(person2)