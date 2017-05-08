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
			currentCar += `<div class="col-md-3 ">`;
			currentCar += `<div class="box child" id ="container-${i}">`;
			currentCar += `<p class="grandchild">the first Car is:  ${data.cars[i].make} </p>`;
			currentCar += `<p class="grandchild">the Model is:  ${data.cars[i].model} </p>`;
			currentCar += `<p class="grandchild">the Year is: ${data.cars[i].year} </p>`; 
			currentCar += `<p class="grandchild">the Price is:  ${data.cars[i].price} </p>`;
			currentCar += `<p class="grandchild">the color is:  ${data.cars[i].color} </p>`;
			currentCar += `<p class= "description grandchild">some other details:  ${data.cars[i].description} </p>`
			currentCar += `<img class= "carImage grandchild" src=${data.cars[i].image}>`;
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

 