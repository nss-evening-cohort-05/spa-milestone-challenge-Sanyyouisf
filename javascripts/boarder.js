//variables

var input = document.getElementById("input");
var selectChildren = document.body.children;
var allChildren = document.getElementsByClassName("col-md-3");

var CarLot = (function(inventory){

	// increase thickness and change background
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

//event listener for clicking on the card 
	document.body.addEventListener("click",function(event) {				
		for (var i= 0; i<allChildren.length; i++){
			if (allChildren[i].classList.contains("increaseThickness")
			||allChildren[i].classList.contains("changeBackground")){
				allChildren[i].classList.remove("increaseThickness");
				allChildren[i].classList.remove("changeBackground")
			}
			if (event.target.classList.contains("grandchild")){
				event.target.parentNode.parentNode.classList.add("increaseThickness");
				event.target.parentNode.parentNode.classList.add("changeBackground");
			}
			if (event.target.classList.contains("child")){
				event.target.parentNode.classList.add("increaseThickness");
				event.target.parentNode.classList.add("changeBackground");
			}
			if (event.target.classList.contains("col-md-3")){
				event.target.classList.add("increaseThickness");
				event.target.classList.add("changeBackground");
			}
		}
		input.focus();
		input.value = "";
	});


	// write to the description property
	input.addEventListener("keyup",
		inventory.WriteDescription = function(event){
			var selectedElement =document.getElementsByClassName("col-md-3");
			for (var i=0; i<selectedElement.length ;i++){
				if (selectedElement[i].classList.contains("increaseThickness")){
					var description = selectedElement[i].children[0].children[5];
					description.innerText = input.value;
				}
				 	selectedElement[i].classList.remove("changeBackground");
			}
			//when you click enter
			for (var i=0; i<selectedElement.length ;i++){
				if ( event.keyCode === 13 ){
					input.value = "";
					input.blur();
					selectedElement[i].classList.remove("increaseThickness");
					selectedElement[i].classList.remove("changeBackground");
				}
			}
  		}
  	); 


	return inventory;
})(CarLot || {});
