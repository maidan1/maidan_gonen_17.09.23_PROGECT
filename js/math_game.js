// Function to generate a random integer within a given range.
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min); // Ensure the minimum is inclusive.
  max = Math.floor(max); // Ensure the maximum is inclusive.
  return Math.floor(Math.random() * (max - min + 1) + min); // Generate and return the random integer.
};

let n1, n2, operation;

// Add an event listener for when the window finishes loading.
window.addEventListener("load", () => {
  operation = getRandomOperation(); 

  // Set up numbers based on the randomly selected operation.
  if (operation === "divide") {
    n2 = getRandomIntInclusive(1, 10); // Choose a random divisor between 1 and 10.
    n1 = n2 * getRandomIntInclusive(1, 10); // Choose a random dividend that is a multiple of the divisor.
  } else {
    n1 = getRandomIntInclusive(1, 10); // Choose random numbers between 1 and 10 for non-divide operations.
    n2 = getRandomIntInclusive(1, 10);
  }

  // Display the arithmetic operation on the page.
  let operationSymbol;
  switch (operation) {
    case "add":
      operationSymbol = "+";
      break;
    case "subtract":
      operationSymbol = "-";
      break;
    case "multiply":
      operationSymbol = "*";
      break;
    case "divide":
      operationSymbol = "/";
      break;
  }

  document.getElementById(
    "quest"
  ).innerText = `${n1} ${operationSymbol} ${n2} = `;

  // Add an event listener for form submission.
  document.getElementById("form1").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.

    let answer = document.getElementById("answer");
    let result;

    // Calculate the result based on the chosen operation.
    switch (operation) {
      case "add":
        result = n1 + n2;
        break;
      case "subtract":
        result = n1 - n2;
        break;
      case "multiply":
        result = n1 * n2;
        break;
      case "divide":
        result = n1 / n2;
        break;
    }

    // Check if the user's answer matches the calculated result.
    if (parseFloat(answer.value) === result) {
      document.body.style.backgroundColor = "green"; // Set background color to green for correct answer.
      setTimeout(() => {
        document.body.style.backgroundColor = ""; // Reset background color.
        answer.value = ""; // Clear the answer input field.
        window.location.reload(); // Reload the page for a new question.
      }, 1000); // Wait for 1 second before reloading.
    } else {
      document.body.style.backgroundColor = "red"; // Set background color to red for wrong answer.
      setTimeout(() => {
        document.body.style.backgroundColor = ""; // Reset background color.
        answer.value = ""; // Clear the answer input field.
      }, 1000); // Wait for 1 second before clearing the answer.
    }
  });
});

// Function to get a random arithmetic operation.
const getRandomOperation = () => {
  const operations = ["add", "subtract", "multiply", "divide"];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};
