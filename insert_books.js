use('plp_bookstore');

db.books.insertMany([
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 19.99,
    in_stock: true,
    pages: 320,
    publisher: "Avery"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    published_year: 2016,
    price: 15.99,
    in_stock: true,
    pages: 304,
    publisher: "Grand Central Publishing"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 30.00,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 25.00,
    in_stock: false,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 10.00,
    in_stock: true,
    pages: 208,
    publisher: "HarperOne"
  },
  {
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    genre: "Programming",
    published_year: 2015,
    price: 22.00,
    in_stock: true,
    pages: 278,
    publisher: "O'Reilly Media"
  },
  {
    title: "Start With Why",
    author: "Simon Sinek",
    genre: "Business",
    published_year: 2009,
    price: 17.99,
    in_stock: false,
    pages: 256,
    publisher: "Portfolio"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    published_year: 2011,
    price: 14.99,
    in_stock: true,
    pages: 512,
    publisher: "Farrar, Straus and Giroux"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    published_year: 2011,
    price: 18.00,
    in_stock: true,
    pages: 336,
    publisher: "Crown Business"
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    genre: "Business",
    published_year: 2014,
    price: 16.99,
    in_stock: false,
    pages: 224,
    publisher: "Crown Business"
  }
]);
