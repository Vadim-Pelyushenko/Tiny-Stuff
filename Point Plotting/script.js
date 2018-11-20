let canv = document.getElementById("theCanvas");
let ctx = canv.getContext("2d");

ctx.fillStyle = "#000000";
ctx.fillRect(0,0,600,400);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(1,1,598,398);

//-------------------------------------------------

function setPoints()
{
	let xInput = document.getElementById("xVals").value;
	let yInput = document.getElementById("yVals").value;

	let canv = document.getElementById("theCanvas");
	let ctx = canv.getContext("2d");
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(1,1,598,398);

	let width = canv.width;
	let height = canv.height;

	let xCoords = xInput.split(",");
	let yCoords = yInput.split(",");

	let max_valueX = maxValue(xCoords);
	let max_valueY = maxValue(yCoords);
	let min_valueX = minValue(xCoords);
	let min_valueY = minValue(yCoords);

	let diffExtremeX = max_valueX - min_valueX;
	let diffExtremeY = max_valueY - min_valueY;

	max_valueX += diffExtremeX * 0.05;
	max_valueY += diffExtremeY * 0.05;

	min_valueX -= diffExtremeX * 0.05;
	min_valueY -= diffExtremeY * 0.05;

	// console.log("BOUNDS"); 
	// console.log("X:[" + min_valueX + "," + max_valueX + "]");
	// console.log("Y:[" + min_valueY + "," + max_valueY + "]");


	let numPoints = Math.min(xCoords.length,yCoords.length);
	ctx.fillStyle = "#000000";
	for(let k = 0; k < numPoints; k++)
	{
		let genX = parseInt(generatePixelX(min_valueX,max_valueX,xCoords[k],width));
		let genY = parseInt(generatePixelY(min_valueY,max_valueY,yCoords[k],height));

		console.log(genX + " " + genY);

		ctx.beginPath();
		ctx.arc(genX,genY,3,0,2*Math.PI,false);
		ctx.fill();

		// ctx.beginPath();
		// context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		// context.fillStyle = 'green';
		// context.fill();

		// ctx.fillOval(genX-5,genY-5,10,10);
	}
}

function randomPoints()
{
	let xCor = Math.floor(Math.random()*100);
	let yCor = Math.floor(Math.random()*100);

	for(let k = 0; k < 20; k++)
	{
		xCor += "," + Math.floor(Math.random()*100);
		yCor += "," + Math.floor(Math.random()*100);
	}

	document.getElementById("xVals").value = xCor;
	document.getElementById("yVals").value = yCor;
}

function generatePixelX(minX,maxX,val,width)
{
	let proportion = (val - minX)/(maxX - minX);

	if(proportion < 0)
	{
		console.log(minX + " " + maxX + " " + val + " " + width);
		debugger;
	}
	return proportion * width;
}

function generatePixelY(minY,maxY,val,height)
{
	let proportion = (val - minY)/(maxY - minY);
	return height - (proportion*height); // flipped because of origin in drawing
}

function maxValue(arr)
{
	let max = parseInt(arr[0]);

	for(let k = 0; k < arr.length; k++)
	{
		if(parseInt(arr[k]) > max)
			max = parseInt(arr[k]);
	}

	return max;
}

function minValue(arr)
{
	let min = parseInt(arr[0]);

	for(let k = 0; k < arr.length; k++)
	{
		if(parseInt(arr[k]) < min)
			min = parseInt(arr[k]);
	}

	return min;
}