# shop-backend

## Overview
This project is a backend system designed to manage inventory and sales for a small shop. It allows users to perform CRUD operations on inventory items and create bills for sales transactions. The system ensures that inventory is automatically updated when sales are recorded, providing a seamless way to track stock and sales.

## Features
Inventory Management:

Add, update, retrieve, and delete items from the inventory.
Keep track of item quantities and prices.

## Sales Billing:

Create bills for sales transactions, specifying items sold and their quantities.
Automatically update inventory quantities based on sales.
Retrieve all bills or details of a specific bill.
REST API:

Implemented using Node.js and Express.js.
MongoDB used for data storage and retrieval.
Well-structured and maintainable code, adhering to best practices.

## Technologies Used
Node.js: Backend server framework.
Express.js: Web framework for handling HTTP requests and routing.
MongoDB: NoSQL database for storing inventory items and bills.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
Body-Parser: Middleware for parsing incoming request bodies.
Getting Started
Clone the Repository:

bash
Copy code
git clone <repository-url>

### Install Dependencies:

npm install

### Setup MongoDB Connection:

Replace 'your_mongo_db_connection_string' in app.js with your MongoDB URI.

## Start the Server:
node app.js
Test API Endpoints:

Use Postman or another API testing tool to interact with the endpoints.
API Endpoints
## Inventory

POST /inventory: Add a new item to the inventory.

GET /inventory: Retrieve all items in the inventory.

GET /inventory/:item_id: Retrieve a specific item by ID.

PUT /inventory/:item_id: Update details of an item.

DELETE /inventory/:item_id: Remove an item from the inventory.

## Bills

POST /bills: Create a new bill for a sale transaction.

GET /bills: Retrieve all bills.

GET /bills/:bill_id: Retrieve details of a specific bill.
