// Creating variables for easy reference to the canvas, as well as the
// 2D context.
var canv = document.getElementById("myCanvas");
var ctx = canv.getContext("2d");

// Robot's current position.
var robotX = 0;
var robotY = 0;

// 2-dimensional array keeping track of where the robot has been.
var paint = new Array(20);
for(let i = 0; i < 20; i++)
	paint[i] = new Array(20);

// Making certain functions called when user uses their keyboard.
document.addEventListener('keydown', function(event) {
	// console.log(event.keyCode);
	if(event.keyCode == 87)
		moveUp();
	else if(event.keyCode == 83)
		moveDown();
	else if(event.keyCode == 65)
		moveLeft();
	else if(event.keyCode == 68)
		moveRight();
});