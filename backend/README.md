# E-Market (Backend)

This API provides endpoints for user registration, user login, and retrieving user details. It is part of an e-commerce system, built using Express.js and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [User Registration](#user-registration)
  - [User Login](#user-login)
  - [Get User Details](#get-user-details)
- [Middleware](#middleware)
- [Running the Server](#running-the-server)
- [Error Handling](#error-handling)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/ecommerce-api.git
   cd ecommerce-api
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```
   SECRET_KEY=your_jwt_secret_key
   ACCESS_TOKEN_EXPIRY=1h
   PORT=3000
   CORS_ORIGIN=http://localhost:3000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   ```

## Configuration

- **PORT**: Port on which the server will run.
- **CORS_ORIGIN**: Origin for CORS policy.
- **MONGO_URI**: MongoDB connection URI.
- **SECRET_KEY**: JWT secret key for signing tokens.
- **ACCESS_TOKEN_EXPIRY**: JWT token expiration time.

## API Endpoints

### User Registration

- **Endpoint**: `POST /api/v1/user/register`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "fullname": "Jane Doe",
    "email": "jane@example.com",
    "password": "securepassword123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Registration successful. Welcome!"
  }
  ```

### User Login

- **Endpoint**: `POST /api/v1/user/login`
- **Description**: Logs in a user and returns a JWT token.
- **Request Body**:
  ```json
  {
    "email": "jane@example.com",
    "password": "securepassword123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Login successful. Welcome back!",
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "fullname": "Jane Doe",
      "email": "jane@example.com",
      "role": "user_role"
    }
  }
  ```

### Get User Details

- **Endpoint**: `GET /api/v1/user/userdetails`
- **Description**: Retrieves details of all users. This endpoint is restricted to admin users.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Response**:
  ```json
  {
    "message": "User details retrieved successfully.",
    "users": [
      {
        "id": "user_id",
        "fullname": "Jane Doe",
        "email": "jane@example.com",
        "role": "user_role"
      }
    ]
  }
  ```

## Middleware

### Authentication

- **Purpose**: Verifies the JWT token provided in the `Authorization` header.
- **Usage**: Applied to routes that require user authentication.

### Authorization

- **Purpose**: Checks if the authenticated user has the required role to access certain routes (e.g., admin).
- **Usage**: Applied to routes that require specific user roles (e.g., admin).

## Running the Server

1. **Start the Server**

   ```bash
   npm start
   ```

   The server will start on the port specified in the `.env` file.

2. **Database Connection**

   Ensure that MongoDB is running and accessible at the URI specified in the `.env` file.

## Error Handling

- **500 Internal Server Error**: An error occurred on the server. Please try again later.
- **401 Unauthorized**: Authentication failed. Provide a valid token.
- **403 Forbidden**: You do not have permission to access this resource.
- **404 Not Found**: The requested resource was not found.
- **400 Bad Request**: Invalid request parameters or data.
