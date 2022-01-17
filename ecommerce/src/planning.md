# Project: React Ecommerce

## MVP:

### 2 pages:

-   Home Page

    -   Grid of products

        -   grid/products container
        -   product component (quantity, variants, pricec, namme, imageURL, fave boolean)
        -   this will be similar to the google books project fml
        -   should be able to click and be redirected to the product page (with id parameter)

    -   Carousel of featured products

-   Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants

        -   All products should be stored in firestore, you should store the following information:
            - quantity
            - variants (could be colors, sizes, etc)
            - price per unit
            - name
            - image url
            - favourited or not (boolean)

        - All data should be stored in firestore and fetched by the frontend, there should be NO static product data in the react application

Minimum: 10 items

## Bonus:

Using firestore and react create a cart system
Create a cart page in your react app
Add logic to prevent users from adding items to cart that are no longer in stock
You will have to check the current cart and the product quantity
Cart page should have the following:

-   List of products in cart
-   ability to change quantity of products in cart
-   ability to remove entries from cart

Make sure you site is scoped to one category of products
