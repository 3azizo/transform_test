//  transform: rotate(1turn);
let btn_t = document.querySelector(".transform_btn");
let nests = document.querySelectorAll(".nest");

nests.forEach((nests) => {
  btn_t.addEventListener("click", function () {
    nests.classList.toggle("trans");
    // nests.style.transform = "rotate(1turn)";
  });
});
