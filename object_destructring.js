const personsInfo ={
    fName:"Saif",
    lName:"rehman",
    age:23,
    rollNo:"bc180400133"
}
const {fName,lName,age,rollNo} = personsInfo;
console.log(`my name is ${fName} ${lName} i am ${age} year old and my uni id is ${rollNo}`)
const books = { 
    title: 'Book One', 
    genre: 'Fiction', 
    publish: 1981, 
    edition: 2004 
}



  const {title, genre, publish, edition} = books;
  console.log(`i love this ${title}
  this book is about ${genre}
  ${title} publish in ${publish}
  and now the edition of ${title} is ${edition}
  `)