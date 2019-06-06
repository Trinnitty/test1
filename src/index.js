import "./styles.css";

let input = document.getElementById("name_input");
let value = input.getAttribute("value");

input.oninput = function() {
  if (value === input.value) {
    input.classList.add("red");
  }
  if (value !== input.value && input.classList.contains("red")) {
    input.classList.remove("red");
  }
};
