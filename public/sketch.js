let socket
let color = "#fff"
let strokeWidth = 3
let canvas


function setup (){
    canvas = createCanvas(700, 400)
	// canvas.position(300, 140)
	canvas.background(0)

    //start the socket connection
    socket = io.connect('http://localhost:3000')

    //callback function
    socket.on('mouse', data => {
     stroke(data.color)
     strokeWeight(data.strokeWidth)
     line(data.x, data.y, data.px, data.py)
    })
}

//draw function
function mouseDragged() {
    stroke(color)
    strokeWeight(strokeWidth)
    line(mouseX, mouseY, pmouseX, pmouseY)
// send the mouse coordinates
    sendmouse(mouseX, mouseY, pmouseX, pmouseY)
   }


// Sending data to the socket
function sendmouse(x, y, pX, pY) {
	const data = {
		x: x,
		y: y,
		px: pX,
		py: pY,
		color: color,
		strokeWidth: strokeWidth,
	}

	socket.emit('mouse', data)
}

