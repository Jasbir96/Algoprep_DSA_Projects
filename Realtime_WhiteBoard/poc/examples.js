// select the element
let pencilElement = document.querySelector("#pencil");
let earserElement = document.querySelector("#eraser");
let stickyElement = document.querySelector("#sticky");
let uploadElement = document.querySelector("#upload");
let downloadElement = document.querySelector("#download");
let undoElement = document.querySelector("#undo");
let redoElement = document.querySelector("#redo");



pencilElement.addEventListener("click", function tellPencil() {
    console.log("Pencil is clicked");
})
earserElement.addEventListener("click", function tellEarser() {
    console.log("Earser is clicked");
})
stickyElement.addEventListener("click", function tellSticky() {
    console.log("Sticky is clicked");
})
uploadElement.addEventListener("click", function tellUpload() {
    console.log("Upload is clicked");
})
downloadElement.addEventListener("click", function tellDownload() {
    console.log("Download is clicked");
})
undoElement.addEventListener("click", function tellUndo() {
    console.log("Undo is clicked");
})
redoElement.addEventListener("click", function tellRedo() {
    console.log("Redo is clicked");
})
// select canvas tag and give it full height and width
let canvas = document.querySelector("#board");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// draw something on canvas
let tool = canvas.getContext("2d");

// // ***********path draw *******
// // you want start the drawing path part
// tool.beginPath();
// // starting point of drawing -> 
// tool.moveTo(20,100);
// // ending point of the line
// tool.lineTo(400,150);
// // new line starting point
// tool.moveTo(300,200);
// // ending point
// tool.lineTo(450,150);
// // when -> stroke() is called, it will draw the line
// tool.stroke();

// /*********** path-2 *************/ 
// tool.beginPath();
// // colour change
// tool.strokeStyle = "red";
// tool.lineWidth = 5;
// tool.moveTo(100,100);

// tool.lineTo(200,200);

// tool.stroke();

// console.log("tool", tool);

// line -> implement 
// mouse , canvas -> press(starting point)
// mouse , canvas -> lift(ending point)
let toolBar = document.querySelector(".toolbar");
let isDrawing = false;

canvas.addEventListener("mousedown", function (e) {
    // console.log("mouse down",e);
    let sidx = e.clientX;
    let sidy = e.clientY;
    // drawing will start
    tool.beginPath();
    // jha se press -> canvas
    let toolBarHeight = getYDelta();
    tool.moveTo(sidx, sidy - toolBarHeight);
    isDrawing = true
})
canvas.addEventListener("mousemove", function (e) {
    if (isDrawing == false)
        return;
    let eidx = e.clientX;
    let eidy = e.clientY;
    let toolBarHeight = getYDelta();
    tool.lineTo(eidx, eidy - toolBarHeight);
    tool.stroke();
})
// ***********path draw *******

canvas.addEventListener("mouseup", function (e) {
    isDrawing = false;
})


function getYDelta() {
    let heightOfToolbar = toolBar.getBoundingClientRect().height
    return heightOfToolbar
}