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
  }
]


const publications =[
{
  id:1,
  name:"witex",
  books:["12345Book"]
}
]

module.exports = {books,authors,publications};
