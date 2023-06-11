const express=require("express");
const bodyParser=require("body-parser");
//database
const database= require("./database");
const booky=express();

booky.use(bodyParser.urlencoded({extended:true}));
booky.use(bodyParser.json());
///////////////////books Api ////////////////


/* Route         /
Description      get all books
Access           public
parameters       None
methods          get
 */

booky.get("/",(req,res)=>{
  return res.json({books:database.books});
})

/* Route         /is
Description      get specifici books on isbn
Access           public
parameters       isbn
methods          get
 */

booky.get("/is/:isbn",(req,res)=>{
const getSpecificBook=database.books.filter(
(book) =>book.ISBN === req.params.isbn
);
if(getSpecificBook.length === 0){
  return res.json({error:`No books found for isbn of ${req.params.isbn}`})
}
return res.json({book:getSpecificBook})
})

/* Route         /C
Description      get book by its category
Access           public
parameters       category
methods          get
 */

booky.get("/C/:category",(req,res)=>{
  const getSpecificBook=database.books.filter(
    (book)=>book.category.includes(req.params.category)
  )
  if(getSpecificBook.length===0){
    return res.json({Error:`No books found for such ${req.params.category} category`})
  }
  return res.json({Book:getSpecificBook})
})

/* Route         /lng
Description      get book by its language
Access           public
parameters       language
methods          get
 */

booky.get("/lng/:language",(req,res)=>{
  const getSpecificBook=database.books.filter(
    (book)=>book.language === req.params.language
  );
  if(getSpecificBook.length === 0){
    return res.json({Error:`No Such language book found ${ req.params.language}`})
  }
  return res.json({book:getSpecificBook})
})

//////////////////////////////////Authors Api////

/* Route         /author
Description      get all authors list
Access           public
parameters       None
methods          get
 */

 booky.get("/author",(req,res)=>{
   return res.json({Authors:database.authors})
 })

 /* Route         /nm
 Description      get specific authors list
 Access           public
 parameters       Name
 methods          get
  */

booky.get("/nm/:Name",(req,res)=>{
  const getSpecificAuthor=database.authors.filter(
    (author)=> author.name === req.params.Name
  );
if(getSpecificAuthor.length === 0){
    return res.json({error:`no ${req.params.Name} author found`})
  }
  return res.json({author:getSpecificAuthor});
})


/* Route         /list
Description      get author based on the book.
Access           public
parameters       books
methods          get
 */

booky.get("/list/:books",(req,res)=>{
  const getSpecificAuthor=database.authors.filter(
    (author)=> author.books.includes(req.params.books)
  )
  if(getSpecificAuthor.length===0){
    return res.json({Error:`No such authors based on books ${req.params.books}`})
  }
  return res.json({author:getSpecificAuthor});
})


/////////////////////publications//////////////////////////////////

/* Route         /publication
Description      get all the publications books.
Access           public
parameters       None
methods          get
 */

 booky.get("/publication",(req,res)=>{
   return res.json({publication:database.publications});
 })


 /* Route         /lists
 Description      get publication based on books.
 Access           public
 parameters       publication
 methods          get
  */

  booky.get("/lists/:publication",(req,res)=>{
    const getSpecificPublication=database.publications.filter(
      (book)=> book.books.includes(req.params.publication)
    )
    if(getSpecificPublication.length ===0){
      return res.json({error:`no such publication found as per books `})
    }
    return res.json({publication:getSpecificPublication});
  })

/////////////post requets///////////////////

/* Route         /book/new
Description     add new books
Access           public
parameters       New
methods          post
 */
 booky.post("/book/new",(req,res)=>{
   const newBook =req.body;
   database.books.push(newBook);
   return res.json({updateBook:database.books});
 });

 /* Route         /author/new
 Description     add new author
 Access           public
 parameters       new
 methods          post
  */
  booky.post("/author/new",(req,res)=>{
    const newAuthor=req.body;
    database.authors.push(newAuthor);
    return res.json({updateAuthor:database.authors})
  });

  /* Route         /publication/new
  Description     add new publication
  Access           public
  parameters       new
  methods          post
   */
booky.post("/publication/new",(req,res)=>{
  const newPublication =req.body;
  database.publications.push(newPublication);
    if(database.publications === newPublication){
  return res.json({error:`Such File is Already Exist`})
  }
  return res.json(database.publications);
})
//port
booky.listen(3000,() =>{
  console.log("post is running on server 3000");
});
