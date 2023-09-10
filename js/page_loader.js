// Array to store created elements
let elmsArr = [];

// Function to create a new element with specified properties
const createElm = (
  tagName,
  content,
  color,
  width,
  height,
  size,
  backgroundColor,
  border,
  margin,
  padding,
  borderRadius,
  boxShadow,
  id
) => {
  // Get the parent div where the new element will be added
  let pageDiv = document.getElementById("pageDiv");

  // Create a new HTML element
  let newElm = document.createElement(tagName);
  pageDiv.appendChild(newElm); // Add the new element to the HTML

  // Set properties of the new element
  newElm.innerText = content;
  newElm.style.color = color;
  newElm.style.width = width + "vw";
  newElm.style.height = height + "vh";
  newElm.style.fontSize = size + "rem";
  newElm.style.backgroundColor = backgroundColor;
  newElm.style.border = border;
  newElm.style.margin = margin + "px";
  newElm.style.padding = padding + "px";
  newElm.style.borderRadius = borderRadius + "%";
  newElm.style.boxShadow = boxShadow;
  newElm.id = id;

  // Add the element's properties to the array
  elmsArr.push({
    tagName,
    content,
    color,
    width,
    height,
    size,
    backgroundColor,
    border,
    margin,
    padding,
    borderRadius,
    boxShadow,
    id,
  });

  // Update creation info text
  const creationInfo = document.getElementById("creationInfo");
  creationInfo.innerText = `Created ${tagName} element with content: "${content}"`;

  console.log("elmsArr", elmsArr);
};

// Function to clear the page by removing all elements
const clearPage = () => {
  let pageDiv = document.querySelector("#pageDiv");
  pageDiv.innerHTML = "";
};

// Function to restore the page from localStorage
const restorePage = () => {
  elmsArr = []; // Clear the main array
  let newElmsArr = [];
  let jsonStr = localStorage.getItem("tags"); // Get JSON string from localStorage

  if (jsonStr) {
    newElmsArr = JSON.parse(jsonStr); // Convert JSON to array

    // Create elements based on the restored array
    for (let item of newElmsArr) {
      createElm(
        item.tagName,
        item.content,
        item.color,
        item.width,
        item.height,
        item.size,
        item.backgroundColor,
        item.border,
        item.margin,
        item.padding,
        item.borderRadius,
        item.boxShadow,
        item.id
      );
    }
  }
};

// Add an event listener to run when the window finishes loading
window.addEventListener("load", () => {
  // Prevent form submission behavior
  document.getElementById("form1").addEventListener("submit", (e) => {
    //happends when we put btn in form
    e.preventDefault(); //stop refresh
  });
  // Add event listener for the "Submit" button
  document.getElementById("submitBtn").addEventListener("click", () => {
    let inputTag = document.getElementById("inputTag"); // get elm from html
    let inputContent = document.getElementById("inputContent"); // get elm from html
    let inputColor = document.getElementById("inputColor"); // get elm from html
    let inputWidth = document.getElementById("inputWidth"); // get elm from html
    let inputHeight = document.getElementById("inputHeight"); // get elm from html
    let inputSize = document.getElementById("inputSize"); // get elm from html
    let inputBackground = document.getElementById("inputBackground"); // get elm from html
    let inputBorder = document.getElementById("inputBorder"); // get elm from html
    let inputMargin = document.getElementById("inputMargin");
    let inputPadding = document.getElementById("inputPadding");
    let inputborderRadius = document.getElementById("inputborderRadius");
    let inputBoxShadow = document.getElementById("inputBoxShadow");
    let inputId = document.getElementById("inputId");
    // ... (get other input elements)

    // Call the createElm function with input values
    createElm(
      inputTag.value,
      inputContent.value,
      inputColor.value,
      inputWidth.value,
      inputHeight.value,
      inputSize.value,
      inputBackground.value,
      inputBorder.value,
      inputMargin.value,
      inputPadding.value,
      inputborderRadius.value,
      inputBoxShadow.value,
      inputId.value
    ); // ... (pass other input values)
  });
  // Add event listener for the "Save" button
  document.getElementById("saveBtn").addEventListener("click", () => {
    // Convert the array to a JSON string

    let jsonStr = JSON.stringify(elmsArr);
    // Save the JSON string to localStorage

    localStorage.setItem("tags", jsonStr); //save to localStorage
  });
  document.getElementById("clearBtn").addEventListener("click", () => {
    clearPage(); // Call the function to clear the page
  });
  // Restore the page from localStorage on load
  restorePage();
});
