# spa-milestone-challenge

## Project Description
[Project Specifications](https://github.com/nss-evening-cohort-05/spa-milestone-challenge-Sanyyouisf/blob/master/instructions.md)

##Instructions

1. Create an array of cars in the inventory.json file (see example structure below). Put at least three cars in the array.
2. When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
3. Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of container. Hint: You must build up the entire string of columns/rows before injecting into the DOM. Use a counter variable to know when to close a row after three columns.
4. Put a standard Bootstrap navbar element at the top of your page.
5. Put a text input field in the navigation bar.
6. Make sure you display all properties of the car in the DOM. Basic styling is up to you.
7. Make sure that each car card element has a CSS class which adds a black border around it.
8 .When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
9. Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
10. When you start typing into the navbar's text input, the description, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.

## Technologies

- HTML5.
- CSS.
- JavaScript.
- Bootstrap.
- Jason file.
- IIFE functions.

![Blog Screengrab](https://raw.githubusercontent.com/nss-evening-cohort-05/spa-milestone-challenge-Sanyyouisf/master/images/image.png)

## Technical Requirements

1. Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.
2. The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).
3. The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.
4. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
-A car DOM element that was clicked on.
-A color name of your choice (see behavior requirement 5 above).
5. Have a complete Readme. 















