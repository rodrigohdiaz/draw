let color = "#fff"
let strokeWidth = 4


function setup (){
    const cv = createCanvas(800, 700)
    cv.position(250, 100)
    cv.background(0)
}

function touchStarted() {
    stroke(color)
    strokeWeight(strokeWidth)
    line(mouseX, mouseY, pmouseX, pmouseY)
   }

function mouseDragged() {
    stroke(color)
    strokeWeight(strokeWidth)
    line(mouseX, mouseY, pmouseX, pmouseY)
   }