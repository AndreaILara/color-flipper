import "./style.css";

const COLOR_PALETTE = {
  "#cdb4db": "Lila",
  "#ffc8dd": "Pink",
  "#ffafcc": "Dark Pink",
  "#bde0fe": "Light Blue",
  "#a2d2ff": "Resolution Blue",
};

Object.keys(COLOR_PALETTE).forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.innerText = COLOR_PALETTE[color];
});
const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  })
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("change", (event) => {

    const newColor = event.target.value;
    //Almacenamos el código de color

    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el código de color seleccionado

  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();

const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`
colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";