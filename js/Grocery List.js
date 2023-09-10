let grocery = document.getElementById("grocery");

grocery.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  let data = this.elements.writeList.value;
  let list = document.querySelector("ol");
  let item = document.createElement("li");
  let text = document.createElement("p");

  text.textContent = data;
  this.elements.writeList.value = "";

  let rmBtn = document.createElement("span");
  rmBtn.classList.add("remove");
  item.append(text, rmBtn);
  list.append(item);
  rmBtn.addEventListener("click", deleteItem);
}
function deleteItem(e) {
  this.parentElement.remove();
}
