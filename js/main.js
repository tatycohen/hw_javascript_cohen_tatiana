function howdy (){
	console.log ("Hi! My name is Tatiana");
}

howdy();

var numba = function (string){
	if (string.length < 7){
		console.log("What a short little word");
	}
	if (string.length > 7){
		console.log("I'm sorry, but that's too many to count");
	}
	if (string.length == 7){
		console.log("7, what a perfect choice!")
	}

};

numba ("7");
numba ("seventy");
numba ("university");



var value = "Cast Away";

function inception (value , callback) {
	callback(value);
}

inception (value , function() {
	console.log ( value + " is a fantastic movie")
});

