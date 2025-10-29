## 📚 MongoDB Bookstore Project

This project demonstrates how to insert and query book data using MongoDB. 

### 🛠️ Prerequisites

Before running the scripts, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (local)
- [MongoDB Compass](https://www.mongodb.com/products/compass)


### 📦 Installation

1. **Clone the repository** (or copy the files into a folder):

   ```bash
   git clone https://github.com/teshomebtadesse/mongodb-data-layer-fundamentals-and-advanced-techniques-teshomebtadesse.git
   cd mongodb-bookstore


2. **Initialize the project and install dependencies**:

   ```bash
   npm init -y
   npm install mongodb
   ```

### 🧩 File Overview

| File            | Purpose                                                                 |
|-----------------|-------------------------------------------------------------------------|
| `insert_books.js` | Inserts 14 book documents into the `books` collection of the `library` database |
| `queries.js`     | Demonstrates MongoDB queries: find, update, delete                     |


### 📥 Inserting Books

To insert books into your MongoDB database:

```bash
node insert_books.js
```

This will connect to your MongoDB instance and populate the `library.books` collection.


### 🔍 Running Queries

To execute sample queries:

```bash
node queries.js
```

### 📌 Notes

- Make sure your MongoDB server is running before executing scripts.
- You can modify the connection string in both `.js` files to match your MongoDB URI.
- For MongoDB Atlas, replace `mongodb://localhost:27017` with your cluster URI.

###Contacts 
email: beteshe19@gmail.com
phone: +251916578058