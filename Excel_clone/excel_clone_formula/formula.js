
for (let i = 0; i < AllGridCells.length; i++) {
    AllGridCells[i].addEventListener("blur", function cellHelper(e) {
        let content = AllGridCells[i].textContent;
    //    value db 
        let address = addressInput.value;
        let { rid, cid } = getRidCidFromAddress(address);
        let cellObject = db[rid][cid];

        if (cellObject.value == content) {
            return;
        }
        cellObject.value = content;

    })
}

// set Formula/update formula
formulaInput.addEventListener("keydown", function (e) {
    console.log("key pressed", e.key);
    if (e.key == "Enter" && formulaInput.value != "") {
        // address get 
        let addressOfTheCell = addressInput.value;
        // fomrula get 
        let cFormula = formulaInput.value;
        // formula evaluate 
        let value = evaluateFormula(cFormula);
        // update UI
        let { rid, cid } = getRidCidFromAddress(addressOfTheCell);
        let tobeChangedCell = document.querySelector(`.grid .cell[rId='${rid}'][cId='${cid}']`);
        tobeChangedCell.textContent = value;
        // setting value on db
        let cellObject = db[rid][cid];
        cellObject.formula = cFormula;
        cellObject.value = value;

    }
})

function evaluateFormula(formula) {
    // ( A1 + A2 ) ->[] 
    let formulaEntities = formula.split(" ");
    // [(,A1,+,A2,)]
    for (let i = 0; i < formulaEntities.length; i++) {

        let ascii = formulaEntities[i].charCodeAt(0);

        if (ascii >= 65 && ascii <= 90) {
            // address -> rid cId
            let cellrcObj = getRidCidFromAddress(formulaEntities[i]);
            // db -> value
            let value = db[cellrcObj.rid][cellrcObj.cid].value;
            // replace in formula
            formula = formula.replace(formulaEntities[i], value);
        }
    }



    // eval -> evaluate-> inbuilt 
    let result = eval(formula);
    return result;
}