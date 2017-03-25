//variables
var carContainer = document.getElementById("container")
var xhr = new XMLHttpRequest();

//Loop over your array of cars to build a card for each car
function makeDom(data){
	// var carString= "" ;
    var currentCar="";
	for(var i=0 ; i<data.cars.length ;i++){
		// carString = data.cars[i];
		currentCar += `<p>the first Car is:  ${data.cars[i].make} </p>`;
		currentCar += `<p>the Model is:  ${data.cars[i].model} </p>`;
		currentCar += `<p>the Year is: ${data.cars[i].year} </p>`;
		currentCar += `<p>the Price is:  ${data.cars[i].price} </p>`;
		currentCar += `<p>the color is:  ${data.cars[i].color} </p>`;
		currentCar += `<p>some other details:  ${data.cars[i].description} </p>`;
	}
	carContainer.innerHTML = currentCar;
	console.log("currentCar",currentCar);
	console.log("carContainer.innerHtML",carContainer.innerHtML);
};

//When your page first loads, you need to use an XHR to load 
//the contents of the JSON file, and parse them into a native JavaScript object.
function executeThisCodeAfterFileLoaded(){
    var data = JSON.parse(this.responseText);
    console.log("my Data is : ", data);
    makeDom(data);
};	

//function when failure the json file 
function executeThisCodeWhenFailure(){
	console.log("failure");
};

xhr.addEventListener ("load",executeThisCodeAfterFileLoaded);
xhr.addEventListener("error",executeThisCodeWhenFailure)
xhr.open ("GET", "inventory.json");
xhr.send();

