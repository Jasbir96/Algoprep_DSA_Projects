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


// add the event listener
//  apply the changes