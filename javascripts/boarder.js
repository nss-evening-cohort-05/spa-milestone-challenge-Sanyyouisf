//The final IIFE should augment the object with two more functions. 
//One function resets the border thickness and background color for each car element back to the original values. 
//The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
//   1. A car DOM element that was clicked on.
//  1. A color name of your choice

var input = document.getElementById("input");
var selectChildren = document.body.children;

var CarLot = (function(inventory){

	//function to increase thickness and change background
	inventory.resetBoarderBackground = function(){
		if (document.body.classList.contains("box")){
			var selectChildren = document.body.children;
			//loop through all the children of the parent node
			for (var i= 0; i<selectChildren.length; i++) {
				//if any one has the bodred class it delete it 
				if (selectChildren[i].classList.contains("increaseThickness") 
				|| selectChildren[i].classList.contains("changeBackground")) {
						selectChildren[i].classList.remove("increaseThickness");
						selectChildren[i].classList.remove("changeBackground");
				}
			}
		}
	};

	//function to increase thickness and change background
	document.body.addEventListener("click",
		inventory.addBoarderBackground = function(event){	
			if (event.target.classList.contains("col-md-3")){
				var allChildren = document.getElementsByClassName("col-md-3");
				//loop through all the children that have the class col-md-3 , 
				//to remove the border and back ground if the have it and creat a border in the target element.
				for (var i= 0; i<allChildren.length; i++){
					if (allChildren[i].classList.contains("increaseThickness")
					||allChildren[i].classList.contains("changeBackground")){
							allChildren[i].classList.remove("increaseThickness");
							allChildren[i].classList.remove("changeBackground")
					}
				}
			event.target.classList.add("increaseThickness");
			event.target.classList.add("changeBackground");
			input.focus();
			input.value = "";
			}
		}
	);

	input.addEventListener("keyup",
		inventory.WriteDescription = function(event){
			var selectedElement =document.getElementsByClassName("increaseThickness");
			// console.log("event",event);
			var target = selectedElement[0].children[5]; 
			console.log("target",target);
			console.log("input.value",input.value);
			target.innerHTML += input.value;
		} 
	);

	return inventory;
})(CarLot || {});
