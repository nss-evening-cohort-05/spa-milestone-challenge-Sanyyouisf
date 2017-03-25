// The second IIFE should augment the original one with a function that 
//creates all of the eventHandlers that you need for the application.
// Name the function activateEvents.

//variables
var carContainer = document.getElementById("container")

var CarLot = (function(inventory) {
 
	inventory.makeDom = function(data){
    	var currentCar="";
		for(var i=0 ; i<data.cars.length ;i++){
			// Loop over the inventory and populate the page
			// currentCar += `<p>the first Car is:  ${data.cars[i].make} </p>`;
			// currentCar += `<p>the Model is:  ${data.cars[i].model} </p>`;
			// currentCar += `<p>the Year is: ${data.cars[i].year} </p>`;
			// currentCar += `<p>the Price is:  ${data.cars[i].price} </p>`;
			// currentCar += `<p>the color is:  ${data.cars[i].color} </p>`;
			// currentCar += `<p>some other details:  ${data.cars[i].description} </p>`;
			currentCar += `<div class="box" id ="container-${i}">`;
			currentCar += `<p>the first Car is:  ${data.cars[i].make} </p>`;
			currentCar += `<p>the Model is:  ${data.cars[i].model} </p>`;
			currentCar += `<p>the Year is: ${data.cars[i].year} </p>`; 
			// currentCar += `<img class= "carImage" src="${data.cars[i].image}">`
			currentCar += `<p>the Price is:  ${data.cars[i].price} </p>`;
			currentCar += `<p>the color is:  ${data.cars[i].color} </p>`;
			currentCar += `<p>some other details:  ${data.cars[i].description} </p>`;
			// currentCar += `<style background-image="${data.cars[i].image}">`
			currentCar +=`</div>`
			carContainer.innerHTML += currentCar;
		}
		carContainer.innerHTML = currentCar;
	};

	return inventory;
})(CarLot || {});

 
// Load the inventory and send a callback function to be
// invoked after the process is complete
// CarLot.loadInventory();

