// Drawing the painted cells, along with the robot
function drawState()
{
	// Clear everything on the canvas first
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,500,500);

	// Set the cell where the robot is to painted
	paint[robotX][robotY] = 1;

	// Set the color of the painted squares
	ctx.fillStyle = "#594215";

	// Paint all of the painted squares
	for(let x = 0; x < 20; x++)
		for(let y = 0; y < 20; y++)
			if(paint[x][y] == 1)
				ctx.fillRect(x*25,y*25,25,25);

	// Robot's color
	ctx.fillStyle = "#1D7829";

	// Draw the robot
	ctx.fillRect(robotX*25,robotY*25,25,25);
}

function moveLeft()
{
	if(robotX > 0)
		robotX--;
	drawState();
}

function moveRight()
{
	if(robotX < 19)
		robotX++;
	drawState();
}

function moveUp()
{
	if(robotY > 0)
		robotY--;
	drawState();
}

function moveDown()
{
	if(robotY < 19)
		robotY++;
	drawState();
}
