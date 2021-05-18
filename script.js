let itemList = document.getElementById("listname");
let inputForm = document.getElementById('i_form')

function insertName(){
    let selectedItem = itemList.options[itemList.selectedIndex].text;
    inputForm.value = selectedItem;
}

function saveBtn() {
    if (!inputForm.value.trim()) {
        inputForm.style.border = '2px solid red'
      }else {
    itemList.options[itemList.selectedIndex].text = inputForm.value.trim();
    inputForm.value = inputForm.value.trim();
}
}