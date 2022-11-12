const containerEl = document.querySelector(".container");
for (let index = 0; index < 30; index++) {
  const colourContainerEl = document.createElement("div");
  colourContainerEl.classList.add("color-container");
  containerEl.appendChild(colourContainerEl);
}

const colourContainerEls = document.querySelectorAll(".color-container");
generateColors();

function generateColors() {
  colourContainerEls.forEach((colourContainerEl) => {
    const newColorCode = randomColor();
    // console.log(newColorCode)
    colourContainerEl.style.backgroundColor = "#" + newColorCode;
    colourContainerEl.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "012456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber + 1);
    console.log(colorCode, randomNumber);
  }
  return colorCode;
}
