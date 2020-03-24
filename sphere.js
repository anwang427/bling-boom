//https://www.developphp.com/video/JavaScript/Particle-Effect-System-Tutorial-Snow-Falling-Animation 
// put the ^ horizontal as little pinpoints of light for randomized star animations!
//mysic by Mark Maxwell - Sacred Spheres

var canvas = document.querySelector("#myCanvas");
canvas.width = window.innerWidth; //allow the circle to traverse the entire screen
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");

var mouseX = 0;
var mouseY = 0;
 
canvas.addEventListener("mousemove", setMousePosition, false); //set the program to 'listen' to mouse movement
 
function setMousePosition(e) {
  mouseX = e.clientX 
  mouseY = e.clientY 
}    

function update() {
	context.clearRect(0, 0, canvas.width, canvas.height); //get rid of the following line so we only see the circle following the mouse

	for (var i = 0; i < positions.length; i++) {
        var ratio = (i + 1) / positions.length;

		context.beginPath();
		
		//the trailing path behind the comet
		context.arc(positions[i].x + 60, positions[i].y, ratio, 0, 2 * Math.PI, true);
		context.fillStyle = "rgba(255, 255, 255, " + ratio / 2 + ")";
		context.fill();

		context.arc(positions[i].x + 60, positions[i].y - 5, ratio / 1.2, 0, 2 * Math.PI, true);
		context.arc(positions[i].x + 60, positions[i].y + 5, ratio / 1.2, 0, 2 * Math.PI, true);
		context.fillStyle = "rgba(255, 255, 0, " + ratio / 2 + ")";
		context.fill();

		context.arc(positions[i].x + 60, positions[i].y - 15, ratio / 1.4, 0, 2 * Math.PI, true);
		context.arc(positions[i].x + 60, positions[i].y - 10, ratio / 1.3, 0, 2 * Math.PI, true);
		context.arc(positions[i].x + 60, positions[i].y + 10, ratio / 1.3, 0, 2 * Math.PI, true);
		context.arc(positions[i].x + 60, positions[i].y + 15, ratio / 1.4, 0, 2 * Math.PI, true);
		context.fillStyle = "rgba(255, 106, 106, " + ratio / 2 + ")";
		context.fill();

		context.arc(positions[i].x + 60, positions[i].y - 20, ratio / 1.5, 0, 2 * Math.PI, true);
		context.arc(positions[i].x + 60, positions[i].y + 20, ratio / 1.5, 0, 2 * Math.PI, true);
		context.fillStyle = "rgba(240, 126, 20, " + ratio / 2 + ")";
		context.fill();
	}
	
	//glowing background of the main circle

	context.beginPath();
	context.arc(mouseX + 60, mouseY, 7, 0, 2 * Math.PI, true); //draws a line following the mouse
	context.fillStyle = "rgba(255, 255, 0, 0.5)";
	context.fill();

	context.beginPath();
	context.arc(mouseX + 60, mouseY, 11, 0, 2 * Math.PI, true); //draws a line following the mouse
	context.fillStyle = "rgba(255, 106, 106, 0.3)";
	context.fill();

	context.beginPath();
	context.arc(mouseX + 60, mouseY, 17 , 0, 2 * Math.PI, true); //draws a line following the mouse
	context.fillStyle = "rgba(240, 126, 20, 0.2)";
	context.fill();

	context.beginPath();
	context.arc(mouseX + 60, mouseY, 25, 0, 2 * Math.PI, true); //draws a line following the mouse
	context.fillStyle = "rgba(240, 126, 20, 0.05)";
	context.fill();

	//main circle
	context.beginPath();
	context.arc(mouseX + 60, mouseY, 5, 0, 2 * Math.PI, true); //draws a line following the mouse
	context.fillStyle = "rgba(255, 255,255, 100)";
	context.fill();	

	storeLastPosition(mouseX, mouseY);

	requestAnimationFrame(update);
}

var motionTrailLength = 125;
var positions = [];

function storeLastPosition(xPos, yPos) {
	// push an item
	positions.push({
	x: mouseX,
	y: mouseY
	});

	//get rid of first item
	if (positions.length > motionTrailLength) {
	positions.shift();
	}
}

update(); //the requestAnimationFrame callback calls an update function for the frames

