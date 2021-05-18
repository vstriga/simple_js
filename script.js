const itemList = document.getElementById("listname");
const inputForm = document.getElementById("i_form");
const inputBtn = document.getElementById("i_btn");

function insertName() {
  const selectedItem = itemList.options[itemList.selectedIndex].text;
  inputForm.value = selectedItem;
  inputColor();
}

function saveBtn() {
  if (!inputForm.value.trim()) {
    inputForm.classList.add("input-line-invalid");
    inputBtn.classList.add("input-btn-invalid");
    inputForm.classList.remove("input-line");
    inputBtn.classList.remove("input-btn");
  } else {
    itemList.options[itemList.selectedIndex].text = inputForm.value.trim();
    inputForm.value = inputForm.value.trim();
  }
}
function inputColor() {
  inputForm.classList.add("input-line");
  inputBtn.classList.add("input-btn");
  inputForm.classList.remove("input-line-invalid");
  inputBtn.classList.remove("input-btn-invalid");
}
