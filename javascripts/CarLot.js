// main IIFE function
//variables
// var carContainer = document.getElementsByClassName("container");

var CarLot = (function () {
//The first IIFE should add a public function that loads the inventory.
//json file and stores the inventory in a private variable.
// It should also expose a public getter to read the array of cars (e.g. getInventory).
  	return {

  		loading : function(){
	  		var inventory = [];
	  		var inventoryLoader = new XMLHttpRequest();
		  		inventoryLoader.addEventListener ("load",CarLot.executeThisCodeAfterFileLoaded);
				inventoryLoader.addEventListener("error",CarLot.executeThisCodeWhenFailure)
				inventoryLoader.open ("GET", "inventory.json");
				inventoryLoader.send();
		},

  		executeThisCodeAfterFileLoaded : function(){
    		var data = JSON.parse(this.responseText);
    		console.log("my Data is : ", data);
    		CarLot.makeDom(data);
		},	
	    
	    executeThisCodeWhenFailure : function (){
			console.log("failure");
		},

    	//getter for the inventory 
    	getInventory : function(){
    		return inventory ;
    	},

    	//setter for the inventory
    	setInventory : function(newInventory){
    		inventory.push(newInventory);
    	}   
  	};
})();