const gridIcon = document.getElementById("grid-icon");
const switchShape = document.querySelector(".switch-shape");
const sectionShapeOne = document.querySelector(".section-shape-1");
const sectionShapeTwo = document.querySelector(".section-shape-2");

switchShape.addEventListener("click", function () {
  if (sectionShapeOne.classList.contains("d-none")) {
    sectionShapeOne.classList.toggle("d-none");
    sectionShapeTwo.classList.toggle("d-none");
    gridIcon.setAttribute("src", "../assets/icons/grid2.svg");
  } else {
    sectionShapeTwo.classList.toggle("d-none");
    sectionShapeOne.classList.toggle("d-none");
    gridIcon.setAttribute("src", "../assets/icons/grid.svg");
  }
});
