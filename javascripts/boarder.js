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
			var selectChildren = event.target.parentNode.children;
			// var selectChildren = document.body.children;
			console.log("selectChildren",selectChildren);
			for (var i= 0; i<selectChildren.length; i++) {
				if (selectChildren[i].classList.contains("box")){
					if (selectChildren[i].classList.contains("increaseThickness") 
					|| selectChildren[i].classList.contains("changeBackground")){
						selectChildren[i].classList.remove("increaseThickness");
						selectChildren[i].classList.remove("changeBackground");
						console.log("the border removerd");
					}
					else{
					event.target.classList.add("increaseThickness");
					event.target.classList.add("changeBackground");
					console.log("the border added");
					}
				}
			}
			input.focus();
			input.value = "";
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
