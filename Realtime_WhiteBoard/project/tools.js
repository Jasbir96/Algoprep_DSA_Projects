// select the element

// select canvas tag and give it full height and width
let canvas = document.querySelector("#board");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let tool = canvas.getContext("2d");


/*****************tool selector logic***********/
let toolsArr = document.querySelectorAll(".tool");
let currentTool = "pencil";
for (let i = 0; i < toolsArr.length; i++) {
    toolsArr[i].addEventListener("click", function () {
        const toolName = toolsArr[i].id;
        if (toolName == "pencil") {
            currentTool = "pencil";
            tool.strokeStyle = "blue";
        }
        else if (toolName == "eraser") {
            currentTool = "eraser";
            tool.strokeStyle = "white";
            tool.lineWidth=5;
        } else if (toolName == "download") {
            console.log("download clicked");
        }
        else if (toolName == "sticky") {
            console.log("sticky clicked");

        } else if (toolName == "upload") {
            console.log("upload clicked");

        }
        else if (toolName == "undo") {
            console.log("undo clicked");

        } else if (toolName == "redo") {
            console.log("redo clicked");

        }
    })
}

/***************draw something on canvas*************/

let isDrawing = false;
/*******pencil***********/
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

/********helper function****/
let toolBar = document.querySelector(".toolbar");
function getYDelta() {
    let heightOfToolbar = toolBar.getBoundingClientRect().height;
    return heightOfToolbar
}




