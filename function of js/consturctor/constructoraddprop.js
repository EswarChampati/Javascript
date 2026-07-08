function book(name,pages,noofcopies,cost,author,publishedyear)
{
     this.name=name
     this.pages=pages
     this.noofcopies=noofcopies
     this.cost=cost
     this.author=author
     this.publishedyear=publishedyear    
}
book.language="English"
let bitcoin=new book("mastering of blockchain",400,67800,"2k","james bond",2009)
console.log(bitcoin)
console.log("the language of the book in which printed"+book.language)