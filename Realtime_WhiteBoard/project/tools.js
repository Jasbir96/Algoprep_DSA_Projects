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
            tool.lineWidth = 5;
        } else if (toolName == "download") {
            console.log("download clicked");
        }
        else if (toolName == "sticky") {
            currentTool = "sticky";
            createSticky();

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



/*******  create Sticky****/

// 1. static version  -> 
// 2. how it will be added to your ui
// 3. how it will be  functionality 
function createSticky() {
    let stickyDiv = document.createElement("div");
    let navDiv = document.createElement("div");
    let closeDiv = document.createElement("div");
    let minimizeDiv = document.createElement("div");
    let textArea = document.createElement("textarea");
    // class styling
    stickyDiv.setAttribute("class", "sticky");
    navDiv.setAttribute("class", "nav");
    textArea.setAttribute("class", "text-area");

    closeDiv.innerText = "X";
    minimizeDiv.innerText = "min";
    // html structure
    stickyDiv.appendChild(navDiv);
    stickyDiv.appendChild(textArea);
    navDiv.appendChild(minimizeDiv);
    navDiv.appendChild(closeDiv);
    // page me add kr do 
    document.body.appendChild(stickyDiv);

    /**********functionality******/
    let isMinimized = false;
    closeDiv.addEventListener("click", function () {
        stickyDiv.remove();
    })
    minimizeDiv.addEventListener("click", function () {
        textArea.style.display = isMinimized == true ? "block" : "none";
        isMinimized = !isMinimized
    })

    let isStickyDown = false;
    // navbar -> mouse down , mouse mousemove, mouse up 

    navDiv.addEventListener("mousedown", function (e) {
        // initial point
        initialX = e.clientX
        initialY = e.clientY
        console.log("mousedown", initialX, initialY);
        isStickyDown = true;
    })
    navDiv.addEventListener("mousemove", function (e) {
        if (isStickyDown == true) {
            // final point 
            let finalX = e.clientX;
            let finalY = e.clientY;
            console.log("mousemove",finalX, finalY);
            //  distance
            let dx = finalX - initialX;
            let dy = finalY - initialY;
            //  move sticky
            //original top left
            let { top, left } = stickyDiv.getBoundingClientRect()
            // stickyPad.style.top=10+"px";
            stickyDiv.style.top = top + dy + "px";
            stickyDiv.style.left = left + dx + "px";
            initialX = finalX;
            initialY = finalY;
        }
    })
    navDiv.addEventListener("mouseup", function () {
        isStickyDown = false;
    })

}

