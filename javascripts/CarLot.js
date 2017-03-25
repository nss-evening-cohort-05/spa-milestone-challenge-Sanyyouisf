// main IIFE function 
//Create one global variable and 
//use the IIFE pattern to augment it two times in separate JavaScript files.
var CarLot = (function () {
  	var inventory = [];

//The first IIFE should add a public function that loads the inventory.
//json file and stores the inventory in a private variable.
// It should also expose a public getter to read the array of cars (e.g. getInventory).
  	return {
	    loadInventory: function (callback) {
	      	var inventoryLoader = new XMLHttpRequest();
		      	inventoryLoader.addEventListener("load", function(){
		      	executeThisCodeAfterFileLoaded;
		      	// executes the XHR requests
		      	inventoryLoader.open ("GET", "inventory.json");
				inventoryLoader.send();
		      	})
	      	},
	    errorInventory: function(callback){
      		var inventoryError= new XMLHttpRequest();
	      		inventoryError.addEventListener("error",function(){
				executeThisCodeWhenFailure;
	      		})
    		}
  	};

})();