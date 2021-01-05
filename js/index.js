(function init() {
  dropdown();
})();

//Animate the dropdown menu
function dropDown() {
  const menu = document.querySelector(".select-nav__profile");
  const dropdown = document.querySelector(".select-nav__profile__dropdown");

  menu.addEventListener("click", () => {
    if (dropdown.classList.contains("active"))
      dropdown.classList.remove("active");
    else dropdown.classList.add("active");
  });
}



//Let appear the submit button when the user load files
const selectForm = document.querySelector(".select__area form");
const selectBtn = document.querySelector(".select__area__button");

selectForm.addEventListener("click", () => {
  selectBtn.style.display = "block";
});

selectForm.addEventListener("drop", () => {
  selectBtn.style.display = "block";
});
