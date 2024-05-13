// HTML page -> work -> browser
// represent webpage
// console.log(document) ;
// element -> search return
// let h2Elem = document.querySelector("h2");
// // h2Elem text laa ke dedo
// // console.log(h2Elem.innerText);
// h2Elem.innerText = "New Value";
// let ulElem = document.querySelector("ul");
// // li create
// // let liElem = document.createElement("li");
// // // li content add 
// // liElem.innerText = "I am an li element";
// // // append ul
// // ulElem.appendChild(liElem);
// for (let i = 1; i <= 5; i++) {
//     let liElem = document.createElement("li");
//     liElem.innerText = `I am li ${i}`;
//     ulElem.appendChild(liElem);
// }
// // remove
// h2Elem.remove();


/*********************Event listeners*******************/
let ulElem = document.querySelector("ul");
let liElem = document.createElement("li");
// // // li content add 
liElem.innerText = "I am an li element";
// ul
ulElem.appendChild(liElem);

// event listen -> logic apply
liElem.addEventListener("click", liRemover);
function liRemover() {
    console.log("Li was clicked");
    liElem.remove();
}



/***
 * document -> create , update , delete, read
 * eventListener -> element pe event listener -> logic run
 * **/ 