/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const convertBtn = document.getElementById("convert-btn");

function convert(metr, imper, convers, input) {
  return `
  ${input} ${metr} = ${(input * convers).toFixed(
    3
  )} ${imper} | ${input} ${imper} = ${(input / convers).toFixed(3)} ${metr}
  `;
}

convertBtn.addEventListener("click", function () {
  let input = inputEl.value;
  lengthEl.textContent = convert("meters", "feet", 3.281, input);
  volumeEl.textContent = convert("liters", "gallons", 0.264, input);
  massEl.textContent = convert("kilos", "pounds", 2.204, input);
});
