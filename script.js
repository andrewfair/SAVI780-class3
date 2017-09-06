var myArray = ["pottery", "billiards", "running"];
myArray.forEach(function(x){console.log("I like", x);});

var otherArray = {fav1: "chocolate", fav2: "quality sleep", fav3: "making stuff"};

for (var key in otherArray) {
	console.log(key, otherArray[key]);
}