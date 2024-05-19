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
    toolsArr[i].addEventListener("click", function (e) {
        const toolName = toolsArr[i].id;
        if (toolName == "pencil") {
            currentTool = "pencil";
            tool.strokeStyle = "blue";
            console.log("pencil clicked");
        }
        else if (toolName == "eraser") {
            currentTool = "eraser";
            tool.strokeStyle = "white";
            tool.lineWidth = 5;
        } else if (toolName == "download") {
            console.log("download clicked");
            currentTool = "download";
            downloadFile();
        }
        else if (toolName == "sticky") {
            currentTool = "sticky";
            createSticky();

        } else if (toolName == "upload") {
            currentTool = "upload";
            console.log(e.target)
            uploadFile();
        }
        else if (toolName == "undo") {
            currentTool = "undo";
            undoFN();
        } else if (toolName == "redo") {
            console.log("redo clicked");
            redoFN();
        }
    })
}

/***************draw something on canvas*************/
let undoStack = [];
let redoStack = [];
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
    isDrawing = true;
    let pointDesc = {
        desc: "md",
        x: sidx,
        y: sidy - toolBarHeight,
        color: tool.strokeStyle
    }
    undoStack.push(pointDesc);

})
canvas.addEventListener("mousemove", function (e) {
    if (isDrawing == false)
        return;
    let eidx = e.clientX;
    let eidy = e.clientY;
    let toolBarHeight = getYDelta();
    tool.lineTo(eidx, eidy - toolBarHeight);
    tool.stroke();
    let pointDesc = {
        desc: "mm",
        x: eidx,
        y: eidy - toolBarHeight
    }
    // last me add krna h
    undoStack.push(pointDesc);
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


function createOuterShell() {
    let stickyDiv = document.createElement("div");
    let navDiv = document.createElement("div");
    let closeDiv = document.createElement("div");
    let minimizeDiv = document.createElement("div");

    // class styling
    stickyDiv.setAttribute("class", "sticky");
    navDiv.setAttribute("class", "nav");


    closeDiv.innerText = "X";
    minimizeDiv.innerText = "min";
    // html structure
    stickyDiv.appendChild(navDiv);

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
            console.log("mousemove", finalX, finalY);
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
    return stickyDiv;
}

/*******create Sticky****/

// 1. static version  -> 
// 2. how it will be added to your ui
// 3. how it will be  functionality 
function createSticky() {
    let stickyDiv = createOuterShell();
    let textArea = document.createElement("textarea");
    textArea.setAttribute("class", "text-area");
    stickyDiv.appendChild(textArea);
}
let inputTag = document.querySelector(".input-tag")
function uploadFile() {
    // 1. input tag -> file(<input type="file">) [hide] -> css
    // 2. click image icon -> input tag click
    console.log("upload file clicked");
    inputTag.click();
    // 4. file read input tag
    inputTag.addEventListener("change", function () {
        let data = inputTag.files[0];
        // 5. add UI 
        let img = document.createElement("img");
        // src -> file url
        let url = URL.createObjectURL(data);
        img.src = url;
        img.setAttribute("class", "upload-img");
        // 6. add to body

        let stickyDiv = createOuterShell();
        stickyDiv.appendChild(img);

    })

}

function downloadFile() {
    console.log("download clicked")
    //  anchor button create 
    let a = document.createElement("a");
    //  set filename to it's download attribute
    a.download = "file.jpeg";
    //  convert board to url 
    let url = canvas.toDataURL("image/jpeg;base64");
    //  set as href of anchor
    a.href = url;
    // click the anchor
    a.click();

    //  remove anchor
    a.remove();


}
function redraw() {
   
    for (let i = 0; i < undoStack.length; i++) {
        let { x, y, desc } = undoStack[i];

    }
}
function undoFN() {
    // clear screen
    // pop
    if (undoStack.length > 0) {
        tool.clearRect(0, 0, canvas.width, canvas.height);
        redoStack.push(undoStack.pop());
        // last removal
        // redraw
        redraw();
    }
}

function redoFN() {
    if (redoStack.length > 0) {
        // screen clear
        tool.clearRect(0, 0, canvas.width, canvas.height);
        undoStack.push(redoStack.pop());
        redraw();
    }
}




