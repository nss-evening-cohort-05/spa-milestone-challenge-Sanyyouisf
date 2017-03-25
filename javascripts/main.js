// The second IIFE should augment the original one with a function that 
//creates all of the eventHandlers that you need for the application.
// Name the function activateEvents.
function populatePage (inventory) {
  // Loop over the inventory and populate the page
  
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
return inventory;

}(CarLot || {});

 // maker.addVeggie = function(veggieChoice){
 //    return veggiePrices[veggieChoice];
 //  }
// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();

