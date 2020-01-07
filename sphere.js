var canvas = document.querySelector("#myCanvas");
canvas.width = window.innerWidth; //allow the circle to traverse the entire screen
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");

var mouseX = 0;
var mouseY = 0;
 
canvas.addEventListener("mousemove", setMousePosition, false);
 
function setMousePosition(e) {
  mouseX = e.clientX 
  mouseY = e.clientY 
}    

function update() {
	context.clearRect(0, 0, canvas.width, canvas.height); //get rid of the following line so we only see the circle following the mouse

	for (var i = 0; i < positions.length; i++) {
        var ratio = (i + 1) / positions.length;

        context.beginPath();
        context.arc(positions[i].x, positions[i].y, 15, 0, 2 * Math.PI, true);
        context.fillStyle = "rgba(204, 102, 153, " + ratio / 2 + ")";
        context.fill();
    }

	context.beginPath();
	context.arc(mouseX, mouseY, 15, 0, 2 * Math.PI, true); //draws a line following the mouse
	context.fillStyle = "#FF6A6A";
	context.fill();

	storeLastPosition(mouseX, mouseY);

	requestAnimationFrame(update);
}

var motionTrailLength = 100;
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