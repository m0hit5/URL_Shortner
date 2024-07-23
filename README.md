# URL Shortener

A simple and efficient URL Shortener application built with Node.js, Express, and MongoDB.

## Features

- Shorten long URLs
- Redirect to original URLs using shortened links
- Track the number of times a shortened URL has been accessed
- User-friendly interface

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- MongoDB installed and running on your machine or a MongoDB Atlas account

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/m0hit5/URL_Shortner.git
    ```
2. Navigate to the project directory
    ```bash
    cd URL_Shortner
    ```
3. Install dependencies
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add the following content, replacing `<your_mongodb_connection_string>` with your actual MongoDB connection string:
    ```plaintext
    MONGODB_URI=<your_mongodb_connection_string>
    PORT=3000
    ```

## Usage

1. Start the server
    ```bash
    npm start
    ```
2. Open your browser and go to `http://localhost:3000`

## Libraries Used

### Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for the development of server-side and networking applications using JavaScript. In this project, Node.js serves as the runtime environment for the application.

### Express.js
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It is used to set up middleware to respond to HTTP requests, define routing tables, and integrate with various template engines.

### Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and their representation in MongoDB. In this project, Mongoose is used to define the schema for URLs and interact with the MongoDB database.

### ShortId
ShortId is a library used to generate short, unique, non-sequential ids. These IDs are URL-friendly and are used in this project to create unique identifiers for shortened URLs.

### EJS
EJS (Embedded JavaScript templating) is a simple templating language that lets you generate HTML markup with plain JavaScript. It is used in this project to render the frontend views, making it easier to inject data into HTML templates.

## Contributing

If you want to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

