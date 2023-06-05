const books=[
  {
    ISBN:"12345Book",
    name:"Tesla",
    pubDate:"2023-08-02",
    language:"en",
    numPage:250,
    author:[1,2],
    publication:[1],
    category:["tech", "space", "science"]
  },
  {
    ISBN:"2468Aditya",
    name:"Prem gatha",
    pubDate:"2023-08-02",
    language:"hin",
    numPage:250,
    author:[1,2],
    publication:[1],
    category:["Romance", "love", "affection"]
  },
  {
    ISBN:"2468Harry",
    name:"Coding-world",
    pubDate:"2023-08-02",
    language:"eng",
    numPage:250,
    author:[1,2],
    publication:[1],
    category:["C++", "java", "javascript"]
  }
]

const authors =[
  {
    id:1,
    name:"Aditya",
    books:["12345Book","secretBook"]
  },
  {
    id:2,
    name:"Elon musk",
    books:["1234Book"]
  },
  {
    id:3,
    name:"Harry",
    books:["c++","Discovery of coding","Adventure of Tin Tin"]
  },
]


const publications =[
{
  id:1,
  name:"witex",
  books:["12345Book"]
},
{
  id:2,
  name:"Aditya Publications",
  books:["attraction", "love"]
}
]

module.exports = {books,authors,publications};
