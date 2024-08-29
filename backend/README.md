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

### Cart Endpoints

#### Add a Product to the Cart

- **Endpoint**: `POST /api/v1/cart/add`
- **Description**: Adds a product to the user's cart.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Request Body**:
  ```json
  {
    "productId": "product_id",
    "quantity": 2
  }
  ```
- **Response**:
  ```json
  {
    "message": "Product added to cart successfully."
  }
  ```

#### Get the User's Cart

- **Endpoint**: `GET /api/v1/cart/`
- **Description**: Retrieves the user's cart.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Response**:
  ```json
  {
    "message": "Cart retrieved successfully.",
    "cart": {
      "products": [
        {
          "productId": "product_id",
          "quantity": 2
        }
      ]
    }
  }
  ```

#### Update a Cart Item

- **Endpoint**: `PUT /api/v1/cart/update/:productId`
- **Description**: Updates the quantity of a product in the user's cart.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Request Body**:
  ```json
  {
    "quantity": 3
  }
  ```
- **Response**:
  ```json
  {
    "message": "Cart item updated successfully."
  }
  ```

#### Remove a Cart Item

- **Endpoint**: `DELETE /api/v1/cart/remove/:productId`
- **Description**: Removes a product from the user's cart.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Response**:
  ```json
  {
    "message": "Cart item removed successfully."
  }
  ```

### Category Endpoints

#### Create a New Category

- **Endpoint**: `POST /api/v1/category/create`
- **Description**: Creates a new category. Restricted to admin users.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Request Body**:
  ```json
  {
    "name": "Electronics"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Category created successfully."
  }
  ```

#### Get All Categories

- **Endpoint**: `GET /api/v1/category/all`
- **Description**: Retrieves all categories.
- **Response**:
  ```json
  {
    "message": "Categories retrieved successfully.",
    "categories": [
      {
        "id": "category_id",
        "name": "Electronics"
      }
    ]
  }
  ```

#### Update a Category

- **Endpoint**: `PUT /api/v1/category/update/:categoryId`
- **Description**: Updates a category. Restricted to admin users.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Request Body**:
  ```json
  {
    "name": "Updated Category Name"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Category updated successfully."
  }
  ```

#### Delete a Category

- **Endpoint**: `DELETE /api/v1/category/delete/:categoryId`
- **Description**: Deletes a category. Restricted to admin users.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Response**:
  ```json
  {
    "message": "Category deleted successfully."
  }
  ```

### Product Endpoints

#### Create a New Product

- **Endpoint**: `POST /api/v1/product/create`
- **Description**: Creates a new product. Restricted to vendor users.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Request Body**:
  ```json
  {
    "name": "Product Name",
    "price": 100,
    "category": "category_id",
    "description": "Product Description"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Product created successfully."
  }
  ```

#### Get a Specific Product

- **Endpoint**: `GET /api/v1/product/:productId`
- **Description**: Retrieves details of a specific product.
- **Response**:
  ```json
  {
    "message": "Product details retrieved successfully.",
    "product": {
      "id": "product_id",
      "name": "Product Name",
      "price": 100,
      "category": "category_id",
      "description": "Product Description"
    }
  }
  ```

#### Get All Products

- **Endpoint**: `GET /api/v1/product/all`
- **Description**: Retrieves all products.
- **Response**:
  ```json
  {
    "message": "Products retrieved successfully.",
    "products": [
      {
        "id": "product_id",
        "name": "Product Name",
        "price": 100,
        "category": "category_id",
        "description": "Product Description"
      }
    ]
  }
  ```

#### Update a Product

- **Endpoint**: `PUT /api/v1/product/update/:productId`
- **Description**: Updates a product. Restricted to vendor users.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Request Body**:
  ```json
  {
    "name": "Updated Product Name",
    "price": 120,
    "description": "Updated Product Description"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Product updated successfully."
  }
  ```

#### Delete a Product

- **Endpoint**: `DELETE /api/v1/product/delete/:productId`
- **Description**: Deletes a product. Restricted to vendor users.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Response**:
  ```json
  {
    "message": "Product deleted successfully."
  }
  ```

### Order Endpoints

#### Create a New Order

- **Endpoint**: `POST /api/v1/order/create`
- **Description**: Creates a new order.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Request Body**:
  ```json
  {
    "cartId": "cart_id",
    "shippingAddress": "123 Street, City, Country"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Order created successfully."
  }
  ```

#### Get All Orders for a User

- **Endpoint**: `GET /api/v1/order/`
- **Description**: Retrieves all orders for the authenticated user.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Response**:
  ```json
  {
    "message": "Orders retrieved successfully.",
    "orders": [
      {
        "id": "order_id",
        "cartId": "cart_id",
        "shippingAddress": "123 Street, City, Country",
        "status": "pending"
      }
    ]
  }
  ```

#### Get Order Details

- **Endpoint**: `GET /api/v1/order/:orderId`
- **Description**: Retrieves details of a specific order.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Response**:
  ```json
  {
    "message": "Order details retrieved successfully.",
    "order": {
      "id": "order_id",
      "cartId": "cart_id",
      "shippingAddress": "123 Street, City, Country",
      "status": "pending"
    }
  }
  ```

#### Update Order Status

- **Endpoint**: `PUT /api/v1/order/update

-status/:orderId`

- **Description**: Updates the status of an order. Restricted to admin users.
- **Headers**:
  - `Authorization: Bearer <token>`
- **Request Body**:
  ```json
  {
    "status": "shipped"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Order status updated successfully."
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
