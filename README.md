Here's a **detailed `README.md`** you can use for your MongoDB Fundamentals Week 1 assignment. It explains setup, usage, files, and how to run everything.

---

```markdown
# 📚 MongoDB Fundamentals – Week 1 Assignment

## 🚀 Objective

This assignment demonstrates core MongoDB skills including:

- Setting up MongoDB (locally or using MongoDB Atlas)
- Creating a database and collection
- Performing basic CRUD operations
- Writing advanced queries with projection, sorting, and filtering
- Building aggregation pipelines
- Creating and analyzing indexes for performance optimization

---

## 🗄️ Database Setup

### 1. MongoDB Installation

You can choose **either of the two options**:

#### 🔸 Option 1: Install Locally
- Download MongoDB Community Edition: https://www.mongodb.com/try/download/community
- Install MongoDB Shell (`mongosh`)
- Start MongoDB server using `mongod`

#### 🔸 Option 2: Use MongoDB Atlas
- Create a free MongoDB Atlas account: https://www.mongodb.com/cloud/atlas
- Create a new project and a cluster
- Create a user and whitelist your IP
- Connect using your connection string with `mongosh`

---

## 📦 Project Files

```

mongodb-week1/
│
├── insert\_books.js      # Script to populate the books collection
├── queries.js           # All MongoDB queries used in the assignment
├── README.md            # Project documentation and instructions
├── screenshot.png       # Screenshot showing your books collection in Compass or Atlas

````

---

## 📥 How to Run the Project

### 1. Insert Book Data

Open the MongoDB shell using:

```bash
mongosh
````

Then switch to the database and run the script in your terminal (Node.js required):

```bash
node insert_books.js
```

Alternatively, you can copy and paste the contents into the MongoDB shell directly if using Compass or Atlas Data Explorer.

---

## 📂 MongoDB Database

* **Database Name**: `plp_bookstore`
* **Collection**: `books`
* **Sample Fields per Book**:

  * `title` (string)
  * `author` (string)
  * `genre` (string)
  * `published_year` (number)
  * `price` (number)
  * `in_stock` (boolean)
  * `pages` (number)
  * `publisher` (string)

---

## 🔍 Queries Overview

All queries are located in `queries.js` and grouped by task:

### ✅ Basic CRUD

* Find by genre, author, or year
* Update price
* Delete by title

### ✅ Advanced Queries

* Combine filters with `$and`, `$in`, `$gt`, `$lt`
* Use projection to return specific fields
* Sort by ascending/descending price
* Paginate using `limit()` and `skip()`

### ✅ Aggregation Pipelines

* Average book price by genre
* Most published author
* Count books by decade

### ✅ Indexing

* Create index on `title`
* Compound index on `author` + `published_year`
* Use `explain()` to show index performance

---

## 🖼️ Screenshot

> 📸 Make sure to include a screenshot (e.g., `screenshot.png`) showing your `plp_bookstore` database and the `books` collection with inserted data in MongoDB Compass or Atlas.

---

## 🧪 Requirements

* Node.js v18 or higher
* MongoDB (local or Atlas)
* MongoDB Shell (`mongosh`)
* MongoDB Compass (optional, for GUI)

---

## ✅ Submission Checklist

* [x] `insert_books.js` with your book data
* [x] `queries.js` with all required MongoDB queries
* [x] `README.md` with setup & usage instructions
* [x] Screenshot showing your books collection
* [x] All files committed and pushed to your GitHub Classroom repo

---

## 🖼️ Screenshots

### 1. MongoDB Compass – Book Collection Overview
Shows the `plp_bookstore` database and the `books` collection with inserted documents.
![Book Collection Overview](./screenshots/mongodb-compass-overview.png)

### 2. Aggregation Pipeline Result
Displays the result of a query calculating average price by genre.
![Aggregation Result](./screenshots/aggregation-results.png)

### 3. Indexes Tab (Optional)
Screenshot showing indexes created on `title` and compound index on `author, published_year`.
![Indexes Tab](./screenshots/indexes-tab.png)


---

### 👨‍💻 Created by: *Emmanuel M Jesse*

*MongoDB Fundamentals - PLP Academy Week 1 Assignment*

```

---

```
