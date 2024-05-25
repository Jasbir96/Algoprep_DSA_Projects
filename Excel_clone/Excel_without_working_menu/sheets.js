let addSheetButton = document.querySelector(".add-sheet");
let sheetsList = document.querySelector(".sheets-list");
let currentSheetId = 0;

addSheetButton.addEventListener("click" , function(e){
    currentSheetId++;
    
    //remove active-sheet class from currently active sheet is sheetsList
    document.querySelector(".active-sheet").classList.remove("active-sheet");

    let sheetDiv = document.createElement("div");
    sheetDiv.classList.add("sheet");
    sheetDiv.classList.add("active-sheet");
    sheetDiv.setAttribute("sheetid" , currentSheetId);
    sheetDiv.textContent = `Sheet ${currentSheetId+1}`;    

    sheetsList.append(sheetDiv);

    // init UI => reset ui to a fresh ui for new sheet
    initUI();
    // add a new db corresponding to this new sheet added
    initDB(); // it will set the deault db to this new db
})

// clicking on sheet and change active sheet !!
sheetsList.addEventListener("click" , function(e){
    // check if clicked on remaining area on sheets list
    // other than sheet
    if(e.target.classList.contains("sheets-list") || e.target.classList.contains("active-sheet") ){
        return;
    }
    //remove active-sheet class from currently active sheet is sheetsList
    document.querySelector(".active-sheet").classList.remove("active-sheet");

    let sheetClicked = e.target;
    sheetClicked.classList.add("active-sheet");

    // set current db to this sheet's db
    let sheetId = sheetClicked.getAttribute("sheetid");
    db = sheetsDB[sheetId];

    // also set ui to current db
    setUI();
    console.log(sheetsDB);
})

function setUI(){
    for(let i=0 ; i<100 ; i++){
        for(let j=0 ; j<26 ; j++){
            let cellObject = db[i][j];
            document.querySelector(`div[rowid='${i}'][colid='${j}']`).textContent = cellObject.value;
        }
    }
}

function initUI(){
    for(let i=0 ; i<100;i++){
        for(let j=0 ; j<26;j++){
            document.querySelector(`div[rowid='${i}'][colid='${j}']`).innerHTML = "";
        }
    }
}