// The second IIFE should augment the original one with a function that 
//creates all of the eventHandlers that you need for the application.
// Name the function activateEvents.

//variables
var carContainer = document.getElementById("carContainer");

var CarLot = (function(inventory) {
	inventory.makeDom = function(data){
    	var currentCar=" ";
		var j=0 ;//a counter to check for 3 columns in every line.

		for(var i=0; i<data.cars.length;i++ ){
			if ((j%3) ===0){
				//creating a row
		 		currentCar += `<div class="row">`;
		 	}
			j++;
			currentCar += `<div class="col-md-3">`;
			currentCar += `<div class="box" id ="container-${i}">`;
			currentCar += `<p>the first Car is:  ${data.cars[i].make} </p>`;
			currentCar += `<p>the Model is:  ${data.cars[i].model} </p>`;
			currentCar += `<p>the Year is: ${data.cars[i].year} </p>`; 
			currentCar += `<p>the Price is:  ${data.cars[i].price} </p>`;
			currentCar += `<p>the color is:  ${data.cars[i].color} </p>`;
			currentCar += `<p class= "description">some other details:  ${data.cars[i].description} </p>`
			currentCar += `<img class= "carImage" src=${data.cars[i].image}>`;
			currentCar +=`</div>`
			currentCar +=`</div>`
			if ((j%3) ===0){
			//closing the row after three columns
		 		currentCar +=`</div>`;
			}
		}		
	carContainer.innerHTML = currentCar;
	};

	return inventory;
})(CarLot || {});

 