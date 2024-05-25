let cellsContentDiv = document.querySelector(".cells-content");

function initCells() {
    // top left cell
    let cellsContent = "<div class='top-left-cell'></div>";
    // top row 
    cellsContent += "<div class='top-row'>"
    for (let i = 0; i < 26; i++) {
        cellsContent += `<div class='top-row-cell'>${String.fromCharCode(65 + i)}</div>`
    }
    cellsContent += "</div>"
    // left col
    cellsContent += "<div class='left-col'>"
    for (let i = 0; i < 100; i++) {
        cellsContent += `<div class="left-col-cell">${i + 1}</div>`
    }
    cellsContent += "</div>"
    cellsContent += "<div class='cells'>"

    // grid 
    for (let i = 0; i < 100; i++) {
        cellsContent += "<div class='row'>"
        for (let j = 0; j < 26; j++) {
            cellsContent += `<div class='cell' rowid='${i}' colid='${j}' contentEditable='true'></div>`
        }
        cellsContent += "</div>"
    }
    cellsContent += "</div>"
    cellsContentDiv.innerHTML = cellsContent;
}
initCells();














// it represents the current db
let db;
// it will store all db's corresponding to sheet number
let sheetsDB = [];
function initDB() {
    let newDB = [];
    for (let i = 0; i < 100; i++) {
        let row = [];
        for (let j = 0; j < 26; j++) {
            //i j
            let name = String.fromCharCode(j + 65) + (i + 1) + "";
            let cellObject = {
                name: name,
                value: "",
                formula: "",
                childrens: [],
                parents: [],
            }
            row.push(cellObject);
        }
        newDB.push(row);
    }
    // db = newDB;
    sheetsDB.push(newDB);
    db = sheetsDB[sheetsDB.length - 1];
}
initDB();