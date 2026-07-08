// we can invoke the static methods or variables with class name without creating the object
class fruit
{
    constructor(name)
    {
        this.name=name
    }
    static fruit1(name_of_fruit)
    {
        let taste=name_of_fruit=="apple"?"sweet":"dont know the taste of the fruit"
        console.log(taste);
    }

}
fruit.fruit1("apple")