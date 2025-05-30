// 📂 Task 2: Basic CRUD Operations

// 1. Find all books in a specific genre (e.g., "Programming")
db.books.find({ genre: "Programming" });

// 2. Find books published after a certain year (e.g., 2010)
db.books.find({ published_year: { $gt: 2010 } });

// 3. Find books by a specific author (e.g., "James Clear")
db.books.find({ author: "James Clear" });

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "Atomic Habits" },
  { $set: { price: 17.99 } }
);

// 5. Delete a book by its title
db.books.deleteOne({ title: "Deep Work" });


// 📂 Task 3: Advanced Queries

// 1. Find books that are in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// 2. Projection: return only title, author, and price
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 });

// 3. Sort books by price ascending
db.books.find().sort({ price: 1 });

// 4. Sort books by price descending
db.books.find().sort({ price: -1 });

// 5. Pagination: limit 5 per page, skip 0 (Page 1)
db.books.find().limit(5).skip(0);

// 6. Pagination: limit 5 per page, skip 5 (Page 2)
db.books.find().limit(5).skip(5);


// 📂 Task 4: Aggregation Pipelines

// 1. Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]);

// 2. Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// 3. Group books by decade and count them
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      }
    }
  },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);


// 📂 Task 5: Indexing

// 1. Create an index on the title field
db.books.createIndex({ title: "text" });

// 2. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// 3. Use explain() to compare query performance
db.books.find({ title: "Zero to One" }).explain("executionStats");
