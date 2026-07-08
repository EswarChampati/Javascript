class car
{
    constructor(name,brand,country,total_sales)
    {
        this.name=name;
        this.brand=brand
        this.country=country
        this.total_sales=total_sales
    }
    getdetails()
    {
        console.log(`car name is ${this.name}`)
        console.log(`car brand is ${this.brand}`)
        console.log(`car is made in ${this.country}`)
        console.log(`total sales of the car ${this.total_sales}`)
    }
}
class cars extends car
{
      constructor(name,brand,country,total_sales,engine,transmision,
        suspension,seating_capacity,price,year_of_launch)
      {
        super(name,brand,country,total_sales)
        this.engine=engine
        this.transmision=transmision
        this.suspension=suspension
        this.seating_capacity=seating_capacity
        this.price=price
        this.year_of_launch=year_of_launch
      }
     getdetails()
     {
        super.getdetails()
        console.log(`type of the engine ${this.engine}`)
        console.log(`transmission of the car is ${this.transmision}`)
        console.log(`suspension of the car is ${this.suspension}`)
        console.log(`number of the seats in the car are ${this.seating_capacity}`)
        console.log(`price of the car is ${this.price}`)
        console.log(`car was launched in the year of ${this.year_of_launch}`)
     }
}
let cars1=new cars("bmw","new one","asia",1000,"v8","less transmission","down",4,"1croce",20987675)
cars1.getdetails()