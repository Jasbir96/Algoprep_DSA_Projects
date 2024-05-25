/******************************upload Image************************************/

const uploadImg = document.querySelector(".upload-img");
const FileInput = document.querySelector(".input-img");
uploadImg.addEventListener("click", function(e) {
  e.preventDefault();
  FileInput.click();
  FileInput.addEventListener("change", function(e) {
    const writingPad = createBox();

    const img = document.createElement("img");
    let src = URL.createObjectURL(e.target.files[0]);
    img.src = src;
    img.setAttribute("class", "uploadedImgStyle");
    writingPad.appendChild(img);
    img.onload = function() {
      URL.revokeObjectURL(img.src);
    };
  });
});
/***********************************download Image*******************************/

const downloadTool = document.querySelector(".download-tool");
downloadTool.addEventListener("click", function(e) {
  const a=document.createElement("a");
  a.download="file.png";
a.href=board.toDataURL("image/png");
a.click();
a.remove()
});

