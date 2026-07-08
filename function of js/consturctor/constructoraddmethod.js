function person(first,last,age,eye)
{
    this.firstname=first ;
    this.lastname=last;
    this.age=age;
    this.eye=eye;
    this.name= this.firstname+" "+this.lastname
    

}
const my_father=new person("Nishant","Bikundia",20,"brown");
console.log("my father is "+my_father.name);