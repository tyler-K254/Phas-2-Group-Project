# Description

This project is a react app that deals with products. A user can view List of Products,
View single product, Add a product, delete a product and update a product .
The application fetches data from an external API (https://dummyjson.com/products) to display products.

## Instructions to use

1. clone the project into your local machine
2. install depedencies by command: npm install
3. SOnce the dependencies are installed, run npm start to start the application. The app will be running at http://localhost:3000.

# Features

View Products
The application displays a list of products retrieved from the external API. The user can view more details about a product by clicking on it.

Add Product
The user can add a new product to the list by clicking on the "Add Product" button and filling out the form. The new product will be added to the list and saved to the external API.

Edit Product
The user can edit an existing product by clicking on the "Edit" button on the product details page. The user can modify the product details and save the changes to the external API.

Delete Product
The user can delete an existing product by clicking on the "Delete" button on the product details page. The product will be removed from the list and deleted from the external API.


Components
ProductDetails
This component displays the details of a product. It receives props for the product data, whether the product is being edited, and functions for handling input changes, update click, and cancel click.

ProductsForm
This component displays a form for adding a new product. It receives props for handling form submission and form close.

Products
This component is the main component that fetches the product data and renders the list of products. It contains functions for handling product clicks, add product clicks, product form submission, delete clicks, and edit clicks. It also handles pagination logic.

Technologies
This application is built with React.js. It uses React hooks such as useState and useEffect to manage state and perform side effects. It also makes use of the fetch API to make HTTP requests to the external API. The application is styled with Bootstrap.

