# React Redux Ecommerce Application

A simple e-commerce application built using React, Redux Toolkit, and React Router. The application includes user authentication, product listing, category filtering, pagination, cart management, and checkout functionality.

## Features

* User Authentication using DummyJSON API
* JWT Token Storage in Local Storage
* Product Listing from API
* Category-wise Product Filtering
* Product Pagination
* Add to Cart Functionality
* Cart Item Count
* Checkout Page
* Total Price Calculation
* Remove Product from Cart
* Logout Functionality
* Redux Toolkit State Management

## Technologies Used

* React
* Redux Toolkit
* React Router DOM
* JavaScript
* Vite
* DummyJSON API

## APIs Used

Authentication API

```text
https://dummyjson.com/auth/login
```

Products API

```text
https://dummyjson.com/products
```

Categories API

```text
https://dummyjson.com/products/categories
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd ecommerce-app
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

## Login Credentials

```text
Username: emilys
Password: emilyspass
```

## Project Structure

```text
src
├── app
├── components
├── features
│   ├── auth
│   ├── cart
│   └── products
├── pages
├── App.jsx
└── main.jsx
```

## Functionality

### Authentication

* Login using DummyJSON authentication API
* JWT token stored in local storage
* Error handling for invalid credentials

### Product Management

* Fetch products from API
* Display products
* Filter by category
* Pagination support

### Cart Management

* Add products to cart
* Remove products from cart
* Display cart count
* Calculate total cart value

### Checkout

* Display selected products
* Display total items
* Display total price

## Screenshots

### Login Page
![Login Page](src/Images/Screenshot%202026-06-08%20123526.png)

### Products Page

![Products Page](src/Images/Screenshot%202026-06-08%20123903.png)

### Pagination

![Pagination](src/Images/Screenshot%202026-06-08%20123927.png)

### Checkout Page

![Checkout](src/Images/Screenshot%202026-06-08%20123939.png)

## Future Improvements

* Product search functionality
* Product details page
* Quantity management in cart
* Responsive UI with a component library

## Author

Ayushman Sharma
