
//Check if a Year is a Leap Year


let year=2024

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
	console.log("The leap year is true")
}
else{
	console.log("It is false")
}