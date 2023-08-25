const colorDropdown = document.getElementById("colorDropdown");
const backgroundColorDropdown = document.getElementById("backgroundColorDropdown");
const paddingDropdown = document.getElementById("paddingDropdown");
const fontSizeDropdown = document.getElementById("fontSizeDropdown");
const fontWeightDropdown = document.getElementById("fontWeightDropdown");
const targetDiv = document.getElementById("targetDiv");

const colors = ["black", "red", "blue", "green"];
const backgroundColors = ["white", "lightgray", "lightblue", "lightgreen"];
const paddings = ["10px", "20px", "30px", "40px"];
const fontSizes = ["12px", "16px", "20px", "24px"];
const fontWeights = ["normal", "bold"];

function populateDropdown(dropdown, options) {
  options.forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option;
    optionElement.value = option;
    dropdown.appendChild(optionElement);
  });
}

populateDropdown(colorDropdown, colors);
populateDropdown(backgroundColorDropdown, backgroundColors);
populateDropdown(paddingDropdown, paddings);
populateDropdown(fontSizeDropdown, fontSizes);
populateDropdown(fontWeightDropdown, fontWeights);

colorDropdown.addEventListener("change", () => {
  targetDiv.style.color = colorDropdown.value;
});

backgroundColorDropdown.addEventListener("change", () => {
  targetDiv.style.backgroundColor = backgroundColorDropdown.value;
});

paddingDropdown.addEventListener("change", () => {
  targetDiv.style.padding = paddingDropdown.value;
});

fontSizeDropdown.addEventListener("change", () => {
  targetDiv.style.fontSize = fontSizeDropdown.value;
});

fontWeightDropdown.addEventListener("change", () => {
  targetDiv.style.fontWeight = fontWeightDropdown.value;
});
