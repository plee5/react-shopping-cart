# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project. 

1.1) ReactDOM.render is telling the computer to look for the Cart and render whatever is there into the div component in the HTML code.

1.2) Using Semantic UI means that we can abstract out the CSS for creating the car and just call the Semantic UI components and know what it will do for us.

1.3) We need to wrap addToCart in another function so that when we do click, it won't just immediately call the function and then do nothing else. By wrapping it in another function, we can repeatedly call this function.


2.0) We would need state in a recipe because we'd need to update what we have already put into our mixing bowl and what we still need to put in. I guess this is similar to a to-do list, but still slightly different. 

2.1) For parent to child communication, we just pass in props. For child to parent, we use a function to communicate. They can't be the same because otherwise we don't know what we are passing which direction.

2.2) In order to add and remove items in the cart, we will need to have a function in Product.jsx that will update the state by calling setState and concatenate the new product to the current list.
