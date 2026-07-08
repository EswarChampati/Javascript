 class person
 {
    constructor(name)
    {
        this.name=name
        this.technology="blockchain"
    }
    getdeatils()
    {
        console.log(this.name)
        console.log(this.technology)
    }
 }
 class student extends person
 {
    constructor(name)
    {
        super(name)
         this.technology="java"
        
    }
 }
 obj1=new person("navin reddy")
 obj2=new student("nishant")
 obj1.getdeatils()
 obj2.getdeatils()