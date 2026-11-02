// 1. Change the button color whenever it is clicked.
const colorButton = document.getElementById("colorButton");
const colorMessage = document.getElementById("colorMessage");

const colors = ["#6554bd", "#e66d8c", "#159b91", "#e39a35", "#394b8a"];
let colorIndex = 0;

colorButton.addEventListener("click", function () {
  colorIndex = (colorIndex + 1) % colors.length;
  colorButton.style.backgroundColor = colors[colorIndex];
  colorMessage.textContent = "Button color changed successfully!";
});

// 2. Display a greeting based on the current time.
function showTimeGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 17) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  alert(greeting + " Welcome to my JavaScript webpage.");
}

document.getElementById("greetingButton").addEventListener("click", showTimeGreeting);
document.getElementById("greetingButtonTwo").addEventListener("click", showTimeGreeting);

// 3. Add two numbers and display the result.
document.getElementById("addButton").addEventListener("click", function () {
  const firstValue = document.getElementById("numberOne").value;
  const secondValue = document.getElementById("numberTwo").value;
  const result = document.getElementById("sumResult");

  if (firstValue.trim() === "" || secondValue.trim() === "") {
    result.textContent = "Please enter both numbers.";
    return;
  }

  const sum = Number(firstValue) + Number(secondValue);
  result.textContent = "Sum = " + sum;
});
