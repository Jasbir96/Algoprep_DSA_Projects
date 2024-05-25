## Agenda
* DEMO
* Resume
* UI part logic 
* Important pointers-> formula 

* `Excel clone` 
  * UI
  * DSA heavy project -> formula

## Resume Text
Excel clone                    (github link) (deployed link)
* Created a web version of excel using vanilla Javascript ,HTML and CSS.
* All the features such as 2d grid, rows ,columns,sheets, formula and address bar  were build using vanilla js and css.
* it contains feature like changing font size ,font type ,alignments and other styling for text(optional)
*  Formula is implemented using `DFS algorithm` and evaluation of that `formula is done via infix stack evaluation`

## Appoach
* `UI` -> Breakdown 
  * subsection identify
    * html , css 
    * js wala 
* `grid` ->construction -> you run 
    * 2d loop of 
      * rows -> 0 to 99 and
        *  col -> 0 to 25
*  How to get the address of a cell
   *  we gave rowid , colid to every cell while construction
   * to get the address -> rowid+1, charcter(colid+65)

* How formatting will work in the case of cells
  * when a button is clicked -> check the address ->
    *  current address  findout ->  rowid , colid -> update that div
    *  2d array -> state save rakhta hai whole grid  -> kis time kya status har ek cheez
       *  value
       *  formula
       *  italic 


```js
function initDB() {
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
}
let db=[[{name:A1
value:"",
 formula: "",
 isItalic:false,
 isBold:false,
 color:
 background

}]]
```
 * How multiple sheets are handled 
   * Dat storage :there is a 3d array of db -> that contains sheet's 2d array 
   * UI level 
```js
let row1=[{name:"A1",value:""},{name:"A2"}]
let row2=[{name:"A1"},{name:"A2"}]
let sheet1=[row1,row2]
let sheet2=[row1,row2]
let db =[sheet1, sheet2]
```
* formula ->
  * what formula is 
    * it should replace the variables and give you the value after evaluation
    * if any of the cell's value changes the formula should automatically 
    *  
  * constraints


### Doubts
**Que**: if interviewer ask what is new in your project then what we can say