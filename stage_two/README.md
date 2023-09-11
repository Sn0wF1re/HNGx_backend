# Stage_two: Express.js CRUD API with MongoDB

This project is a simple Express.js CRUD (Create, Read, Update, Delete) API for managing a collection of persons using MongoDB as the database. It provides endpoints for creating, retrieving, updating, and deleting person records.

## Table of Contents

- [Stage\_two: Express.js CRUD API with MongoDB](#stage_two-expressjs-crud-api-with-mongodb)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)

## Prerequisites

Before you can run this project, you need to have the following prerequisites installed on your system:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/).
- MongoDB: Install MongoDB and make sure it's running on your local machine or a remote server. You can download it from [mongodb.com](https://www.mongodb.com/).

## Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/Sn0wF1re/HNGx_backend.git
   ```

2. Navigate to the project directory:

   ```
   cd HNGx_backend/stage_two/
   ```

3. Install the project dependencies:

   ```
   npm install
   ```

## Configuration

Create a `.env` file in the project root directory and add the following configuration:

```env
PORT=<your_port>
MONGODB_URI=<your_MongoDB_uri>
```

- `PORT`: The port on which the Express server will run.
- `MONGODB_URI`: The MongoDB connection URI. Update this to match your MongoDB server configuration.

## Usage

1. Start the Express server:

   ```
   npm start
   ```

   This will start the server on the port specified in your `.env` file (default is 3000).

2. You can now use a tool like [Postman](https://www.postman.com/) to interact with the API or integrate it into your frontend application.

## API Endpoints

The API provides the following endpoints:

- **Create a Person**

  - Route: `POST /api`
  - Request Body: JSON object with a `name` field.
  - Example:

    ```json
    {
      "name": "John Doe"
    }
    ```

- **Retrieve All Persons**

  - Route: `GET /api`
  - Response: An array of person objects.

- **Retrieve Details of One Person**

  - Route: `GET /api/:id`
  - Response: A person object with the specified ID.

- **Update Details of an Existing Person**

  - Route: `PUT /api/:id`
  - Request Body: JSON object with an updated `name` field.
  - Response: The updated person object.

- **Delete One Person**

  - Route: `DELETE /api/:id`
  - Response: The deleted person object.
