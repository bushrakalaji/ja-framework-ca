![project screenshots](/src/images/ecommy.png)

# eCommy Store

This is an eCom Store built with React, showcasing a wide range of products available for purchase. Users can browse the products, view individual product details, add items to their cart, and proceed to the checkout process.

## Demo

You can access a live demo of the eCommy Store at [eCom Store Demo](https://ecom-my.netlify.app/).

## Features

- Homepage: Display a list of all products with a look-ahead search bar for filtering by product name. Clicking on a product takes the user to the individual product page.

- Individual Product Page: Show detailed information about a single product, including title, description, image, and reviews. Calculate and display any applicable discounts based on the discountedPrice and price properties. Add the product to the cart with the "Add to Cart" button.

- Cart Page: List the selected items in the cart, including titles, prices, and quantities. Show the total amount and provide a "Checkout" button to proceed to the checkout process.

- Checkout Success Page: Display a success message to the user after a successful checkout. Clear the cart and provide a link to return to the store.

- Contact Page: Include a contact form with fields for full name, subject, email, and body. Perform form validation with requirements for each field. Console log the form data when validation is met.

- Layout Component: Use a Layout component that contains a header with a navigation bar and a Cart icon component. The Cart icon displays the current number of items in the cart and acts as a button.

## Technologies Used

- React
- React Router
- Bootstrap 
- Fetch API to communicate with the API endpoint

## Setup Instructions

1. Clone the repository `https://github.com/bushrakalaji/js-framework-ca`.

2. Install the dependencies using `npm install`.

3. Run the application using `npm start`.

4. Access the application in your browser at `http://localhost:3000`.

## Deployment

The project is deployed on Netlify and can be accessed at [eCom Store](https://ecom-my.netlify.app/).

## Credits

This project was built as a course assignment and utilized the API provided by Noroff. The design and implementation of the eCommy Store were completed by [Bushra kalaji](https://github.com/bushrakalaji).
