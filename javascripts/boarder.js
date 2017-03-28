//The final IIFE should augment the object with two more functions. 
//One function resets the border thickness and background color for each car element back to the original values. 
//The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
//   1. A car DOM element that was clicked on.
//  1. A color name of your choice


var CarLot = (function (inventory){
	
	inventory.resetBoarderBackground = function(data){
		if (document.body.classList.contains("box")){
			console.log("the class is box");
			var selectChildren = document.body.children;
			//loop through all the children of the parent node
			for (var i= 0; i<selectChildren.length; i++) {
				//if any one has the bodred class it delete it 
				if (selectChildren[i].classList.contains("increaseThickness") ){
					selectChildren[i].classList.remove("increaseThickness");
					console.log("the border removed");
				}
			}
		}
	},

	document.body.addEventListener("click",function(event){
		console.log("event",event);
		var selectChildren = event.target.parentNode.children;
		console.log("selectChildren",selectChildren);
		// if (selectChildren.classList.contains("box")){
			console.log("the class is box");
		for (var i= 0; i<selectChildren.length; i++) {
			if (selectChildren[i].classList.contains("box")){
				//if any one has the bodred class it delete it 
				// console.log("classList before", selectChildren[i].classList);
				if (selectChildren[i].classList.contains("increaseThickness")){
					console.log("if statement");
					selectChildren[i].classList.remove("increaseThickness");
					console.log("the border removerd");
				}
				else{
				event.target.classList.add("increaseThickness");
				console.log("the border added");
				}
			}
		}
});
	return inventory;
})(CarLot || {});
