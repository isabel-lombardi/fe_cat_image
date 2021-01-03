const selectForm = document.querySelector(".select__area form");
const selectBtn = document.querySelector(".select__area__button");

selectForm.addEventListener("click", () => {
  selectBtn.style.display = "block";
});

selectForm.addEventListener("drop", () => {
  selectBtn.style.display = "block";
});
