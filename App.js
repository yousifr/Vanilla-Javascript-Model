const open = document.querySelector(".open");
const closeModel = document.getElementById("closeModel");
const close = document.querySelector(".close");
open.addEventListener("click", function () {
  closeModel.style.visibility = "visible";
});
close.addEventListener("click", function () {
  closeModel.style.visibility = "hidden";
});
